import { createBrowserRouter, redirect } from "react-router-dom";

import { AppLayout } from "../layout/AppLayout";
import { NotFound } from "@/pages/NotFound";
import { Join } from "@/pages/Join";
import { Home } from "@/pages/Home";
import { Room } from "@/pages/Room";
import { Login } from "@/pages/Login";

import { roomLoader } from "./loaders/roomLoader";
import { authLoader } from "./loaders/authLoader";
import { loginLoader } from "./loaders/loginLoader";

export const router = createBrowserRouter([
	{
		element: <AppLayout />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/login",
				element: <Login />,
				loader: loginLoader,
			},
			{
				loader: authLoader,
				children: [
					{
						path: "/join",
						element: <Join />,
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
		],
	},
]);
