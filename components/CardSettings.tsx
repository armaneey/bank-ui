"use client";

import { Paper, Title, Switch, Group, Text } from "@mantine/core";
import { Lock, Key, Smartphone, Apple, Store } from "lucide-react";

const settings = [
  { id: 1, label: "Block Card", icon: Lock, description: "Temporarily block your card" },
  { id: 2, label: "Change Pin Code", icon: Key, description: "Update your card PIN" },
  { id: 3, label: "Add to Google Pay", icon: Smartphone, description: "Enable Google Pay" },
  { id: 4, label: "Add to Apple Pay", icon: Apple, description: "Enable Apple Pay" },
  { id: 5, label: "Add to Apple Store", icon: Store, description: "Link to Apple Store" },
];

export default function CardSettings() {
  return (
    <Paper shadow="sm" radius="lg" p="md" withBorder>
      <div className="flex items-center justify-between mb-6">
        <Title order={3}>Card Setting</Title>
      </div>

      <div className="space-y-4">
        {settings.map((setting) => (
          <Group key={setting.id} justify="space-between" className="p-4 bg-gray-50 rounded-lg">
            <Group>
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <setting.icon size={20} className="text-blue-600" />
              </div>
              <div>
                <Text fw={600} size="sm">
                  {setting.label}
                </Text>
                <Text size="xs" c="dimmed">
                  {setting.description}
                </Text>
              </div>
            </Group>
            <Switch />
          </Group>
        ))}
      </div>
    </Paper>
  );
}
