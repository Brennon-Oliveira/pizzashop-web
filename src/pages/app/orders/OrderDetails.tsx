import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export function OrderDatails() {
	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Pedido: 123123dij19ijfi23f</DialogTitle>
				<DialogDescription>Detalhes do pedido</DialogDescription>
			</DialogHeader>

			<div className="space-y-6">
				<Table>
					<TableBody>
						<TableRow>
							<TableCell className="text-muted-foreground">Status</TableCell>
							<TableCell className="flex justify-center">
								<div className="flex items-center gap-2">
									<span className="h-2 w-2 rounded-full bg-slate-400" />
									<span className="font-medium text-muted-foreground">
										Pendente
									</span>
								</div>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="text-muted-foreground">
								Nome do cliente
							</TableCell>
							<TableCell className="flex justify-center">
								Brennon Gabriel de Oliveira
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="text-muted-foreground">Status</TableCell>
							<TableCell className="flex justify-center">
								(42) 99999-9999
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="text-muted-foreground">Email</TableCell>
							<TableCell className="flex justify-center">
								brennonoliveira20014@gmail.com
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>

				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Produto</TableHead>
							<TableHead className="text-right">Qtd.</TableHead>
							<TableHead className="text-right">Preço</TableHead>
							<TableHead className="text-right">Subtotal</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell>Pizza Pepperoni Familia</TableCell>
							<TableCell>2</TableCell>
							<TableCell>R$ 69,90</TableCell>
							<TableCell>R$ 139,80</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Pizza Mussarela Familia</TableCell>
							<TableCell>2</TableCell>
							<TableCell>R$ 59,90</TableCell>
							<TableCell>R$ 119,80</TableCell>
						</TableRow>
					</TableBody>
					<TableFooter>
						<TableCell colSpan={3}>Total do pedido:</TableCell>
						<TableCell className="text-right font-medium">R$ 259,60</TableCell>
					</TableFooter>
				</Table>
			</div>
		</DialogContent>
	);
}
