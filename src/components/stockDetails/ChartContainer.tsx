import CandleChart from './CandleChart';
import { useState } from 'react';


const ChartContainer: React.FC = () => {
  const [filter, setFilter] = useState('day');
  // day, week, month, year

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full flex justify-between items-center h-[7%]">
        <p className="ml-[20px] text-[20px]">차트</p>
        <div>
          <button
            className={`w-[35px] h-[35px] mx-[5px] my-[10px] rounded-[7px] transition-colors duration-300 ease-in-out ${filter === 'day' ? 'bg-gray' : 'bg-transparent'}`}
            onClick={() => setFilter('day')}
          >
            일
          </button>
          <button
            className={`w-[35px] h-[35px] mx-[5px] my-[10px] rounded-[7px] transition-colors duration-300 ease-in-out ${filter === 'week' ? 'bg-gray' : 'bg-transparent'}`}
            onClick={() => setFilter('week')}
          >
            주
          </button>
          <button
            className={`w-[35px] h-[35px] mx-[5px] my-[10px] rounded-[7px] transition-colors duration-300 ease-in-out ${filter === 'month' ? 'bg-gray' : 'bg-transparent'}`}
            onClick={() => setFilter('month')}
          >
            월
          </button>
          <button
            className={`w-[35px] h-[35px] mx-[5px] my-[10px] rounded-[7px] transition-colors duration-300 ease-in-out ${filter === 'year' ? 'bg-gray' : 'bg-transparent'}`}
            onClick={() => setFilter('year')}
          >
            년
          </button>
        </div>
        <div></div>
      </div>
      <div className="flex-growflex flex-col justify-center items-center w-full h-[93%]">
        <CandleChart />
      </div>
    </div>
  );
};

export default ChartContainer;
