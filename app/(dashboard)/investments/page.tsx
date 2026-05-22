import { ROUTE_METADATA } from '../../routes'
import InvestmentSummary from "@/components/InvestmentSummary";
import YearlyInvestmentChart from "@/components/YearlyInvestmentChart";
import MonthlyRevenueChart from "@/components/MonthlyRevenueChart";
import MyInvestments from "@/components/MyInvestments";
import TrendingStocks from "@/components/TrendingStocks";

export const metadata = ROUTE_METADATA.investments

export default function Investments() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
      <div className="col-span-1 lg:col-span-12">
        <InvestmentSummary />
      </div>
      <div className="col-span-1 lg:col-span-8">
        <YearlyInvestmentChart />
      </div>
      <div className="col-span-1 lg:col-span-4">
        <MonthlyRevenueChart />
      </div>
      <div className="col-span-1 lg:col-span-7">
        <MyInvestments />
      </div>
      <div className="col-span-1 lg:col-span-5">
        <TrendingStocks />
      </div>
    </div>
  );
}
