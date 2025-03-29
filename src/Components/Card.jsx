
function Card({ cardInfo }) {

    const { info, stats, platformData, scid } = cardInfo

    const { shortDescription, publisherName, name, created } = info
    const { ratios, minInvestAmount } = stats
    const { riskLabel } = ratios
    const { ratios: platFormRatio } = platformData
    const { cagrDuration, cagr } = platFormRatio


    return (
        <div>

            <div className="p-5 flex">
                <div className="h-16 w-16">
                    <img src={`https://assets.smallcase.com/images/smallcases/160/${scid}.png`} alt="" />
                </div>

                <div className="flex  justify-between
                ">
                    <div className="flex flex-col">
                        <div>
                            <div className="pl-5 font-medium ">{name.slice(0, 19) + '....'}</div>
                            <div className="pl-5 text-sm">{shortDescription}</div>
                            <div className="pl-5 text-sm text-gray-600 mt-2">by {publisherName}</div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center  pl-2 pr-2">
                        <div className="flex flex-col">
                            <div className="text-sm text-gray-400 pl-2">Min. Amount</div>
                            <div className="text-sm text-center ">₹{minInvestAmount}</div>
                        </div>
                        <div className="flex flex-col p-1">
                            <div className="text-sm text-gray-400  pl-2 pt-1">{cagrDuration}</div>
                            <div className="text-center text-green-500 text-md">{parseInt(cagr * 100)+'%'}</div>
                        </div>
                        <div className="border-2 border-gray-300 text-sm p-1 ml-2 ">{riskLabel}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card