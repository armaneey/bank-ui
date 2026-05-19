"use client";

import { Paper, Title, Text, TextInput, Select, Button } from "@mantine/core";

export default function AddNewCard() {
  return (
    <Paper shadow="sm" radius="lg" p="md" withBorder>
      <div className="flex items-center justify-between mb-6">
        <Title order={3}>Add New Card</Title>
      </div>

      <div className="space-y-4">
        <Text size="sm" c="dimmed">
          Credit cards allow you to borrow money up to a certain limit. You must pay back the borrowed amount plus interest by a specified date.
        </Text>

        <Select
          label="Card Type"
          placeholder="Select card type"
          data={[
            { value: "visa", label: "Visa" },
            { value: "mastercard", label: "Mastercard" },
            { value: "amex", label: "American Express" },
          ]}
        />

        <TextInput
          label="Name On Card"
          placeholder="Enter cardholder name"
        />

        <TextInput
          label="Card Number"
          placeholder="1234 5678 9012 3456"
        />

        <div className="grid grid-cols-2 gap-4">
          <TextInput
            label="Expiration Date"
            placeholder="MM/YY"
          />
          <TextInput
            label="CVV"
            placeholder="123"
          />
        </div>

        <Button fullWidth size="md" radius="md">
          Add Card
        </Button>
      </div>
    </Paper>
  );
}
