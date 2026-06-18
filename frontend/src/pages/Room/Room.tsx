import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useRoomUsers } from "./hooks/useRoomUsers";

const Room = () => {
	const { roomId } = useLoaderData() as { roomId: string };
	const { users } = useRoomUsers(roomId);

	return (
		<>
			<div>Room {roomId}</div>
			<div>{users} users connected</div>
		</>
	);
};

export default Room;
