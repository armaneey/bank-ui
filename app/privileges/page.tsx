"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import PrivilegesSummary from "@/components/PrivilegesSummary";
import TierStatus from "@/components/TierStatus";
import AvailableRewards from "@/components/AvailableRewards";

export default function Privileges() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F5F7FA]">
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <div className="flex-1 flex flex-col">
        <Header title="My Privileges" />
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
            {/* Privileges Summary */}
            <div className="col-span-1 lg:col-span-12">
              <PrivilegesSummary />
            </div>

            {/* Tier Status */}
            <div className="col-span-1 lg:col-span-8">
              <TierStatus />
            </div>

            {/* Available Rewards */}
            <div className="col-span-1 lg:col-span-4">
              <AvailableRewards />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
