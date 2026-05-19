"use client";

import { Paper, Title, TextInput, Button, Avatar, Text } from "@mantine/core";
import { Send } from "lucide-react";

const contacts = [
  { name: "Livia Bator", role: "CEO", avatar: "LB" },
  { name: "Randy Press", role: "Director", avatar: "RP" },
  { name: "Workman", role: "Designer", avatar: "W" },
];

export default function QuickTransfer() {
  return (
    <Paper shadow="sm" radius="lg" p="md" withBorder>
      <div className="flex items-center justify-between mb-6">
        <Title order={3}>Quick Transfer</Title>
      </div>

      <div className="flex gap-4 mb-6">
        {contacts.map((contact) => (
          <div key={contact.name} className="flex flex-col items-center gap-2">
            <Avatar size={56} radius="xl" className="bg-blue-100 text-blue-600">
              {contact.avatar}
            </Avatar>
            <Text size="sm" fw={500}>
              {contact.name}
            </Text>
            <Text size="xs" c="dimmed">
              {contact.role}
            </Text>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <TextInput
          placeholder="Write Amount"
          defaultValue="525.50"
          size="md"
          radius="md"
        />
        <Button fullWidth size="md" radius="md" leftSection={<Send size={18} />}>
          Send
        </Button>
      </div>
    </Paper>
  );
}
