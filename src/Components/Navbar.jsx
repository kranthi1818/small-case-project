

function Navbar() {
    return (
        <>
            <div>
                <div className="navbar bg-base-100 shadow-sm flex pl-72 pr-72 p-10">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">All Items</a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <details>
                                    <summary>sort by Popularity</summary>
                                    <ul className="bg-base-100 rounded-t-none p-2">
                                        <li className="flex justify-between">
                                            <label className="text-sm" htmlFor="">Popularity</label>
                                            <input type="radio" />
                                        </li >
                                        <li className="flex justify-between">
                                            <label className="text-sm" htmlFor="">Minimum Amount
                                            </label>
                                            <input type="radio" />
                                        </li>
                                        <li className="flex justify-between">
                                            <label className="text-sm" htmlFor="">Recently Rebalanced</label>
                                            <input type="radio" />
                                        </li>
                                        <li>
                                            <div className="text-sm">Returns</div>
                                            <div className="text-sm">Time Period</div>
                                            <div className="flex border-gray-400 border-2 justify-between">
                                                <div className="p-1 bg-blue-300">1M</div>
                                                <div className="p-1 bg-blue-300">6M</div>
                                                <div className="p-1 bg-blue-300">1Y</div>
                                                <div className="p-1 bg-blue-300">3Y</div>
                                                <div className="p-1 bg-blue-300">5Y</div>
                                            </div>
                                            <div className="text-sm">Order by</div>
                                            <div className="flex border-2 border-gray text-sm justify-evenly">
                                                <div  className="border-blue-900 border-2 bg-blue-400">High-Low</div>
                                                <div className="border-blue-900 border-2 bg-blue-400">Low-High</div>
                                            </div>
                                        </li>

                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar