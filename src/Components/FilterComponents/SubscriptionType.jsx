

function SubscriptionType({handleClickSubscription}) {

  let subscription = ['Show All','Free Access','Fee Based']

  return (
    <>
    <div className="w-56">
        <p className="font-semibold pb-2 pt-2">Subscription Type</p>
        <ul className="flex border-2 border-gray justify-evenly text-center rounded-lg text-md">
          {subscription.map((type,index)=>(
            <li onClick={()=>handleClickSubscription(type)} className=" hover:bg-gray-300 p-1" key={index}>
              {type}
            </li>
          ))}
        </ul>
    </div>
    </>
  )
}

export default SubscriptionType