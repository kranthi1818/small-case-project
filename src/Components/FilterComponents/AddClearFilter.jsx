
function AddClearFilter({selectedFiltersCount,handleClearFilters}) {
    return (
        <div className='flex border-2 justify-between items-center p-2 border-black'>
            <div className="text-sm pl-4 font-medium flex items-center">
                Filters
                {selectedFiltersCount > 0 && (
                    <span className="ml-2 bg-blue-600 text-white text-xs rounded-full px-2">
                        {selectedFiltersCount}
                    </span>
                )}
            </div>
            <button
                className={`text-sm pr-4 font-medium underline ${selectedFiltersCount > 0 ? "text-blue-600 cursor-pointer" : "text-gray-400 cursor-not-allowed"
                    }`}
                onClick={selectedFiltersCount > 0 ? handleClearFilters : undefined}
                disabled={selectedFiltersCount === 0}
            >
                Clear All
            </button>
        </div>
    )
}

export default AddClearFilter