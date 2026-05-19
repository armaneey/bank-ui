"use client";

import { Paper, Title, Text, Badge, Avatar, Button } from "@mantine/core";
import { TrendingUp, TrendingDown, MoreVertical } from "lucide-react";

const investments = [
  { id: 1, name: "Apple Store", value: 54000, return: 16, icon: "A" },
  { id: 2, name: "Samsung Mobile", value: 25300, return: -4, icon: "S" },
  { id: 3, name: "Tesla Motors", value: 8200, return: 25, icon: "T" },
];

export default function MyInvestments() {
  return (
    <Paper shadow="sm" radius="lg" p="md" withBorder>
      <div className="flex items-center justify-between mb-6">
        <Title order={3}>My Investment</Title>
        <Button variant="light" size="sm">
          See All
        </Button>
      </div>

      <div className="space-y-4">
        {investments.map((investment) => (
          <div
            key={investment.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-4">
              <Avatar size={48} radius="xl" className="bg-blue-100 text-blue-600">
                {investment.icon}
              </Avatar>
              <div>
                <Text fw={600} size="md">
                  {investment.name}
                </Text>
                <Text size="xs" c="dimmed" mt={1}>
                  Investment Value: ${investment.value.toLocaleString()}
                </Text>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {investment.return >= 0 ? (
                  <TrendingUp className="text-green-600" size={20} />
                ) : (
                  <TrendingDown className="text-red-600" size={20} />
                )}
                <Badge
                  color={investment.return >= 0 ? "green" : "red"}
                  variant="light"
                  size="lg"
                >
                  {investment.return >= 0 ? "+" : ""}{investment.return}%
                </Badge>
              </div>
              <Button size="xs" variant="light" p={8}>
                <MoreVertical size={16} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Paper>
  );
}
