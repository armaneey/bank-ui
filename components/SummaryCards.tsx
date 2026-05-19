"use client";

import { Paper, Text, Group, ThemeIcon } from "@mantine/core";
import { Wallet, TrendingUp, TrendingDown, PiggyBank } from "lucide-react";

const summaryData = [
  { label: "My Balance", value: "$12,750", icon: Wallet, color: "blue" },
  { label: "Income", value: "$5,600", icon: TrendingUp, color: "green" },
  { label: "Expense", value: "$3,460", icon: TrendingDown, color: "red" },
  { label: "Total Saving", value: "$7,920", icon: PiggyBank, color: "purple" },
];

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
