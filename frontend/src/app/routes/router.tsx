import { createBrowserRouter, redirect } from "react-router-dom";

import { AppLayout } from "../layout/AppLayout";
import { NotFound } from "@/pages/NotFound";
import { Home } from "@/pages/Home";
import { Room } from "@/pages/Room";
import { Login } from "@/pages/Login";

import { roomLoader } from "./loaders/roomLoader";
import { authLoader } from "./loaders/authLoader";
import { loginLoader } from "./loaders/loginLoader";

export const router = createBrowserRouter([
	{
		path: "/login",
		element: <Login />,
		loader: loginLoader,
	},
	{
		element: <AppLayout />,
		errorElement: <NotFound />,
		loader: authLoader,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/room",
				children: [
					{
						index: true,
						loader: () => {
							throw redirect("/");
						},
					},
					{
						path: ":roomId",
						element: <Room />,
						loader: roomLoader,
					},
				],
			},
		],
	},
]);
