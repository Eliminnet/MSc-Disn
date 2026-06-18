import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "../layout/AppLayout";
import { NotFound } from "@/pages/NotFound";
import { Home } from "@/pages/Home";
import { Room } from "@/pages/Room";
import { Login } from "@/pages/Login";

import { roomLoader } from "./loaders/roomLoader";
import { authLoader } from "./loaders/authLoader";

export const router = createBrowserRouter([
	{
		path: "/login",
		element: <Login />,
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
				path: "/room/:roomId",
				element: <Room />,
				loader: roomLoader,
			},
		],
	},
]);
