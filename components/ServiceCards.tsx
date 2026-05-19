"use client";

import { Paper, Text, Group, ThemeIcon } from "@mantine/core";
import { Shield, ShoppingBag, ShieldCheck } from "lucide-react";

const services = [
  { label: "Life Insurance", description: "Unlimited protection", icon: Shield, color: "blue" },
  { label: "Shopping", description: "Buy. Think. Grow.", icon: ShoppingBag, color: "green" },
  { label: "Safety", description: "We are your allies", icon: ShieldCheck, color: "purple" },
];

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {services.map((service) => (
        <Paper key={service.label} shadow="sm" radius="lg" p="md" withBorder>
          <Group justify="space-between" align="flex-start">
            <div>
              <Text size="xl" fw={700}>
                {service.label}
              </Text>
              <Text size="sm" c="dimmed" mt={4}>
                {service.description}
              </Text>
            </div>
            <ThemeIcon
              size={48}
              radius="md"
              variant="light"
              color={service.color}
            >
              <service.icon size={24} />
            </ThemeIcon>
          </Group>
        </Paper>
      ))}
    </div>
  );
}
