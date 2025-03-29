
function InvestmentStrategy() {
    let investStrategy = ['Asset Allocation','corporateGovernance','Dividend','ESG','Factor Investing','Fundamental','Goal Based','Growth','Momentum','Quality','Quantamental','Quantitive','Sector Tracker','Technical','Thematic','Value']
  return (
    <div>
        <div className="font-semibold pb-2 pt-2">Investment Strategy</div>
        {investStrategy.map((items,index)=>(
            <li className="list-none flex pl-2" key={index}>
                <input type="checkbox" />
                <label className="pl-2 p-1" htmlFor="">{items}</label>
            </li>
        ))}
    </div>
  )
}

export default InvestmentStrategy