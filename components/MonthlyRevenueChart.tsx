"use client";

import { LineChart } from "@mantine/charts";
import { Paper, Title } from "@mantine/core";

const data = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 15000 },
  { month: "Mar", revenue: 13000 },
  { month: "Apr", revenue: 18000 },
  { month: "May", revenue: 16000 },
  { month: "Jun", revenue: 20000 },
  { month: "Jul", revenue: 22000 },
  { month: "Aug", revenue: 19000 },
  { month: "Sep", revenue: 24000 },
  { month: "Oct", revenue: 21000 },
  { month: "Nov", revenue: 26000 },
  { month: "Dec", revenue: 28000 },
];

export default function MonthlyRevenueChart() {
  return (
    <Paper shadow="sm" radius="lg" p="md" withBorder>
      <div className="flex items-center justify-between mb-6">
        <Title order={3}>Monthly Revenue</Title>
      </div>
      <LineChart
        h={250}
        data={data}
        dataKey="month"
        series={[{ name: "revenue", color: "green.6" }]}
        curveType="monotone"
        withDots
        withTooltip
        strokeWidth={2}
      />
    </Paper>
  );
}
