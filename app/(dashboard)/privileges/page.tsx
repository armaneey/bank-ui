import { ROUTE_METADATA } from '../../routes'
import PrivilegesSummary from "@/components/PrivilegesSummary";
import TierStatus from "@/components/TierStatus";
import AvailableRewards from "@/components/AvailableRewards";

export const metadata = ROUTE_METADATA.privileges

export default function Privileges() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
      <div className="col-span-1 lg:col-span-12">
        <PrivilegesSummary />
      </div>
      <div className="col-span-1 lg:col-span-8">
        <TierStatus />
      </div>
      <div className="col-span-1 lg:col-span-4">
        <AvailableRewards />
      </div>
    </div>
  );
}
