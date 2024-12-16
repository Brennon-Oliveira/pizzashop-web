import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/auth/SignIn";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { SignUp } from "./pages/auth/SignUp";
import { Orders } from "./pages/app/orders/Orders";
import { Dashboard } from "./pages/app/dashboard/Dashboard";
import { NotFound } from "./pages/404";
import { ErrorPage } from "./pages/Error";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/", element: <Dashboard /> },
			{
				path: "/orders",
				element: <Orders />,
			},
		],
	},
	{
		path: "/auth",
		element: <AuthLayout />,
		children: [
			{
				path: "/auth/sign-in",
				element: <SignIn />,
			},
			{
				path: "/auth/sign-up",
				element: <SignUp />,
			},
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);
