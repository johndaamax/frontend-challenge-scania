import * as React from 'react';
import CustomMenu from './components/Menu';
import Table from './components/Table';
import { data } from './data';

//the options array that we use on the menu dropdown
const options = ['<= 200.000 km', '> 200.000 km'];

function App() {
  // keeps track of selected value of the dropdown
  const [selectedMenuItemIndex, setSelectedMenuItemIndex] = React.useState(-1)

  const tableData = React.useMemo(() => {
    let result = data
    if (selectedMenuItemIndex === 0) {
      result = result.filter(element => element.distance.value <= 200000)
    } else if (selectedMenuItemIndex === 1) {
      result = result.filter(element => element.distance.value > 200000)
    }
    //map the array to flatten the distance object into a string with US locale to show commas
    return result.map(el => ({ ...el, distance: `${el.distance.value.toLocaleString('en-US')} ${el.distance.unit}` }))
  }, [selectedMenuItemIndex]);

  const tableColumns = React.useMemo(() => [
    { Header: 'Driver', accessor: 'driver' },
    { Header: 'Company', accessor: 'company' },
    { Header: 'Distance', accessor: 'distance' },
    { Header: 'Score', accessor: 'score' },
  ], []);

  function changeMenuItem(index: number) {
    setSelectedMenuItemIndex(index);
  }

  function handleReset() {
    setSelectedMenuItemIndex(-1);
  }

  return (
    <div>
      <header className="bg-[#041E42] text-white flex justify-between">
        <span className="py-4 px-4 md:px-8">
          Fleet Portal
        </span>
        <div className='border-l border-[#0F3263] '>
          <img
            src='./scania-symbol.png'
            alt='Scania Symbol'
            className='m-3 w-[40px]'
          />
        </div>
      </header>
      <div className='bg-white py-4 px-4 md:px-8 font-bold text-2xl text-[#041E42] tracking-tight'>
        <h2>Driver Evaluation</h2>
      </div>
      <main className="bg-[#E5E5E5] py-8 px-6 md:px-12 text-sm">
        <div className='inline-flex space-x-4 md:space-x-8'>
          <CustomMenu options={options} selectedIndex={selectedMenuItemIndex} handleChangedIndex={changeMenuItem} />
          <button
            className='rounded-sm focus:outline-none focus:ring-1 focus:ring-[#A4A6AB] underline text-[#2058A8] hover:text-blue-400'
            onClick={handleReset}
          >Reset
          </button>
        </div>
        <div className="mt-4">
          <Table data={tableData} columns={tableColumns} />
        </div>
      </main>
    </div>
  );
}

export default App;
