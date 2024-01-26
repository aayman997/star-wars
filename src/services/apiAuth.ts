import type { User } from "@appTypes/User.interface";
import { generateToken, decodeToken, refreshToken } from "@utils/generateJWT";

const login = async ({ username, password }: { username: string; password: string }): Promise<User> => {
	// Hardcoded user for mock authentication
	if (username === "user" && password === "123456") {
		const token = generateToken();
		const { user } = decodeToken(token);
		localStorage.setItem("token", token);
		return user;
	}

	throw new Error("Invalid username or password \n username: user \n password: 123456");
};

const getCurrentUser = async (): Promise<User | null> => {
	const tokenString = localStorage.getItem("token");

	if (tokenString) {
		const { exp, user } = decodeToken(tokenString);
		const now = Date.now();

		if (exp - now < 60000 || now > exp) {
			const newToken = refreshToken();
			const { user: newUser } = decodeToken(newToken);
			return newUser;
		}

		return user;
	}
	return null;
};

const logout = () => {
	localStorage.removeItem("token");
};

export { login, getCurrentUser, logout };
