"use client";

import { BarChart } from "@mantine/charts";
import { Paper, Title } from "@mantine/core";

const data = [
  { day: "Sat", deposit: 300, withdraw: 200 },
  { day: "Sun", deposit: 450, withdraw: 300 },
  { day: "Mon", deposit: 200, withdraw: 150 },
  { day: "Tue", deposit: 550, withdraw: 400 },
  { day: "Wed", deposit: 350, withdraw: 250 },
  { day: "Thu", deposit: 400, withdraw: 300 },
  { day: "Fri", deposit: 500, withdraw: 350 },
];

export default function WeeklyActivity() {
  return (
    <Paper shadow="sm" radius="lg" p="md" withBorder>
      <div className="flex items-center justify-between mb-6">
        <Title order={3}>Weekly Activity</Title>
      </div>
      <BarChart
        h={250}
        data={data}
        dataKey="day"
        series={[
          { name: "deposit", color: "blue.6" },
          { name: "withdraw", color: "red.6" },
        ]}
        tickLine="y"
        gridAxis="y"
      />
    </Paper>
  );
}
