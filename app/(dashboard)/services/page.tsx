import { ROUTE_METADATA } from '../../routes'
import ServiceCards from "@/components/ServiceCards";
import BankServicesList from "@/components/BankServicesList";

export const metadata = ROUTE_METADATA.services

export default function Services() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
      <div className="col-span-1 lg:col-span-12">
        <ServiceCards />
      </div>
      <div className="col-span-1 lg:col-span-12">
        <BankServicesList />
      </div>
    </div>
  );
}
