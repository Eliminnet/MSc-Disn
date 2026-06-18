import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

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
			<div className="login-content">
				<div className="login-header">
					<img src="/favicon.svg" />
					<h1 style={{ fontSize: "1.5rem" }}>MSc Project</h1>
				</div>
				<form
					className="login-form secondary"
					onSubmit={handleSubmit}
				>
					<div className="login-wrapper">
						<input
							className="login-input"
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder="Username"
							required
						/>
						<input
							className="login-input"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
							required
						/>
						<button
							className="login-button tertiary"
							type="submit"
						>
							Log in
						</button>
						<p className="tooltip">
							*Your username is private to all users (including lecturers) for
							anonymity
						</p>
					</div>
				</form>
			</div>
		</>
	);
};

export default Login;
