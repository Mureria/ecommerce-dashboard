import React from 'react'
// import Stats from '../components/Stats'
import DashboardStatsGrid from '../components/Stats'
import TransactionChart from '../components/TranscationChart'


const Transactions = () => {
  return (
    <>
      <div className='h-screen flex flex-col gap-10 w-[1020px]'>
          <DashboardStatsGrid/>
        <TransactionChart/>

      </div>

    </>
  )
}

// function BoxWrapper({ children }) {
// 	return <div className="bg-white hover:bg-gray-100 rounded-sm p-4 flex items-center">{children}</div>
// }

export default Transactions