"use client";

import { Paper, Title, Progress, Text, Badge } from "@mantine/core";
import { Crown, TrendingUp } from "lucide-react";

export default function TierStatus() {
  return (
    <Paper shadow="sm" radius="lg" p="md" withBorder>
      <div className="flex items-center justify-between mb-6">
        <Title order={3}>Tier Status</Title>
        <Badge color="orange" size="lg" variant="filled">
          Gold Member
        </Badge>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
            <Crown size={32} className="text-yellow-600" />
          </div>
          <div className="flex-1">
            <Text fw={700} size="lg">
              Gold Tier
            </Text>
            <Text size="sm" c="dimmed">
              Youre enjoying exclusive benefits
            </Text>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <Text fw={600} size="sm">
              Progress to Platinum
            </Text>
            <Text size="sm" c="dimmed">
              7,500 / 10,000 points
            </Text>
          </div>
          <Progress value={75} color="orange" size="lg" />
        </div>

        <div>
          <Text fw={600} size="sm" mb={3}>
            Gold Tier Benefits
          </Text>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp size={16} className="text-green-600" />
              <Text size="sm">2% Cashback</Text>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp size={16} className="text-green-600" />
              <Text size="sm">Free ATM Withdrawals</Text>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp size={16} className="text-green-600" />
              <Text size="sm">Priority Support</Text>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp size={16} className="text-green-600" />
              <Text size="sm">No Annual Fee</Text>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
}
