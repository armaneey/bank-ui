"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import MyCreditCards from "@/components/MyCreditCards";
import CardExpenseStats from "@/components/CardExpenseStats";
import CardList from "@/components/CardList";
import AddNewCard from "@/components/AddNewCard";
import CardSettings from "@/components/CardSettings";

export default function CreditCards() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F5F7FA]">
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <div className="flex-1 flex flex-col">
        <Header title="Credit Cards" />
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
            {/* My Credit Cards */}
            <div className="col-span-1 lg:col-span-8">
              <MyCreditCards />
            </div>

            {/* Card Expense Statistics */}
            <div className="col-span-1 lg:col-span-4">
              <CardExpenseStats />
            </div>

            {/* Card List */}
            <div className="col-span-1 lg:col-span-8">
              <CardList />
            </div>

            {/* Add New Card */}
            <div className="col-span-1 lg:col-span-4">
              <AddNewCard />
            </div>

            {/* Card Settings */}
            <div className="col-span-1 lg:col-span-12">
              <CardSettings />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
