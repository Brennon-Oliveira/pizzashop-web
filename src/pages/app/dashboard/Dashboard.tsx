import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { MonthRevenueCard } from "./MonthRevenueCard";
import { MonthOrderAmountCard } from "./MonthOrderAmountCard";
import { DayOrderAmountCard } from "./DayOrderAmountCard";
import { MonthCanceledOrdersAmountCard } from "./MonthCanceledOrdersAmountCard";
import { RevenueChart } from "./RevenueChart";
import { PopularProductsChart } from "./PopularProductsChart";

export function Dashboard() {
	return (
		<>
			<Helmet title="Dashboard" />
			<div className="flex flex-col gap-4">
				<h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

				<div className="grid grid-cols-4 gap-4">
					<MonthRevenueCard />
					<MonthOrderAmountCard />
					<DayOrderAmountCard />
					<MonthCanceledOrdersAmountCard />
				</div>
				<div className="grid grid-cols-9 gap-4">
					<RevenueChart />
					<PopularProductsChart />
				</div>
			</div>
		</>
	);
}
