"use client";

import { LineChart } from "@mantine/charts";
import { Paper, Title } from "@mantine/core";

const data = [
  { year: "2016", value: 45000 },
  { year: "2017", value: 52000 },
  { year: "2018", value: 48000 },
  { year: "2019", value: 65000 },
  { year: "2020", value: 78000 },
  { year: "2021", value: 95000 },
];

export default function YearlyInvestmentChart() {
  return (
    <Paper shadow="sm" radius="lg" p="md" withBorder>
      <div className="flex items-center justify-between mb-6">
        <Title order={3}>Yearly Total Investment</Title>
      </div>
      <LineChart
        h={250}
        data={data}
        dataKey="year"
        series={[{ name: "value", color: "blue.6" }]}
        curveType="monotone"
        withDots
        withTooltip
        strokeWidth={2}
      />
    </Paper>
  );
}
