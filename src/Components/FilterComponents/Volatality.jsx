

function Volatality({handleClickVolatality}) {
    let volatality = ['Low','Medium','High']
    return (
        <div>
            <div className="font-semibold pb-2 pt-2">Volatality</div>
            <div className="flex justify-around border-2 border-gray-400">
              {volatality.map((items,index)=>(
                <div onClick={()=>handleClickVolatality(items)} key={index}>{items}</div>
              ))}
            </div>
        </div>
    )
}

export default Volatality
