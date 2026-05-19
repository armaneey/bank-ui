"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import LoanSummary from "@/components/LoanSummary";
import ActiveLoansTable from "@/components/ActiveLoansTable";

export default function Loans() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F5F7FA]">
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <div className="flex-1 flex flex-col">
        <Header title="Loans" />
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
            {/* Loan Summary */}
            <div className="col-span-1 lg:col-span-12">
              <LoanSummary />
            </div>

            {/* Active Loans Overview */}
            <div className="col-span-1 lg:col-span-12">
              <ActiveLoansTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
