"use client";

import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

const transactions = [
  { id: 1, description: "Deposit from my Card", amount: -850, date: "28 Jan 2023", type: "withdraw" },
  { id: 2, description: "Deposit Paypal", amount: 2500, date: "25 Jan 2023", type: "deposit" },
  { id: 3, description: "Jemi Wilson", amount: 5400, date: "21 Jan 2023", type: "deposit" },
  { id: 4, description: "Netflix Subscription", amount: -15, date: "20 Jan 2023", type: "withdraw" },
  { id: 5, description: "Freelance Payment", amount: 3200, date: "18 Jan 2023", type: "deposit" },
  { id: 6, description: "Grocery Store", amount: -120, date: "15 Jan 2023", type: "withdraw" },
  { id: 7, description: "Electric Bill", amount: -85, date: "12 Jan 2023", type: "withdraw" },
  { id: 8, description: "Salary Deposit", amount: 4500, date: "10 Jan 2023", type: "deposit" },
  { id: 9, description: "Amazon Purchase", amount: -250, date: "8 Jan 2023", type: "withdraw" },
  { id: 10, description: "Client Payment", amount: 1800, date: "5 Jan 2023", type: "deposit" },
];

export default function RecentTransactions() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Recent Transactions</h3>
        <button className="text-blue-600 hover:text-blue-700 font-medium">
          See All
        </button>
      </div>

      <div className="space-y-4">
        {transactions.slice(0, 5).map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                transaction.type === "deposit" ? "bg-green-100" : "bg-red-100"
              }`}>
                {transaction.type === "deposit" ? (
                  <ArrowDownLeft className="text-green-600" size={20} />
                ) : (
                  <ArrowUpRight className="text-red-600" size={20} />
                )}
              </div>
              <div>
                <p className="font-medium text-gray-900">{transaction.description}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <p className={`font-semibold ${
              transaction.type === "deposit" ? "text-green-600" : "text-red-600"
            }`}>
              {transaction.type === "deposit" ? "+" : "-"}${Math.abs(transaction.amount).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
