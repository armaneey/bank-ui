"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import MyCards from "@/components/MyCards";
import RecentTransactions from "@/components/RecentTransactions";
import WeeklyActivity from "@/components/WeeklyActivity";
import ExpenseStatistics from "@/components/ExpenseStatistics";
import QuickTransfer from "@/components/QuickTransfer";
import BalanceHistory from "@/components/BalanceHistory";

export default function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F5F7FA]">
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
            <div className="col-span-1 lg:col-span-8">
              <MyCards />
            </div>
            <div className="col-span-1 lg:col-span-4">
              <RecentTransactions />
            </div>
            <div className="col-span-1 lg:col-span-8">
              <WeeklyActivity />
            </div>

            <div className="col-span-1 lg:col-span-4">
              <ExpenseStatistics />
            </div>

            <div className="col-span-1 lg:col-span-8">
              <QuickTransfer />
            </div>
            
            <div className="col-span-1 lg:col-span-4">
              <BalanceHistory />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
