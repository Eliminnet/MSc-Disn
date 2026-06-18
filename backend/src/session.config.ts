import session from "express-session";

export function createSessionMiddleware() {
	return session({
		secret: "secret",
		resave: false,
		saveUninitialized: false,
		cookie: {
			secure: false,
			maxAge: 1000 * 60 * 60 * 24,
		},
	});
}
