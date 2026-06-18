export async function login(username: string, password: string) {
	const res = await fetch("http://192.168.50.155:3000/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ username, password }),
		credentials: "include",
	});

	if (!res.ok) {
		throw new Error("Invalid credentials");
	}
}

export async function getAuth() {
	const res = await fetch("http://192.168.50.155:3000/auth/me", {
		credentials: "include",
	});

	return res.ok;
}
