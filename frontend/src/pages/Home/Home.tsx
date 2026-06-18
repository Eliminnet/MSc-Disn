import { useNavigate } from "react-router-dom";
import { handleCreate } from "../../ws/handleCreate";
import { useJoinRoom } from "./hooks/useJoinRoom";

const Home = () => {
	const { roomId, error, setRoomId } = useJoinRoom();

	const navigate = useNavigate();

	return (
		<>
			<div>Home</div>
			{roomId && <h2>{roomId}</h2>}
			<button
				onClick={async () => {
					const res = await handleCreate();
					console.log("done");
					console.log(res);
					if (res.ok) {
						navigate(`/room/${res.roomId}`);
					}
				}}
			>
				Create
			</button>
			<input
				type="text"
				value={roomId}
				onChange={(e) => setRoomId(e.target.value.toUpperCase())}
				placeholder="Enter room code"
				maxLength={4}
			/>
			{error && <div>{error}</div>}
		</>
	);
};

export default Home;
