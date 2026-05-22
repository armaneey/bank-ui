import { ROUTE_METADATA } from '../../routes'
import MyCreditCards from "@/components/MyCreditCards";
import CardExpenseStats from "@/components/CardExpenseStats";
import CardList from "@/components/CardList";
import AddNewCard from "@/components/AddNewCard";
import CardSettings from "@/components/CardSettings";

export const metadata = ROUTE_METADATA.creditCards

export default function CreditCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-3">
      <div className="col-span-1 lg:col-span-12">
        <MyCreditCards />
      </div>
      <div className="col-span-1 lg:col-span-4">
        <CardExpenseStats />
      </div>
      <div className="col-span-1 lg:col-span-8">
        <CardList />
      </div>
      <div className="col-span-1 lg:col-span-8">
        <AddNewCard />
      </div>
      <div className="col-span-1 lg:col-span-4">
        <CardSettings />
      </div>
    </div>
  );
}
