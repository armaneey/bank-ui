"use client";

import { Paper, Title, Text, Button, Avatar } from "@mantine/core";
import { Briefcase, CreditCard, Wallet, Shield, ChevronRight } from "lucide-react";

const services = [
  { id: 1, name: "Business loans", icon: Briefcase, description: "It is a long established" },
  { id: 2, name: "Checking accounts", icon: Wallet, description: "It is a long established" },
  { id: 3, name: "Savings accounts", icon: Wallet, description: "It is a long established" },
  { id: 4, name: "Debit and credit cards", icon: CreditCard, description: "It is a long established" },
  { id: 5, name: "Life Insurance", icon: Shield, description: "It is a long established" },
];

export default function BankServicesList() {
  return (
    <Paper shadow="sm" radius="lg" p="md" withBorder>
      <div className="flex items-center justify-between mb-6">
        <Title order={3}>Bank Services</Title>
      </div>

      <div className="space-y-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-4">
              <Avatar size={48} radius="xl" className="bg-blue-100 text-blue-600">
                <service.icon size={24} />
              </Avatar>
              <div className="flex-1">
                <Text fw={600} size="md">
                  {service.name}
                </Text>
                <Text size="xs" c="dimmed" mt={1}>
                  {service.description}
                </Text>
                <div className="flex gap-8 mt-2">
                  <div>
                    <Text size="xs" fw={500} c="dimmed">
                      Lorem Ipsum
                    </Text>
                    <Text size="xs" c="dimmed">
                      Many publishing
                    </Text>
                  </div>
                  <div>
                    <Text size="xs" fw={500} c="dimmed">
                      Lorem Ipsum
                    </Text>
                    <Text size="xs" c="dimmed">
                      Many publishing
                    </Text>
                  </div>
                  <div>
                    <Text size="xs" fw={500} c="dimmed">
                      Lorem Ipsum
                    </Text>
                    <Text size="xs" c="dimmed">
                      Many publishing
                    </Text>
                  </div>
                </div>
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
