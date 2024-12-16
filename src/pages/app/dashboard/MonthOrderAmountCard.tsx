import { getMonthOrdersAmount } from "@/api/get-month-orders-amount";
import { MetricCardSkeleton } from "@/components/MetricCardSkeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { DollarSign, Utensils } from "lucide-react";

export function MonthOrderAmountCard() {
	const { data: monthOrdersAmount } = useQuery({
		queryKey: ["metrics", "month-orders-amount"],
		queryFn: getMonthOrdersAmount,
	});
	return (
		<Card>
			<CardHeader className="flex items-center justify-between pb-2 flex-row space-y-0">
				<CardTitle className="text-base font-semibold ">
					Pedidos (mês)
				</CardTitle>
				<Utensils className="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent className="space-y-1">
				{monthOrdersAmount ? (
					<>
						<span className="text-2xl font-bold tracking-tight">
							{monthOrdersAmount.amount.toLocaleString("pt-BR")}
						</span>
						<p className="text-xs text-muted-foreground">
							{monthOrdersAmount.diffFromLastMonth >= 0 ? (
								<span className="text-emerald-500 dark:text-emerald-400">
									{monthOrdersAmount.diffFromLastMonth}%
								</span>
							) : (
								<span className="text-rose-500 dark:text-rose-400">
									{monthOrdersAmount.diffFromLastMonth}%
								</span>
							)}{" "}
							relação ao mês passado
						</p>
					</>
				) : (
					<MetricCardSkeleton />
				)}
			</CardContent>
		</Card>
	);
}
