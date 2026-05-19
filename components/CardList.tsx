"use client";

import { Paper, Title, Text, Badge, Button, Avatar } from "@mantine/core";
import { CreditCard, ChevronRight } from "lucide-react";

const cards = [
  { id: 1, type: "Visa", bank: "DBL Bank", number: "3778 **** **** 1234", holder: "Eddy Cusuma" },
  { id: 2, type: "Mastercard", bank: "ABM Bank", number: "4521 **** **** 5678", holder: "Eddy Cusuma" },
  { id: 3, type: "Visa", bank: "BRC Bank", number: "6011 **** **** 9012", holder: "Eddy Cusuma" },
];

export default function CardList() {
  return (
    <Paper shadow="sm" radius="lg" p="md" withBorder>
      <div className="flex items-center justify-between mb-6">
        <Title order={3}>Card List</Title>
      </div>

      <div className="space-y-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-4">
              <Avatar size={48} radius="xl" className="bg-blue-100 text-blue-600">
                <CreditCard size={24} />
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <Text fw={600} size="md">
                    {card.type}
                  </Text>
                  <Badge color="blue" variant="light" size="sm">
                    {card.bank}
                  </Badge>
                </div>
                <Text size="xs" c="dimmed" mt={1}>
                  {card.number}
                </Text>
                <Text size="xs" c="dimmed">
                  {card.holder}
                </Text>
              </div>
            </div>

            <Button variant="light" size="sm" rightSection={<ChevronRight size={16} />}>
              View Details
            </Button>
          </div>
        ))}
      </div>
    </Paper>
  );
}
