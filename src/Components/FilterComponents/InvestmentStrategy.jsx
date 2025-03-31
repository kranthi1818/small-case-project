
function InvestmentStrategy({ handleChangeStrategy ,selectedInvestStrategy}) {
  let investStrategy = ['Asset Allocation', 'corporateGovernance', 'Dividend', 'ESG',
    'Factor Investing', 'Fundamental', 'Goal Based', 'Growth', 'Momentum',
    'Quality', 'Quantamental', 'Quantitive',
    'Sector Tracker', 'Technical', 'Thematic', 'Value']

  return (
    <div>
      <div className="font-semibold pb-3 pt-2 text-sm">Investment Strategy</div>
      {investStrategy.map((items, index) => (
        <label className="list-none flex items-center pl-2 hover:bg-gray-100 w-52 rounded-lg " key={index}>
          <input type="checkbox" id={items} name="checkbox" checked={selectedInvestStrategy.has(items)} onChange={() => handleChangeStrategy(items)} />
          <span className="pl-2 text-sm text-gray-700 pt-2 pb-2" htmlFor={items}>{items}</span>
        </label>
      ))}
    </div>
  )
}

export default InvestmentStrategy
