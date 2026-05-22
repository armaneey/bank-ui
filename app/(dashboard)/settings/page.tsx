import { ROUTE_METADATA } from '../../routes'
import SettingsContent from "@/components/SettingsContent";

export const metadata = ROUTE_METADATA.settings

export default function Settings() {
  return <SettingsContent />;
}
