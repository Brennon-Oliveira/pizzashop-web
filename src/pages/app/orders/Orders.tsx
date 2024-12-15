import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Helmet } from "react-helmet-async";
import { OrderTableRow } from "./OrderTableRow";
import { OrderTableFilter } from "./OrderTableFilter";
import { Pagination } from "@/components/Pagination";

export function Orders() {
	return (
		<>
			<Helmet title="Pedidos" />
			<div className="flex flex-col gap-4">
				<h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
				<div className="space-y-2.5">
					<OrderTableFilter />

					<div className="border rounded-md">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className="w-[64px]" />
									<TableHead className="w-[140px]">Identificador</TableHead>
									<TableHead className="w-[180px]">Realizado há</TableHead>
									<TableHead className="w-[140px]">Status</TableHead>
									<TableHead>Cliente</TableHead>
									<TableHead className="w-[140px]">Total do pedido</TableHead>
									<TableHead className="w-[164px]" />
									<TableHead className="w-[132px]" />
								</TableRow>
							</TableHeader>
							<TableBody>
								{Array.from({ length: 10 })
									.fill("id")
									.map((id) => (
										<OrderTableRow key={id as string} />
									))}
							</TableBody>
						</Table>
					</div>

					<Pagination pageIndex={0} perPage={10} totalCount={125} />
				</div>
			</div>
		</>
	);
}
