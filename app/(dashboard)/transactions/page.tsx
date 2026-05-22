import { ROUTE_METADATA } from '../../routes'
import MyCards from "@/components/MyCards";
import ExpenseStatistics from "@/components/ExpenseStatistics";
import RecentTransactions from "@/components/RecentTransactions";

export const metadata = ROUTE_METADATA.transactions

export default function Transactions() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
      <div className="col-span-1 lg:col-span-8">
        <MyCards />
      </div>
      <div className="col-span-1 lg:col-span-4">
        <ExpenseStatistics />
      </div>
      <div className="col-span-1 lg:col-span-12">
        <RecentTransactions />
      </div>
    </div>
  );
}
