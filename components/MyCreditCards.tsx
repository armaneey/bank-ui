"use client";

import { Paper, Title, Button } from "@mantine/core";
import { Plus } from "lucide-react";

export default function MyCreditCards() {
  return (
    <Paper shadow="sm" radius="lg" p="xs" withBorder>
      <div className="flex items-center justify-between mb-3">
        <Title order={3}>My Cards</Title>
        <Button variant="light" size="sm" leftSection={<Plus size={16} />}>
          Add Card
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="bg-linear-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white h-48 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm opacity-80">Balance</p>
              <p className="text-2xl font-bold">$5,756</p>
            </div>
            <div className="w-12 h-8 bg-white/20 rounded flex items-center justify-center">
              <div className="w-8 h-5 bg-yellow-400 rounded-sm"></div>
            </div>
          </div>
          <div>
            <p className="text-xs opacity-70 mb-1">CARD HOLDER</p>
            <p className="font-medium">Eddy Cusuma</p>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs opacity-70 mb-1">VALID THRU</p>
              <p className="font-medium">12/22</p>
            </div>
            <p className="text-lg font-medium tracking-wider">3778 **** **** 1234</p>
          </div>
        </div>

      
        <div className="bg-linear-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-white h-48 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm opacity-80">Balance</p>
              <p className="text-2xl font-bold">$5,756</p>
            </div>
            <div className="w-12 h-8 bg-white/20 rounded flex items-center justify-center">
              <div className="w-8 h-5 bg-yellow-400 rounded-sm"></div>
            </div>
          </div>
          <div>
            <p className="text-xs opacity-70 mb-1">CARD HOLDER</p>
            <p className="font-medium">Eddy Cusuma</p>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs opacity-70 mb-1">VALID THRU</p>
              <p className="font-medium">12/22</p>
            </div>
            <p className="text-lg font-medium tracking-wider">3778 **** **** 1234</p>
          </div>
        </div>

        <div className="bg-linear-to-br from-gray-400 to-gray-500 rounded-2xl p-6 text-white h-48 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm opacity-80">Balance</p>
              <p className="text-2xl font-bold">$5,756</p>
            </div>
            <div className="w-12 h-8 bg-white/20 rounded flex items-center justify-center">
              <div className="w-8 h-5 bg-yellow-400 rounded-sm"></div>
            </div>
          </div>
          <div>
            <p className="text-xs opacity-70 mb-1">CARD HOLDER</p>
            <p className="font-medium">Eddy Cusuma</p>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs opacity-70 mb-1">VALID THRU</p>
              <p className="font-medium">12/22</p>
            </div>
            <p className="text-lg font-medium tracking-wider">3778 **** **** 1234</p>
          </div>
        </div>
      </div>
    </Paper>
  );
}
