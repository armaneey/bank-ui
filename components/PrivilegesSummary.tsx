"use client";

import { Paper, Text, Group, ThemeIcon } from "@mantine/core";
import { Crown, Star, Gift, Award } from "lucide-react";

const summaryData = [
  { label: "Reward Points", value: "12,500", icon: Star, color: "yellow" },
  { label: "Tier Status", value: "Gold", icon: Crown, color: "orange" },
  { label: "Available Rewards", value: "15", icon: Gift, color: "purple" },
  { label: "Achievements", value: "8", icon: Award, color: "blue" },
];

export default function PrivilegesSummary() {
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
