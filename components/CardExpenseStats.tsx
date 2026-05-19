"use client";

import { PieChart } from "@mantine/charts";
import { Paper, Title, Text } from "@mantine/core";

const data = [
  { name: "DBL Bank", value: 35, color: "blue.6" },
  { name: "ABM Bank", value: 25, color: "cyan.6" },
  { name: "BRC Bank", value: 20, color: "teal.6" },
  { name: "MCP Bank", value: 20, color: "indigo.6" },
];

export default function CardExpenseStats() {
  return (
    <Paper shadow="sm" radius="lg" p="md" withBorder>
      <div className="flex items-center justify-between mb-6">
        <Title order={3}>Card Expense Statistics</Title>
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
