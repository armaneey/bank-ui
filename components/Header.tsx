"use client";

import { Search, Bell, User } from "lucide-react";

interface HeaderProps {
  title?: string;
}

export default function Header({ title = "Overview" }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{title}</h2>
      </div>

      <div className="flex items-center gap-3 sm:gap-6">
      
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 bg-gray-100 rounded-lg w-48 sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell className="text-gray-600" size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <User className="text-white" size={20} />
          </div>
          <div className="hidden md:block">
            <p className="font-medium text-gray-900 text-sm sm:text-base">Eddy Cusuma</p>
            <p className="text-xs sm:text-sm text-gray-500">eddy@example.com</p>
          </div>
        </div>
      </div>
    </header>
  );
}
