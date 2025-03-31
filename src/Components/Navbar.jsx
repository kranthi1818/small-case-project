

function Navbar({ handleChangePopularity, handleChangeYears, handleChangeOrder, perMonthYear, orderBy }) {

    const popularity = ['Popularity', 'Minimum Amount', 'Recently Rebalanced',]

    const years = ['1M', '6M', '1Y', '3Y', '5Y']

    const order = ['High-Low', 'Low-High']

    return (
        <>
            <div className="flex justify-center items-center p-10">
                <div className="pr-20 ">All Items</div>
                <details className="relative w-56 pl-20">
                    <summary className="flex items-center justify-center border-b-2 border-blue-500 pb-2 cursor-pointer list-none">
                        <div className="text-gray-600 text-sm ">Sort by</div>
                    </summary>

                    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded mt-1 p-4 z-10 border border-gray-200">


                        <ul className="mb-4">
                            {popularity.map((items, index) => (
                                <li key={index} className="hover:bg-gray-100 text-sm p-1 pl-2 pr-2 rounded-lg">
                                    <label className="flex items-center justify-between py-1 cursor-pointer">
                                        <span className="text-gray-700">{items}</span>
                                        <input type="radio" name="sort-option"
                                            onChange={() => handleChangePopularity(items)} className="w-3 h-3 accent-blue-500" />
                                    </label>
                                </li>
                            ))}
                        </ul>

                        <div>
                            <div className="text-gray-600 font-medium mb-1 text-sm">Returns</div>


                            <div className="text-gray-600 text-sm mb-1">Time period</div>
                            <div className="flex border border-gray-300 rounded mb-3 w-44">
                                {years.map((items, index) => (

                                    <label key={index} className={`flex ${perMonthYear == items ? 'text-blue-600 hover:bg-blue-200 border border-blue-600 bg-blue-200' : 'hover:bg-gray-200'} justify-center items-center cursor-pointer`}>
                                        <input
                                            type="radio"
                                            name="sort-option"
                                            value={items}
                                            onChange={() => handleChangeYears(items)}
                                            className="hidden"
                                        />
                                        <span className={`p-2 pl-3  text-xs font-medium rounded-md`}>
                                            {items}
                                        </span>
                                    </label>

                                ))}
                            </div>

                            <div className={`text-gray-600 text-sm mb-1 ${perMonthYear !== null ? "block" : "hidden"}`}>
                                Order by
                            </div>
                            <div className={`flex border-gray-300 border rounded ${perMonthYear !== null ? "block" : "hidden"}`}>
                                <ul className="flex w-full">
                                    {order.map((items, index) => (
                                        <li
                                            key={index}
                                            className={`list-none flex-1 text-center font-medium ${orderBy === items ? 'text-blue-600 border border-blue-600 bg-blue-200' : ''}`}
                                        >
                                            <label className="flex items-center justify-center py-1 cursor-pointer w-full">
                                                <span className="text-gray-700 text-sm">{items}</span>
                                                <input
                                                    type="radio"
                                                    name="sort-order"
                                                    onChange={() => handleChangeOrder(items)}
                                                    className="hidden"
                                                />
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                </details>
            </div>
        </>
    )
}

export default Navbar