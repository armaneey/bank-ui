"use client";

import { BarChart } from "@mantine/charts";
import { Paper, Title } from "@mantine/core";

const data = [
  { day: "Mon", debited: 1200, credited: 800 },
  { day: "Tue", debited: 900, credited: 1500 },
  { day: "Wed", debited: 1500, credited: 700 },
  { day: "Thu", debited: 800, credited: 1200 },
  { day: "Fri", debited: 1100, credited: 900 },
  { day: "Sat", debited: 600, credited: 500 },
  { day: "Sun", debited: 400, credited: 300 },
];

export default function DebitCreditOverview() {
  return (
    <Paper shadow="sm" radius="lg" p="md" withBorder>
      <div className="flex items-center justify-between mb-6">
        <Title order={3}>Debit & Credit Overview</Title>
      </div>
      <BarChart
        h={250}
        data={data}
        dataKey="day"
        series={[
          { name: "debited", color: "red.6", label: "Debited" },
          { name: "credited", color: "green.6", label: "Credited" },
        ]}
        tickLine="y"
        gridAxis="y"
      />
    </Paper>
  );
}
