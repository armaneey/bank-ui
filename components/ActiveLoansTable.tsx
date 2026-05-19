"use client";

import { Paper, Title, Text, Button } from "@mantine/core";

const loans = [
  { id: 1, loanMoney: 50000, leftToRepay: 45000, duration: "12 months", interestRate: "5.5%", installment: 4500 },
  { id: 2, loanMoney: 100000, leftToRepay: 85000, duration: "24 months", interestRate: "6.0%", installment: 4200 },
  { id: 3, loanMoney: 75000, leftToRepay: 60000, duration: "18 months", interestRate: "5.8%", installment: 3800 },
  { id: 4, loanMoney: 150000, leftToRepay: 120000, duration: "36 months", interestRate: "6.2%", installment: 3500 },
  { id: 5, loanMoney: 200000, leftToRepay: 180000, duration: "48 months", interestRate: "6.5%", installment: 4200 },
  { id: 6, loanMoney: 80000, leftToRepay: 70000, duration: "24 months", interestRate: "5.9%", installment: 3100 },
  { id: 7, loanMoney: 120000, leftToRepay: 100000, duration: "30 months", interestRate: "6.1%", installment: 3600 },
  { id: 8, loanMoney: 180000, leftToRepay: 150000, duration: "42 months", interestRate: "6.3%", installment: 3900 },
];

const totals = {
  loanMoney: loans.reduce((sum, loan) => sum + loan.loanMoney, 0),
  leftToRepay: loans.reduce((sum, loan) => sum + loan.leftToRepay, 0),
  installment: loans.reduce((sum, loan) => sum + loan.installment, 0),
};

export default function ActiveLoansTable() {
  return (
    <Paper shadow="sm" radius="lg" p="md" withBorder>
      <div className="flex items-center justify-between mb-6">
        <Title order={3}>Active Loans Overview</Title>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">SL No</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Loan Money</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Left to repay</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Duration</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Interest rate</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Installment</th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">Repay</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan) => (
              <tr key={loan.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-4 text-sm text-gray-600">{loan.id}</td>
                <td className="py-4 px-4 text-sm font-medium text-gray-900">${loan.loanMoney.toLocaleString()}</td>
                <td className="py-4 px-4 text-sm font-medium text-gray-900">${loan.leftToRepay.toLocaleString()}</td>
                <td className="py-4 px-4 text-sm text-gray-600">{loan.duration}</td>
                <td className="py-4 px-4 text-sm text-gray-600">{loan.interestRate}</td>
                <td className="py-4 px-4 text-sm font-medium text-gray-900">${loan.installment.toLocaleString()}</td>
                <td className="py-4 px-4 text-center">
                  <Button size="xs" variant="filled">
                    Repay
                  </Button>
                </td>
              </tr>
            ))}
            <tr className="border-t-2 border-gray-300 bg-gray-50 font-semibold">
              <td className="py-4 px-4 text-sm text-gray-900">Total</td>
              <td className="py-4 px-4 text-sm text-gray-900">${totals.loanMoney.toLocaleString()}</td>
              <td className="py-4 px-4 text-sm text-gray-900">${totals.leftToRepay.toLocaleString()}</td>
              <td className="py-4 px-4 text-sm text-gray-600">-</td>
              <td className="py-4 px-4 text-sm text-gray-600">-</td>
              <td className="py-4 px-4 text-sm text-gray-900">${totals.installment.toLocaleString()}</td>
              <td className="py-4 px-4 text-center">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Paper>
  );
}
