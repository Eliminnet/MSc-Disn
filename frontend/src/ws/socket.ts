import { io } from "socket.io-client";

export const socket = io("http://192.168.50.155:3000", {
	autoConnect: true,
});
