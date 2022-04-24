import { Token } from "..";

describe("Token", () => {
	describe("Token#generate", () => {
		test("given user id returns token with base64 user id", async () => {
			const userId = "139043598254477312";
			const expectedUserId = "MTM5MDQzNTk4MjU0NDc3MzEy";
			const token = await Token.generate({ userId });

			expect(token.userId).toBe(expectedUserId);
		});

		test("given user id returns token version with valid length", async () => {
			const expectedLength = 8;
			const userId = "139043598254477312";
			const token = await Token.generate({ userId });

			expect(token.version.length).toBe(expectedLength);
		});

		test("given user id returns token hash with valid length", async () => {
			const expectedLength = 40;
			const userId = "139043598254477312";
			const token = await Token.generate({ userId });

			expect(token.hash.length).toBe(expectedLength);
		});

		test("given user id returns token with valid length", async () => {
			const userId = "139043598254477312";
			const base64UserId = "MTM5MDQzNTk4MjU0NDc3MzEy";
			const expectedLength = base64UserId.length + 8 + 40 + 2;
			const token = await Token.generate({ userId });

			expect(token.toString().length).toBe(expectedLength);
		});
	});

	describe("Token#deconstruct", () => {
		test("given token returns deconstructed token", () => {
			const expectedUserId = "139043598254477312";
			const tokenString = "MTM5MDQzNTk4MjU0NDc3MzEy.B_qjsXvs.40a3c72063632af737ad5f421fcbd0135187930a";
			const token = Token.deconstruct(tokenString);

			expect(token.userId).toBe(expectedUserId);
		});
	});
});
