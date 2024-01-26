import type { User } from "@appTypes/User.interface";

interface TokenPayload {
	user: User;
	iat: number;
	exp: number;
}

const dummyUser = {
	name: "Anna Doe",
	image: "https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg",
	email: "test@email.com",
};

function randomString(length: number): string {
	let text = "";
	const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (let i = 0; i < length; i += 1) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}

function generateToken(): string {
	// Token payload
	const payload: TokenPayload = {
		user: dummyUser,
		iat: Date.now(), // issued at
		exp: Date.now() + 1000 * 60 * 60, // expires in 1 hour
	};

	// Base64 encode payload
	const base64Payload = btoa(JSON.stringify(payload));

	// Create JWT-like token
	return `${base64Payload}.${randomString(10)}.${randomString(10)}`;
}

function decodeToken(token: string): TokenPayload {
	const [payload] = token.split(".");
	return JSON.parse(atob(payload));
}

const refreshToken = (): string => {
	const token = generateToken();
	localStorage.setItem("token", token);
	return token;
};

export { generateToken, decodeToken, refreshToken };
