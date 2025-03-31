function SubscriptionType({ handleChangeSubscription, selectedSubscription }) {
  let subscription = ['Show All', 'Free Access', 'Fee Based'];

  return (
    <div>
      <p className={`font-semibold text-gray-700 pb-2 pt-2 text-sm `}>Subscription Type</p>
      <div   className="flex border border-gray-300 text-center text-md rounded-md h-10 w-52">
        {subscription.map((type, index) => (
          <label key={index} className={`flex-1 p-1 pl-3 pr-3  font-semibold   text-gray-700 text-xs  cursor-pointer  hover:bg-gray-300
           ${selectedSubscription == type ? 'bg-blue-100 hover:bg-blue-200 border border-blue-600 text-blue-900 ' : 'bg-white'}`}>
            <input
              type="radio"
              name="subscription"
              value={type}
              checked={selectedSubscription === type}
              onChange={() => handleChangeSubscription(type)}
              className="hidden"
            />
            {type}
          </label>
        ))}
      </div>
    </div>
  );
}
export default SubscriptionType;
