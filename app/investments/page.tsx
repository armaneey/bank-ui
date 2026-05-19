"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import InvestmentSummary from "@/components/InvestmentSummary";
import YearlyInvestmentChart from "@/components/YearlyInvestmentChart";
import MonthlyRevenueChart from "@/components/MonthlyRevenueChart";
import MyInvestments from "@/components/MyInvestments";
import TrendingStocks from "@/components/TrendingStocks";

export default function Investments() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F5F7FA]">
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <div className="flex-1 flex flex-col">
        <Header title="Investments" />
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
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
        </main>
      </div>
    </div>
  );
}
