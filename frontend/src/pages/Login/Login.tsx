import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const { signIn } = useAuth();
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const navigate = useNavigate();

	const handleSubmit = async (e: React.SubmitEvent) => {
		e.preventDefault();
		await signIn(username, password);
		navigate("/");
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username">Username:</label>
					<input
						id="username"
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</div>

				<div>
					<label htmlFor="password">Password:</label>
					<input
						id="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>

				<button type="submit">Log in</button>
			</form>
		</>
	);
};

export default Login;
