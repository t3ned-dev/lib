import { CipherKey, randomBytes, createCipheriv, createDecipheriv } from "node:crypto";

export class Encryption {
	readonly #cipherKey: CipherKey;

	public constructor(cipherKey: string) {
		if (cipherKey.length !== 32) throw new Error("Invalid cipher key length (min:max:32)");
		this.#cipherKey = Buffer.from(cipherKey);
	}

	public encrypt(data: string): string {
		const iv = randomBytes(16);
		const cipher = createCipheriv("aes-256-cbc", this.#cipherKey, iv);
		const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
		return `${iv.toString("hex")}:${encrypted.toString("hex")}`;
	}

	public decrypt(data: string): string {
		const [ivHex, encryptedHex] = data.split(":");
		if (!ivHex || !encryptedHex) throw new Error("Invalid cipher data");

		const iv = Buffer.from(ivHex, "hex");
		const encrypted = Buffer.from(encryptedHex, "hex");
		const decipher = createDecipheriv("aes-256-cbc", this.#cipherKey, iv);
		const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
		return decrypted.toString();
	}
}
