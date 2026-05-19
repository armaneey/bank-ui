"use client";

import { Paper, Title, Text, Badge, Avatar } from "@mantine/core";
import { TrendingUp, TrendingDown } from "lucide-react";

const stocks = [
  { id: 1, name: "Trivago", price: 520, change: 5, icon: "T" },
  { id: 2, name: "Canon", price: 480, change: 10, icon: "C" },
  { id: 3, name: "Uber Food", price: 350, change: -3, icon: "U" },
  { id: 4, name: "Nokia", price: 940, change: 2, icon: "N" },
  { id: 5, name: "Tiktok", price: 670, change: -12, icon: "T" },
];

export default function TrendingStocks() {
  return (
    <Paper shadow="sm" radius="lg" p="md" withBorder>
      <div className="flex items-center justify-between mb-6">
        <Title order={3}>Trending Stock</Title>
      </div>

      <div className="space-y-3">
        {stocks.map((stock) => (
          <div
            key={stock.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Avatar size={40} radius="xl" className="bg-purple-100 text-purple-600">
                {stock.icon}
              </Avatar>
              <div>
                <Text fw={600} size="sm">
                  {stock.name}
                </Text>
                <Text size="xs" c="dimmed">
                  ${stock.price}
                </Text>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {stock.change >= 0 ? (
                <TrendingUp className="text-green-600" size={16} />
              ) : (
                <TrendingDown className="text-red-600" size={16} />
              )}
              <Badge
                color={stock.change >= 0 ? "green" : "red"}
                variant="light"
                size="sm"
              >
                {stock.change >= 0 ? "+" : ""}{stock.change}%
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </Paper>
  );
}
