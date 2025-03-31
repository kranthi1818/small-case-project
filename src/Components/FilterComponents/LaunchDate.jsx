

function LaunchDate({handleLaunchChange,isLaunchDate}) {
    return (
        <>
            <div className=" font-semibold text-sm pt-5 pb-2">Launch Date</div>
            <div className="flex pl-2 hover:bg-gray-100 w-52">
                <input type="checkbox" id='launch' checked={isLaunchDate} onChange={()=>handleLaunchChange()}/>
                <label htmlFor="launch"  className="pl-2 pt-2 pb-2 text-sm text-gray-700">include new smallcases</label>
            </div>
        </>
    )
}

export default LaunchDate