import { SALT_ROUNDS } from "../../constants";
import { randomBytes } from "crypto";
import { sha1 } from "@t3ned/crypto";
import bcrypt from "bcrypt";

export class Token {
	public static async generate(options: TokenGenerateOptions): Promise<GeneratedToken> {
		const userId = Buffer.from(options.userId).toString("base64url");
		const version = randomBytes(6).toString("base64url");
		const token = randomBytes(16).toString("hex");

		const hash = sha1(token);
		const saltedHash = await bcrypt.hash(hash, SALT_ROUNDS);
		const toString = () => `${userId}.${version}.${hash}`;

		return { userId, version, hash, saltedHash, toString };
	}

	public static deconstruct(token: string): DeconstructedToken {
		const [base64UserId, version, hash] = token.split(".");
		if (!base64UserId || !version || !hash) throw new Error("Invalid token");

		const userId = Buffer.from(base64UserId, "base64url").toString();
		return { userId, version, hash };
	}
}

export interface TokenGenerateOptions {
	userId: string;
}

export interface GeneratedToken {
	userId: string;
	version: string;
	hash: string;
	saltedHash: string;
	toString(): string;
}

export interface DeconstructedToken {
	userId: string;
	version: string;
	hash: string;
}
