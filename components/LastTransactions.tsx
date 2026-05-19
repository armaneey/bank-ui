"use client";

import { Paper, Title, Text, Badge, Avatar, Button } from "@mantine/core";
import { Download, MoreVertical } from "lucide-react";

const transactions = [
  { id: 1, description: "Spotify Subscription", category: "Shopping", card: "3778 **** **** 1234", status: "Completed", amount: -2500 },
  { id: 2, description: "Freepik Sales", category: "Transfer", card: "3778 **** **** 1234", status: "Completed", amount: 750 },
  { id: 3, description: "Mobile Service", category: "Service", card: "3778 **** **** 1234", status: "Completed", amount: -150 },
  { id: 4, description: "Wilson", category: "Transfer", card: "3778 **** **** 1234", status: "Pending", amount: -1050 },
  { id: 5, description: "Emily", category: "Transfer", card: "3778 **** **** 1234", status: "Completed", amount: 840 },
];

export default function LastTransactions() {
  return (
    <Paper shadow="sm" radius="lg" p="md" withBorder>
      <div className="flex items-center justify-between mb-6">
        <Title order={3}>Last Transaction</Title>
        <Button variant="light" size="sm">
          See All
        </Button>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-4">
              <Avatar size={48} radius="xl" className="bg-blue-100 text-blue-600">
                {transaction.description.charAt(0)}
              </Avatar>
              <div>
                <Text fw={600} size="md">
                  {transaction.description}
                </Text>
                <div className="flex items-center gap-2 mt-1">
                  <Badge color={transaction.category === "Transfer" ? "blue" : transaction.category === "Shopping" ? "orange" : "gray"} variant="light" size="sm">
                    {transaction.category}
                  </Badge>
                  <Text size="xs" c="dimmed">
                    {transaction.card}
                  </Text>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <Text fw={600} c={transaction.amount > 0 ? "green" : "red"} size="md">
                  {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toLocaleString()}
                </Text>
                <Badge color={transaction.status === "Completed" ? "green" : "yellow"} variant="light" size="sm">
                  {transaction.status}
                </Badge>
              </div>
              <Button size="xs" variant="light" p={8}>
                <Download size={16} />
              </Button>
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
