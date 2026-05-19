"use client";

import { PieChart } from "@mantine/charts";
import { Paper, Title } from "@mantine/core";

const data = [
  { name: "Entertainment", value: 30, color: "blue.6" },
  { name: "Bill Expense", value: 15, color: "cyan.6" },
  { name: "Investment", value: 20, color: "teal.6" },
  { name: "Others", value: 35, color: "indigo.6" },
];

export default function ExpenseStatistics() {
  return (
    <Paper shadow="sm" radius="lg" p="md" withBorder>
      <div className="flex items-center justify-between mb-6">
        <Title order={3}>Expense Statistics</Title>
      </div>
      <PieChart
        withLabels
        labelsPosition="outside"
        withTooltip
        tooltipDataSource="segment"
        data={data}
        size={180}
      />
      <div className="mt-6 space-y-3">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full bg-${item.color.split(".")[0]}-${item.color.split(".")[1]}`}></div>
              <span className="text-sm text-gray-700">{item.name}</span>
            </div>
            <span className="font-semibold text-gray-900">{item.value}%</span>
          </div>
        ))}
      </div>
    </Paper>
  );
}
