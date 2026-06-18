import { login } from "@/api/auth";
import { createContext, useContext, useState, type ReactNode } from "react";

type AuthContextType = {
	isAuthenticated: boolean | null;
	signIn: (username: string, password: string) => Promise<void>;
	signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

	const signIn = async (username: string, password: string) => {
		await login(username, password);
		setIsAuthenticated(true);
	};

	const signOut = async () => {
		setIsAuthenticated(false);
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth not used in AuthProvider");
	}
	return context;
}
