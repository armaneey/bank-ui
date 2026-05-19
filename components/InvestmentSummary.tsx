"use client";

import { Paper, Text, Group, ThemeIcon } from "@mantine/core";
import { DollarSign, TrendingUp, PieChart } from "lucide-react";

const summaryData = [
  { label: "Total Invested Amount", value: "$150,000", icon: DollarSign, color: "blue" },
  { label: "Number of Investments", value: "1,250", icon: PieChart, color: "green" },
  { label: "Rate of Return", value: "+5.80%", icon: TrendingUp, color: "purple" },
];

export default function InvestmentSummary() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {summaryData.map((item) => (
        <Paper key={item.label} shadow="sm" radius="lg" p="md" withBorder>
          <Group justify="space-between" align="flex-start">
            <div>
              <Text size="sm" c="dimmed" fw={500}>
                {item.label}
              </Text>
              <Text size="xl" fw={700} mt={4}>
                {item.value}
              </Text>
            </div>
            <ThemeIcon
              size={40}
              radius="md"
              variant="light"
              color={item.color}
            >
              <item.icon size={20} />
            </ThemeIcon>
          </Group>
        </Paper>
      ))}
    </div>
  );
}
