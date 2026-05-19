"use client";

import { Paper, Title, Text, Button, Avatar, Badge } from "@mantine/core";
import { Gift, Plane, Coffee, ShoppingBag } from "lucide-react";

const rewards = [
  { id: 1, name: "Flight Voucher", points: 5000, icon: Plane, color: "blue" },
  { id: 2, name: "Coffee Subscription", points: 2000, icon: Coffee, color: "orange" },
  { id: 3, name: "Shopping Credit", points: 3000, icon: ShoppingBag, color: "purple" },
  { id: 4, name: "Gift Card", points: 1500, icon: Gift, color: "green" },
];

export default function AvailableRewards() {
  return (
    <Paper shadow="sm" radius="lg" p="md" withBorder>
      <div className="flex items-center justify-between mb-6">
        <Title order={3}>Available Rewards</Title>
      </div>

      <div className="space-y-4">
        {rewards.map((reward) => (
          <div
            key={reward.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-4">
              <Avatar size={48} radius="xl" className={`bg-${reward.color}-100 text-${reward.color}-600`}>
                <reward.icon size={24} />
              </Avatar>
              <div>
                <Text fw={600} size="md">
                  {reward.name}
                </Text>
                <Badge color={reward.color} variant="light" size="sm" mt={1}>
                  {reward.points.toLocaleString()} pts
                </Badge>
              </div>
            </div>

            <Button size="xs" variant="filled">
              Redeem
            </Button>
          </div>
        ))}
      </div>
    </Paper>
  );
}
