

function InvestmentType({ handleChangeInvestmentType, selectedInvestment }) {

  let investmentType = ['Any', 'Under ₹5,000', 'Under ₹25,000', 'Under ₹50,000',]

  return (
    <div>
      <div className="font-semibold pb-2 pt-4 text-sm" >Investment Amount</div>
      <div className="w-40">
        {investmentType.map((type, index) => (
          <label key={index} className=" flex items-center list-none text-xs text-gray-600  pl-3 w-full hover:bg-gray-100 rounded-lg ">
            <input type="radio" name="radio" id={type}   checked={selectedInvestment === type} onChange={() => handleChangeInvestmentType(type)} />
            <label htmlFor={type} 
              className={`cursor-pointer p-1  rounded-md transition-all`}
            >{type}</label>
          </label>
        ))}
      </div>
    </div>
  )
}

export default InvestmentType
