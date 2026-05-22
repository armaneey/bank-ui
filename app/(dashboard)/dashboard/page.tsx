import { ROUTE_METADATA } from '../../routes'
import MyCards from "@/components/MyCards";
import RecentTransactions from "@/components/RecentTransactions";
import WeeklyActivity from "@/components/WeeklyActivity";
import ExpenseStatistics from "@/components/ExpenseStatistics";
import QuickTransfer from "@/components/QuickTransfer";
import BalanceHistory from "@/components/BalanceHistory";

export const metadata = ROUTE_METADATA.dashboard

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
      <div className="col-span-1 lg:col-span-7">
        <MyCards />
      </div>
      <div className="col-span-1 lg:col-span-5">
        <RecentTransactions />
      </div>
      <div className="col-span-1 lg:col-span-8">
        <WeeklyActivity />
      </div>
      <div className="col-span-1 lg:col-span-4">
        <ExpenseStatistics />
      </div>
      <div className="col-span-1 lg:col-span-4">
        <QuickTransfer />
      </div>
      <div className="col-span-1 lg:col-span-8">
        <BalanceHistory />
      </div>
    </div>
  );
}
