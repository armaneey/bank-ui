"use client";

import { LineChart } from "@mantine/charts";
import { Paper, Title } from "@mantine/core";

const data = [
  { month: "Jul", balance: 4000 },
  { month: "Aug", balance: 4500 },
  { month: "Sep", balance: 4200 },
  { month: "Oct", balance: 5000 },
  { month: "Nov", balance: 5500 },
  { month: "Dec", balance: 5200 },
  { month: "Jan", balance: 5756 },
];

export default function BalanceHistory() {
  return (
    <Paper shadow="sm" radius="lg" p="md" withBorder>
      <div className="flex items-center justify-between mb-6">
        <Title order={3}>Balance History</Title>
      </div>
      <LineChart
        h={250}
        data={data}
        dataKey="month"
        series={[{ name: "balance", color: "blue.6" }]}
        curveType="linear"
        withDots
        withTooltip
      />
    </Paper>
  );
}
