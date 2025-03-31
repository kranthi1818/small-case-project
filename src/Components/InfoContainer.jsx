
function InfoContainer({ cardInfo ,selectedSubscription}) {

    const { info, stats, platformData, scid } = cardInfo

    const { shortDescription, publisherName, name, created } = info
    const { ratios, minInvestAmount } = stats
    const { riskLabel } = ratios
    const { ratios: platFormRatio } = platformData
    const { cagrDuration, cagr } = platFormRatio

    const images = {
        Low: 'src/assets/1.png',
        Medium: 'src/assets/2.png',
        High: 'src/assets/3.png',
    };
    const riskLevel = riskLabel ? riskLabel.split(" ")[0] : "Unknown";

    return (
        <div>
            <div className="w-[800px] group border border-transparent border-b-gray-300 rounded-lg shadow-sm flex items-center gap-2
transition-all duration-200 hover:border-gray-400 hover:shadow-md hover:rounded-lg">

               
                <div className="h-14 w-14 flex-shrink-0 ml-2 mb-6">
                    <img
                        src={`https://assets.smallcase.com/images/smallcases/160/${scid}.png`}
                        alt=""
                        className="h-full w-full object-cover rounded-md"
                    />
                </div>

                {/* Name & Description */}
                <div className="flex flex-col w-[3800px] pl-4">
                    <div className="font-medium pt-2 pb-1 group-hover:text-blue-600">{name} 
                        <span className="text-blue-700 text-[10px] ml-3 bg-blue-50 rounded-sm ">{selectedSubscription == 'Free Access'? 'Free Access':null}</span>  </div>
                    <div className="text-sm text-gray-600 pb-1">{shortDescription || "No description available"} 
                    </div>
                    <div className="text-xs text-gray-500 pb-2">by {publisherName}</div>
                </div>

                {/* Min Amount */}
                <div className="flex w-[3800px] justify-around pr-4">
                    <div className="flex flex-col items-center flex-1">
                        <div className="text-xs text-gray-400">Min. Amount</div>
                        <div className="text-sm font-medium">₹{minInvestAmount}</div>
                    </div>

                    {/* CAGR */}
                    <div className="flex flex-col items-center flex-1">
                        <div className="text-xs text-gray-400">{cagrDuration || "Duration"}</div>
                        <div className="text-green-500 font-medium text-md">
                            {cagr !== undefined ? parseInt(cagr * 100) + '%' : 'N/A'}
                        </div>
                    </div>

                    {/* Volatility */}
                    <div className="border border-gray-300 text-xs rounded-md flex items-center justify-around flex-1 text-nowrap pr-3">
                        {images[riskLevel] && (
                            <img src={images[riskLevel]} alt={riskLevel} className="w-6 h-6 object-contain" />
                        )}
                        <span className="text-gray-700">{riskLabel || "Unknown"}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InfoContainer