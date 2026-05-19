"use client";

import { useState } from "react";
import { Paper, Title, Tabs, Text, Button, Badge, Avatar } from "@mantine/core";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";

const transactions = [
  { id: 1, description: "Spotify Subscription", transactionId: "#TRX-001", type: "Shopping", card: "3778 **** **** 1234", date: "28 Jan 2023", amount: -2500, receipt: true },
  { id: 2, description: "Freepik Sales", transactionId: "#TRX-002", type: "Transfer", card: "3778 **** **** 1234", date: "25 Jan 2023", amount: 750, receipt: true },
  { id: 3, description: "Mobile Service", transactionId: "#TRX-003", type: "Service", card: "3778 **** **** 1234", date: "21 Jan 2023", amount: -150, receipt: true },
  { id: 4, description: "Wilson", transactionId: "#TRX-004", type: "Transfer", card: "3778 **** **** 1234", date: "18 Jan 2023", amount: -1050, receipt: true },
  { id: 5, description: "Emily", transactionId: "#TRX-005", type: "Transfer", card: "3778 **** **** 1234", date: "15 Jan 2023", amount: 840, receipt: true },
  { id: 6, description: "Netflix Subscription", transactionId: "#TRX-006", type: "Shopping", card: "3778 **** **** 1234", date: "12 Jan 2023", amount: -180, receipt: true },
  { id: 7, description: "Grocery Store", transactionId: "#TRX-007", type: "Shopping", card: "3778 **** **** 1234", date: "10 Jan 2023", amount: -320, receipt: true },
  { id: 8, description: "Salary Deposit", transactionId: "#TRX-008", type: "Transfer", card: "3778 **** **** 1234", date: "05 Jan 2023", amount: 5000, receipt: true },
];

export default function TransactionsTable() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredTransactions = transactions.filter((transaction) => {
    if (activeTab === "all") return true;
    if (activeTab === "income") return transaction.amount > 0;
    if (activeTab === "expense") return transaction.amount < 0;
    return true;
  });

  return (
    <Paper shadow="sm" radius="lg" p="md" withBorder>
      <div className="flex items-center justify-between mb-6">
        <Title order={3}>Recent Transactions</Title>
        <Button variant="light" size="sm">
          + Add New
        </Button>
      </div>

      <Tabs defaultValue="all" value={activeTab} onChange={(value: string | null) => setActiveTab(value || "all")}>
        <Tabs.List>
          <Tabs.Tab value="all">All Transactions</Tabs.Tab>
          <Tabs.Tab value="income">Income</Tabs.Tab>
          <Tabs.Tab value="expense">Expense</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="all" pt="md">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Description</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Transaction ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Type</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Card</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Date</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Amount</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">Receipt</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <Avatar size={40} radius="xl" className="bg-blue-100 text-blue-600">
                          {transaction.description.charAt(0)}
                        </Avatar>
                        <Text fw={500}>{transaction.description}</Text>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">{transaction.transactionId}</td>
                    <td className="py-4 px-4">
                      <Badge color={transaction.type === "Transfer" ? "blue" : transaction.type === "Shopping" ? "orange" : "gray"} variant="light">
                        {transaction.type}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">{transaction.card}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">{transaction.date}</td>
                    <td className="py-4 px-4 text-right">
                      <Text fw={600} c={transaction.amount > 0 ? "green" : "red"}>
                        {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toLocaleString()}
                      </Text>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Button size="xs" variant="light" leftSection={<Download size={14} />}>
                        Download
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        
          <div className="flex items-center justify-between mt-6">
            <Text size="sm" c="dimmed">
              Showing 1-8 of {filteredTransactions.length} transactions
            </Text>
            <div className="flex items-center gap-2">
              <Button size="xs" variant="light" leftSection={<ChevronLeft size={14} />}>
                Previous
              </Button>
              <Button size="xs" variant="filled">1</Button>
              <Button size="xs" variant="light">2</Button>
              <Button size="xs" variant="light">3</Button>
              <Button size="xs" variant="light">4</Button>
              <Button size="xs" variant="light" rightSection={<ChevronRight size={14} />}>
                Next
              </Button>
            </div>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="income" pt="md">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Description</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Transaction ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Type</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Card</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Date</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Amount</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">Receipt</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <Avatar size={40} radius="xl" className="bg-blue-100 text-blue-600">
                          {transaction.description.charAt(0)}
                        </Avatar>
                        <Text fw={500}>{transaction.description}</Text>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">{transaction.transactionId}</td>
                    <td className="py-4 px-4">
                      <Badge color="blue" variant="light">
                        {transaction.type}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">{transaction.card}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">{transaction.date}</td>
                    <td className="py-4 px-4 text-right">
                      <Text fw={600} c="green">
                        +${Math.abs(transaction.amount).toLocaleString()}
                      </Text>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Button size="xs" variant="light" leftSection={<Download size={14} />}>
                        Download
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="expense" pt="md">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Description</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Transaction ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Type</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Card</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Date</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Amount</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">Receipt</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <Avatar size={40} radius="xl" className="bg-blue-100 text-blue-600">
                          {transaction.description.charAt(0)}
                        </Avatar>
                        <Text fw={500}>{transaction.description}</Text>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">{transaction.transactionId}</td>
                    <td className="py-4 px-4">
                      <Badge color={transaction.type === "Transfer" ? "blue" : transaction.type === "Shopping" ? "orange" : "gray"} variant="light">
                        {transaction.type}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">{transaction.card}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">{transaction.date}</td>
                    <td className="py-4 px-4 text-right">
                      <Text fw={600} c="red">
                        -${Math.abs(transaction.amount).toLocaleString()}
                      </Text>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Button size="xs" variant="light" leftSection={<Download size={14} />}>
                        Download
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Tabs.Panel>
      </Tabs>
    </Paper>
  );
}
