import Card from "./Card"
import InvestmentType from "./FilterComponents/InvestmentType";
import SubscriptionType from "./FilterComponents/SubscriptionType"
import { useState } from "react";
import Volatality from "./FilterComponents/Volatality";
import LaunchDate from "./FilterComponents/LaunchDate";
import InvestmentStrategy from "./FilterComponents/InvestmentStrategy";

function MainBody({ smallcaseData }) {

  let initialFilters = {

    subscriptionType: 'ShowAll',
    investmentAmount: 'Any',
    volatality:new Set(),
    investStrategy:new Set()

  }
  const [filters, setFilters] = useState(initialFilters);
console.log(filters)

  function handleClickSubscription(type) {
    setFilters((prev) => ({ ...prev, subscriptionType: type }));
  }

  function handleChangeInvestmentType(type) {
    setFilters((prev) => ({ ...prev, investmentAmount: type }));
  }

  function handleClickVolatality(type){
    setFilters((prev)=>{

      let updatedVolatality =  new Set(prev.volatality)
      
      if(updatedVolatality.has(type)){
        updatedVolatality.delete(type)
      }else{
        updatedVolatality.add(type)
      }

      return { ...prev, volatality: updatedVolatality };
    })
  }


  function getFilteredData(data, filters) {
    let filteredData = [...data];

    //  subscription type filter
    if (filters.subscriptionType == "Free Access") {
      filteredData = data.filter((ele) => {
        let subscriptionTypeIsPrivate = ele.flags.private;
        return !subscriptionTypeIsPrivate;
      });
    } else if (filters.subscriptionType == "Fee Based") {
      filteredData = data.filter((ele) => {
        let subscriptionTypeIsPrivate = ele.flags.private;
        return subscriptionTypeIsPrivate;
      });
    } else if (filters.subscriptionType == "Show All") {
      filteredData = [...data];
    }

    //  investment amount filter
    if (filters.investmentAmount == "Any") {
      filteredData = [...filteredData];
    } else {
      let amountFilter = filters.investmentAmount.split("₹")[1]; 
      if (amountFilter) {
        let numericAmount = parseInt(amountFilter.split(",").join(""), 10); 
        filteredData = filteredData.filter((item) => item.stats.minInvestAmount < numericAmount);
      }
    }
     //volatality filter
    if (filters.volatality.size > 0) { 
      filteredData = filteredData.filter((items) => {
        let volatility = items.stats.ratios.riskLabel; 

        return filters.volatality.has(volatility.split(' ')[0]); 
      });
    }
    //investment strategey


    return filteredData;
  }

  const filteredData = getFilteredData(smallcaseData, filters);

  return (
    <div>
      <div className='grid grid-cols-[1fr,2fr] pl-32 pr-32'>

        <div>
          <div className='flex border-2 justify-between items-center  p-2 border-black'>
            <div className='text-sm pl-4 font-medium'>Filters</div>
            <div className='text-sm pr-4 font-medium text-blue-600 underline'>Clear All</div>
          </div>
          <SubscriptionType handleClickSubscription={handleClickSubscription} />
          <InvestmentType handleChangeInvestmentType={handleChangeInvestmentType} />
          <Volatality handleClickVolatality={handleClickVolatality}/>
          <LaunchDate/>
          <InvestmentStrategy/>
        </div>
        <div>
          <div>
            {filteredData.map((cardInfo, index) => (
              <Card smallcaseData={smallcaseData} cardInfo={cardInfo} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBody
