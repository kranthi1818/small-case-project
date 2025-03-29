

function InvestmentType({handleChangeInvestmentType}) {

    let investmentType = ['Any','Under ₹5,000','Under ₹50,000']

  return (
    <div>
      <div className="font-semibold pb-2 pt-2" >Investment Amount</div>
      <div>
        {investmentType.map((items,index)=>(
            <li key={index}  className="list-none pl-3">
                <input type="radio" name="radio" id = {items} onChange={()=>handleChangeInvestmentType(items)}/>
                <label htmlFor={items} className="pl-2">{items}</label>
            </li>
        ))}
    </div>
    </div>
  )
}

export default InvestmentType
