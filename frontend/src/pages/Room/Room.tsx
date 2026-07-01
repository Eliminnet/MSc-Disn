import { useLoaderData, useLocation } from "react-router-dom";
import { useRoomUsers } from "./hooks/useRoomUsers";
import { useRoomSlide } from "./hooks/useRoomSlide";

import "./Room.css";
import Host from "./components/Host";

const Room = () => {
	const location = useLocation();

	const { roomId } = useLoaderData() as { roomId: string };
	const { users } = useRoomUsers(roomId);
	const { slide } = useRoomSlide(roomId);

	const host: boolean = location.state.host ?? false;

	if (host) {
		return (
			<Host
				roomId={roomId}
				users={users}
			/>
		);
	}

	if (slide === 0) {
		return (
			<>
				<h1 className="room-code">{roomId}</h1>
				<p style={{ display: "flex", justifyContent: "center", marginBottom: "auto" }}>
					Sit tight, the host will start soon!
				</p>
				<p className="room-users">
					{users - 1} student{users - 1 > 1 ? "s" : ""} waiting to start
				</p>
			</>
		);
	}

	return (
		<>
			<div>Room {roomId}</div>
			<p className="room-users">
				{users - 1} student{users - 1 > 1 ? "s" : ""} watching
			</p>
		</>
	);
};

export default Room;
