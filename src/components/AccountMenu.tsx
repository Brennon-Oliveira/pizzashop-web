import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Building, ChevronDown, LogOut } from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/get-profile";
import { getManagedRestaurant } from "@/api/get-managed-restaurant";
import { Skeleton } from "./ui/skeleton";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { StoreProfileDialog } from "./StoreProfileDIalog";
import { signOut } from "@/api/sign-out";
import { useNavigate } from "react-router-dom";

export function AccountMenu() {
	const navigate = useNavigate();

	const { data: profile, isLoading: isLoadingProfile } = useQuery({
		queryKey: ["profile"],
		queryFn: getProfile,
		staleTime: Number.POSITIVE_INFINITY,
	});

	const { data: managedRestaurant, isLoading: isLoadingManagedRestaurant } =
		useQuery({
			queryKey: ["managed-restaurant"],
			queryFn: getManagedRestaurant,
			staleTime: Number.POSITIVE_INFINITY,
		});

	const { mutateAsync: signOutFn, isPending: isSigningOut } = useMutation({
		mutationFn: signOut,
		onSuccess() {
			navigate("/auth/sign-in", { replace: true });
		},
	});

	return (
		<Dialog>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant={"outline"}
						className="flex items-center gap-2 select-none"
					>
						{isLoadingManagedRestaurant ? (
							<Skeleton className="h-4 w-40" />
						) : (
							managedRestaurant?.name
						)}

						<ChevronDown />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="w-56">
					<DropdownMenuLabel className="flex flex-col">
						{isLoadingProfile ? (
							<div className="space-y-1.5">
								<Skeleton className="h-4 w-32" />
								<Skeleton className="h-3 w-24" />
							</div>
						) : (
							<>
								<span>{profile?.name}</span>
								<span className="text-xs font-normal text-muted-foreground">
									{profile?.email}
								</span>
							</>
						)}
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DialogTrigger asChild>
						<DropdownMenuItem>
							<Building className="w-4 h-4 mr-2" />
							<span>Perfil da loja</span>
						</DropdownMenuItem>
					</DialogTrigger>
					<DropdownMenuItem
						asChild
						className="text-rose-500 dark:text-rose-400"
					>
						<button
							type="button"
							onClick={() => signOutFn()}
							className="w-full"
						>
							<LogOut className="w-4 h-4 mr-2" />
							<span>Sair</span>
						</button>
					</DropdownMenuItem>
				</DropdownMenuContent>
				<StoreProfileDialog />
			</DropdownMenu>
		</Dialog>
	);
}
