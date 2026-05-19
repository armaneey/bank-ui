"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import ServiceCards from "@/components/ServiceCards";
import BankServicesList from "@/components/BankServicesList";

export default function Services() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F5F7FA]">
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <div className="flex-1 flex flex-col">
        <Header title="Services" />
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
            {/* Service Cards */}
            <div className="col-span-1 lg:col-span-12">
              <ServiceCards />
            </div>

            {/* Bank Services List */}
            <div className="col-span-1 lg:col-span-12">
              <BankServicesList />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
