"use client";

import { Paper, Title, Text, Avatar, Button } from "@mantine/core";
import { Download, MoreVertical } from "lucide-react";

const invoices = [
  { id: 1, sender: "Netflix", time: "2 hours ago", amount: 15.99 },
  { id: 2, sender: "Spotify", time: "5 hours ago", amount: 9.99 },
  { id: 3, sender: "Amazon", time: "1 day ago", amount: 45.50 },
  { id: 4, sender: "Apple", time: "2 days ago", amount: 99.00 },
  { id: 5, sender: "Google", time: "3 days ago", amount: 12.00 },
];

export default function InvoicesSent() {
  return (
    <Paper shadow="sm" radius="lg" p="md" withBorder>
      <div className="flex items-center justify-between mb-6">
        <Title order={3}>Invoices Sent</Title>
        <Button variant="light" size="sm">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-4">
              <Avatar size={48} radius="xl" className="bg-purple-100 text-purple-600">
                {invoice.sender.charAt(0)}
              </Avatar>
              <div>
                <Text fw={600} size="md">
                  {invoice.sender}
                </Text>
                <Text size="xs" c="dimmed" mt={1}>
                  {invoice.time}
                </Text>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Text fw={600} size="md" c="blue">
                ${invoice.amount.toFixed(2)}
              </Text>
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
