import { getDayOrdersAmount } from "@/api/get-day-orders-amount";
import { MetricCardSkeleton } from "@/components/MetricCardSkeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { DollarSign, Utensils } from "lucide-react";

export function DayOrdersAmountCard() {
	const { data: dayOrdersAmount } = useQuery({
		queryKey: ["metrics", "day-orders-amount"],
		queryFn: getDayOrdersAmount,
	});
	return (
		<Card>
			<CardHeader className="flex items-center justify-between pb-2 flex-row space-y-0">
				<CardTitle className="text-base font-semibold ">
					Pedidos (dia)
				</CardTitle>
				<Utensils className="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent className="space-y-1">
				{dayOrdersAmount ? (
					<>
						<span className="text-2xl font-bold tracking-tight">
							{dayOrdersAmount.amount.toLocaleString("pt-BR")}
						</span>
						<p className="text-xs text-muted-foreground">
							{dayOrdersAmount.diffFromYesterday >= 0 ? (
								<span className="text-emerald-500 dark:text-emerald-400">
									{dayOrdersAmount.diffFromYesterday}%
								</span>
							) : (
								<span className="text-rose-500 dark:text-rose-400">
									{dayOrdersAmount.diffFromYesterday}%
								</span>
							)}{" "}
							em relação a ontem
						</p>
					</>
				) : (
					<MetricCardSkeleton />
				)}
			</CardContent>
		</Card>
	);
}
