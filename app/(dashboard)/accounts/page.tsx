import { ROUTE_METADATA } from '../../routes'
import SummaryCards from "@/components/SummaryCards";
import LastTransactions from "@/components/LastTransactions";
import MyCards from "@/components/MyCards";
import DebitCreditOverview from "@/components/DebitCreditOverview";
import InvoicesSent from "@/components/InvoicesSent";

export const metadata = ROUTE_METADATA.accounts

export default function Accounts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
      <div className="col-span-1 lg:col-span-12">
        <SummaryCards />
      </div>
      <div className="col-span-1 lg:col-span-8">
        <LastTransactions />
      </div>
      <div className="col-span-1 lg:col-span-4">
        <MyCards />
      </div>
      <div className="col-span-1 lg:col-span-8">
        <DebitCreditOverview />
      </div>
      <div className="col-span-1 lg:col-span-4">
        <InvoicesSent />
      </div>
    </div>
  );
}
