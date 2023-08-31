import React from 'react'
import Stats from '../components/Stats'
import TransactionChart from '../components/TranscationChart'
import ProfilePieChart from '../components/ProfilePieChart'
import PopularProducts from '../components/shared/PopularProduct'
import RecentOrders from '../components/RecentOrder'


export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<Stats />
      		<div className="flex flex-row gap-4 w-full">
				<TransactionChart />
				<ProfilePieChart />
			</div>
			<div className="flex flex-row gap-4 w-full">
				<RecentOrders />
				<PopularProducts />
			</div>
		</div>
	)
}