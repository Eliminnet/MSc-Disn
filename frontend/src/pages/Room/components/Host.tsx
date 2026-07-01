import { useState } from "react";
import "../Room.css";

interface HostProps {
	roomId: string;
	users: number;
}

const Host = ({ roomId, users }: HostProps) => {
	const [file, setFile] = useState();

	const onFileUpload = () => {
		const formData = new FormData();
		formData.append("slides");
	};

	return (
		<>
			<h2 style={{ textAlign: "center" }}>Room: {roomId}</h2>
			<div>
				<input
					type="file"
					onChange={() => setFile}
					style={{ cursor: "pointer" }}
				/>
			</div>
			<p className="room-users">
				{users - 1} student{users - 1 > 1 ? "s" : ""} waiting to start
			</p>
		</>
	);
};

export default Host;
