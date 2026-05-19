"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import SummaryCards from "@/components/SummaryCards";
import LastTransactions from "@/components/LastTransactions";
import MyCards from "@/components/MyCards";
import DebitCreditOverview from "@/components/DebitCreditOverview";
import InvoicesSent from "@/components/InvoicesSent";

export default function Accounts() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F5F7FA]">
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <div className="flex-1 flex flex-col">
        <Header title="Accounts" />
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
            <div className="col-span-1 lg:col-span-12">
              <SummaryCards />
            </div>
          
            <div className="col-span-1 lg:col-span-8">
              <LastTransactions />
            </div>
            
            <div className="col-span-1 lg:col-span-4">
              <MyCards />
            </div>
            
            <div className="col-span-1 lg:col-span-8">
              <DebitCreditOverview />
            </div>
            
            <div className="col-span-1 lg:col-span-4">
              <InvoicesSent />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
