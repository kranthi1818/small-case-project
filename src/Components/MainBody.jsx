import InfoContainer from "./InfoContainer"
import InvestmentType from "./FilterComponents/InvestmentType";
import SubscriptionType from "./FilterComponents/SubscriptionType"
import { useState, useEffect } from "react";
import Volatality from "./FilterComponents/Volatality";
import LaunchDate from "./FilterComponents/LaunchDate";
import InvestmentStrategy from "./FilterComponents/InvestmentStrategy";
import Navbar from "./Navbar";
import AddClearFilter from "./FilterComponents/AddClearFilter";

function MainBody() {

  let initialFilters = {

    subscriptionType: 'Show All',
    investmentAmount: 'Any',
    volatality: new Set(),
    investStrategy: new Set(),
    launchDate: false,
    popularity: null,
    perMonthYear: null,
    orderBy: 'High-Low'

  }
  const [filters, setFilters] = useState(initialFilters);
  const [smallcaseData, setSmallCaseData] = useState([])

  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await fetch('/jsonFile/smallcases.json')
        let smallData = await response.json()
        setSmallCaseData(smallData.data)
      } catch (error) {
        console.log('Error Fetching Data')
      }
    }

    fetchData()

  }, [])


  function handleChangeSubscription(type) {
    setFilters((prev) => ({ ...prev, subscriptionType: type }));
  }

  function handleChangeInvestmentType(type) {
    setFilters((prev) => ({ ...prev, investmentAmount: type }));
  }

  function handleChangeVolatality(type) {
    setFilters((prev) => {

      let updatedVolatality = new Set(prev.volatality)

      if (updatedVolatality.has(type)) {
        updatedVolatality.delete(type)
      } else {
        updatedVolatality.add(type)
      }

      return { ...prev, volatality: updatedVolatality };
    })
  }

  function handleChangeStrategy(type) {
    setFilters((prev) => {
      let updatedStragtegy = new Set(prev.investStrategy)

      if (updatedStragtegy.has(type)) {
        updatedStragtegy.delete(type)
      } else {
        updatedStragtegy.add(type)
      }
      return { ...prev, investStrategy: updatedStragtegy }
    })
  }

  function handleLaunchChange() {
    setFilters((prev) => ({ ...prev, launchDate: !prev.launchDate }));
  }

  function handleChangePopularity(type) {
    setFilters((prev) => ({ ...prev, popularity: type, perMonthYear: null }));
  }

  function handleChangeYears(type) {
    setFilters((prev) => {
      return { ...prev, perMonthYear: type, popularity: null }
    })
  }
  function handleChangeOrder(orderType) {
    setFilters((prev) => ({ ...prev, orderBy: orderType }));
  }


  function getFilteredData(data, filters) {
    const { subscriptionType, investmentAmount, volatality, launchDate, investStrategy } = filters;

    return data.filter(item => {
      const flags = item.flags;
      const stats = item.stats;
      const info = item.info;
      const isPrivate = flags.private;

      if (subscriptionType !== "Show All") {
        if (subscriptionType === "Free Access" && isPrivate) return false;
        if (subscriptionType === "Fee Based" && !isPrivate) return false;
      }

      if (investmentAmount !== "Any") {
        let amountString = investmentAmount.split("₹")[1].split(",").join("");
        let numericAmount = parseInt(amountString, 10);
        if (stats.minInvestAmount > numericAmount) return false;
      }

      if (volatality.size > 0) {
        let riskLabel = stats.ratios.riskLabel.split(' ')[0];
        if (!volatality.has(riskLabel)) return false;
      }

      if (launchDate) {
        let currentYear = new Date().getFullYear();
        let launchYear = new Date(info.created).getFullYear();
        if ((currentYear - launchYear) < 6) return false;
      }

      if (investStrategy.size > 0) {
        let hasStrategy = info.investmentStrategy.some((item) => investStrategy.has(item.displayName));
        if (!hasStrategy) return false;
      }

      return true;
    });
  }

  function getSortedData(filteredData, filters) {
    const sortFunctions = {
      'Popularity': (a, b) =>
        a.brokerMeta.flags.popular - b.brokerMeta.flags.popular,
      "Minimum Amount": (a, b) =>
        a.stats.minInvestAmount - b.stats.minInvestAmount,
      "Recently Rebalanced": (a, b) =>
        new Date(b.info.lastRebalanced) - new Date(a.info.lastRebalanced),
    };
  
   
    if (filters.popularity in sortFunctions) {
      return [...filteredData].sort(sortFunctions[filters.popularity]);
    } else {
      // Sorting by Return Duration
      const returnKeyMap = {
        "1M": "monthly",
        "6M": "halfyearly",
        "1Y": "yearly",
        "3Y": "threeYear",
        "5Y": "fiveYear",
      };
    
      const returnKey = returnKeyMap[filters.perMonthYear];
    
      if (!returnKey) {
        return [...filteredData]; 
      }
    
      return [...filteredData].sort((a, b) => {
        const valueA = (a.stats.returns?.[returnKey] ?? 0) * 100;
        const valueB = (b.stats.returns?.[returnKey] ?? 0) * 100;
    
        return filters.orderBy === "High-Low" ? valueB - valueA : valueA - valueB;
      });
    }    
  }
  

  const filteredData = getFilteredData(smallcaseData, filters);
  const sortedData = getSortedData(filteredData, filters);


  //For Counting Filters
  const selectedFiltersCount =
    (filters.subscriptionType !== "Show All" ? 1 : 0) +
    (filters.investmentAmount !== "Any" ? 1 : 0) +
    filters.volatality.size +
    (filters.launchDate ? 1 : 0) +
    filters.investStrategy.size;

  //For Clear All Filters
  const handleClearFilters = () => {
    setFilters(initialFilters);
  };

  return (
    <div>
      <Navbar
        handleChangePopularity={handleChangePopularity}
        handleChangeYears={handleChangeYears}
        handleChangeOrder={handleChangeOrder}
        perMonthYear={filters.perMonthYear}
        orderBy={filters.orderBy}
      />

      <div className='grid grid-cols-[1fr,2fr] pl-32 pr-32'>

        <div className="pl-32 pr-10">

          <AddClearFilter handleClearFilters={handleClearFilters} selectedFiltersCount={selectedFiltersCount} />

          <SubscriptionType handleChangeSubscription={handleChangeSubscription} selectedSubscription={filters.subscriptionType} />

          <InvestmentType handleChangeInvestmentType={handleChangeInvestmentType} selectedInvestment={filters.investmentAmount} />

          <Volatality handleChangeVolatality={handleChangeVolatality} selectedVolatality={filters.volatality} />

          <LaunchDate handleLaunchChange={handleLaunchChange} isLaunchDate={filters.launchDate} />

          <InvestmentStrategy handleChangeStrategy={handleChangeStrategy} selectedInvestStrategy={filters.investStrategy} />

        </div>
        <div>

          <div>
            {sortedData.map((cardInfo, index) => (
              <InfoContainer smallcaseData={smallcaseData} cardInfo={cardInfo} key={index} selectedSubscription={filters.subscriptionType} />
            ))}
          </div>

        </div>

      </div>
    </div>
  )
}

export default MainBody
