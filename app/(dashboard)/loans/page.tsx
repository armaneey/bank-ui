import { ROUTE_METADATA } from '../../routes'
import LoanSummary from "@/components/LoanSummary";
import ActiveLoansTable from "@/components/ActiveLoansTable";

export const metadata = ROUTE_METADATA.loans

export default function Loans() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
      <div className="col-span-1 lg:col-span-12">
        <LoanSummary />
      </div>
      <div className="col-span-1 lg:col-span-12">
        <ActiveLoansTable />
      </div>
    </div>
  );
}
