import { Skeleton } from "@/components/ui/skeleton";
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export function OrderDetailsSkeleton() {
	return (
		<div className="space-y-6">
			<Table>
				<TableBody>
					<TableRow>
						<TableCell className="text-muted-foreground">Status</TableCell>
						<TableCell className="flex justify-center">
							<Skeleton className="h-5 w-20 ml-auto" />
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="text-muted-foreground">
							Nome do cliente
						</TableCell>
						<TableCell className="flex justify-center">
							<Skeleton className="h-5 w-[164px] ml-auto" />
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="text-muted-foreground">Telefone</TableCell>
						<TableCell className="flex justify-center">
							<Skeleton className="h-5 w-[140px] ml-auto" />
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="text-muted-foreground">Email</TableCell>
						<TableCell className="flex justify-center">
							<Skeleton className="h-5 w-[200px] ml-auto" />
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
					{Array.from<number>({ length: 2 })
						.fill(0)
						.map((item) => (
							<TableRow key={item}>
								<TableCell>
									<Skeleton className="h-5 w-[140px] mr-auto" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-5 w-3 ml-auto" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-5 w-12 ml-auto" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-5 w-12 ml-auto" />
								</TableCell>
							</TableRow>
						))}
				</TableBody>
				<TableFooter>
					<TableCell colSpan={3}>Total do pedido:</TableCell>
					<TableCell className="text-right font-medium">
						<Skeleton className="h-5 w-20" />
					</TableCell>
				</TableFooter>
			</Table>
		</div>
	);
}
