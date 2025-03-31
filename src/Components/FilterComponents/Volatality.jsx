
function Volatality({ handleChangeVolatality, selectedVolatality }) {
  let volatality = ['Low', 'Medium', 'High'];
  const images = {
    Low: 'src/assets/1.png',
    Medium: 'src/assets/2.png',
    High: 'src/assets/3.png',
  };

  return (
    <div>
      <div className="font-semibold pb-3 pt-3 text-sm ">Volatality</div>
      <div className="flex text-xs">
        {volatality.map((level, index) => (
          <label key={index} className="flex items-center cursor-pointer space-x-2">
            <input
              type="checkbox"
              value={level}
              checked={selectedVolatality.has(level)}
              onChange={() => handleChangeVolatality(level)}
              className="accent-blue-500 hidden"
            />
            <div className={`${selectedVolatality.has(level) ? 'border-2 border-blue-400 hover:bg-white text-blue-400' : 'border-2 border-gray-400'}  h-12 w-14 flex flex-col p-3 justify-center items-center rounded-md  hover:bg-gray-200`}>
              <img src={images[level]} alt={level} className="w-8 h-8 object-contain pt-1 flex-1" />
              <span className="text-gray-700 text-xs pb-1 pl-1 pr-1 flex-1">{level}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Volatality;
