"use client";

import { Paper, Text, Group, ThemeIcon, Button } from "@mantine/core";
import { User, Building2, Briefcase, DollarSign } from "lucide-react";

const summaryData = [
  { label: "Personal Loans", value: "$50,000", icon: User, color: "blue" },
  { label: "Corporate Loans", value: "$100,000", icon: Building2, color: "green" },
  { label: "Business Loans", value: "$500,000", icon: Briefcase, color: "purple" },
  { label: "Custom Loans", value: "Choose Money", icon: DollarSign, color: "orange" },
];

export default function LoanSummary() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {summaryData.map((loan) => (
        <Paper key={loan.label} shadow="sm" radius="lg" p="md" withBorder>
          <Group justify="space-between" align="flex-start">
            <div>
              <Text size="sm" c="dimmed" fw={500}>
                {loan.label}
              </Text>
              <Text size="xl" fw={700} mt={4}>
                {loan.value}
              </Text>
            </div>
            <ThemeIcon
              size={40}
              radius="md"
              variant="light"
              color={loan.color}
            >
              <loan.icon size={20} />
            </ThemeIcon>
          </Group>
          <Button variant="light" size="sm" fullWidth mt={4}>
            Apply Now
          </Button>
        </Paper>
      ))}
    </div>
  );
}
