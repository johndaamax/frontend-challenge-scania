import * as React from 'react'
import CustomMenu from './components/Menu';
import Table from './components/Table';
import { data } from './data'

function App() {
  const tableData = React.useMemo(() => data, [])
  const tableColumns = React.useMemo(() => [
    { Header: 'Driver', accessor: 'driver' },
    { Header: 'Company', accessor: 'company' },
    { Header: 'Distance', accessor: 'distance' },
    { Header: 'Score', accessor: 'score' },
  ], [])
  return (
    <div>
      <header className="md:py-4 md:px-8 bg-[#041E42] text-white">
        Fleet Portal
      </header>
      <div className='bg-white md:py-4 md:px-8 font-bold text-2xl text-[#041E42] tracking-tight'>
        <h2>Driver Evaluation</h2>
      </div>
      <main className="bg-[#E5E5E5] md:py-8 md:px-12">
        <div className='inline-flex space-x-8'>
          <CustomMenu />
          <button className='rounded-sm focus:outline-none focus:ring-1 focus:ring-[#A4A6AB] underline text-[#2058A8]'>Reset</button>
        </div>
        <div className="mt-4">
          <Table data={tableData} columns={tableColumns} />
        </div>
      </main>
    </div>
  );
}

export default App;
