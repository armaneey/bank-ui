"use client";

import { useState } from "react";
import { Paper, Tabs, TextInput, Switch, Button, Title, Text, Avatar, FileInput } from "@mantine/core";
import { Camera } from "lucide-react";

export default function SettingsContent() {
  const [activeTab, setActiveTab] = useState("preferences");

  return (
    <Paper shadow="sm" radius="lg" p="md" withBorder>
      <Tabs defaultValue="preferences" value={activeTab} onChange={(value: string | null) => setActiveTab(value || "preferences")}>
        <Tabs.List>
          <Tabs.Tab value="edit-profile">Edit Profile</Tabs.Tab>
          <Tabs.Tab value="preferences">Preferences</Tabs.Tab>
          <Tabs.Tab value="security">Security</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="edit-profile" pt="md">
          <div className="space-y-6">
            <div>
              <Title order={4} mb={4}>Profile Picture</Title>
              <div className="flex items-center gap-6">
                <Avatar size={100} radius="xl" src="https://i.pravatar.cc/150?img=12" alt="Profile" />
                <div className="space-y-3">
                  <FileInput
                    label="Upload new picture"
                    placeholder="Click to upload"
                    accept="image/png,image/jpeg"
                    leftSection={<Camera size={16} />}
                  />
                  <Text size="xs" c="dimmed">Recommended: Square image, at least 200x200px</Text>
                </div>
              </div>
            </div>

            <div>
              <Title order={4} mb={4}>Personal Information</Title>
              <div className="grid grid-cols-2 gap-4">
                <TextInput label="First Name" defaultValue="Eddy" />
                <TextInput label="Last Name" defaultValue="Cusuma" />
                <TextInput label="Email" defaultValue="eddy@example.com" />
                <TextInput label="Phone" defaultValue="+1 234 567 890" />
                <TextInput label="Date of Birth" placeholder="MM/DD/YYYY" />
                <TextInput label="Gender" defaultValue="Male" />
              </div>
            </div>

            <div>
              <Title order={4} mb={4}>Address Information</Title>
              <div className="grid grid-cols-2 gap-4">
                <TextInput label="Permanent Address" className="col-span-2" defaultValue="123 Main Street, Apt 4B" />
                <TextInput label="City" defaultValue="New York" />
                <TextInput label="Country" defaultValue="United States" />
                <TextInput label="Postal Code" defaultValue="10001" />
              </div>
            </div>

            <div className="flex justify-end">
              <Button>Save Changes</Button>
            </div>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="preferences" pt="md">
          <div className="space-y-6">
            <div>
              <Title order={4} mb={4}>Currency</Title>
              <TextInput defaultValue="USD" />
            </div>

            <div>
              <Title order={4} mb={4}>Time Zone</Title>
              <TextInput defaultValue="(GMT-12:00) International Date Line West" />
            </div>

            <div>
              <Title order={4} mb={4}>Notification</Title>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Text size="sm">I send or receive digital currency</Text>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Text size="sm">I receive merchant order</Text>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <Text size="sm">There are recommendation for my account</Text>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button>Save</Button>
            </div>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="security" pt="md">
          <div className="space-y-6">
            <div>
              <Title order={4} mb={4}>Change Password</Title>
              <div className="space-y-4">
                <TextInput label="Current Password" type="password" />
                <TextInput label="New Password" type="password" />
                <TextInput label="Confirm New Password" type="password" />
              </div>
            </div>

            <div>
              <Title order={4} mb={4}>Two-Factor Authentication</Title>
              <div className="flex items-center justify-between">
                <Text size="sm">Enable 2FA for enhanced security</Text>
                <Switch />
              </div>
            </div>

            <div className="flex justify-end">
              <Button>Update Security</Button>
            </div>
          </div>
        </Tabs.Panel>
      </Tabs>
    </Paper>
  );
}
