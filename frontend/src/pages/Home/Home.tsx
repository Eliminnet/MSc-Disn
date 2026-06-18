import { useNavigate } from "react-router-dom";
import { handleCreate } from "../../ws/handleCreate";
import { useJoinRoom } from "./hooks/useJoinRoom";

import "./Home.css";

const Home = () => {
	const { roomId, error, setRoomId } = useJoinRoom();

	const navigate = useNavigate();

	return (
		<>
			<div className="home__content">
				<div className="room-search">
					<input
						type="text"
						value={roomId}
						onChange={(e) => setRoomId(e.target.value.toUpperCase())}
						placeholder="Enter room code"
						maxLength={4}
						className="room-search__input"
					/>
					<span className="room-search__error">{error}</span>
				</div>
				<span style={{ margin: "0.8rem 0" }}>or</span>
				<button
					className="room-create"
					onClick={async () => {
						const res = await handleCreate();
						console.log("done");
						console.log(res);
						if (res.ok) {
							navigate(`/room/${res.roomId}`, { state: { host: true } });
						}
					}}
				>
					Create your own!
				</button>
			</div>
		</>
	);
};

export default Home;
