import { Encryption } from "../src";

const key = "47025a577a372c610a773feebccc2e0f";
const encryption = new Encryption(key);

describe("Encryption", () => {
	describe("Encryption#encrypt", () => {
		test("given data returns encrypted data", () => {
			const expectedLength = 65;
			const sampleData = "hello world";
			const encrypted = encryption.encrypt(sampleData);

			expect(encrypted.length).toBe(expectedLength);
		});

		test("given data encrypted many times returns unique values", () => {
			const sampleData = "hello world";

			const encrypted = [
				encryption.encrypt(sampleData),
				encryption.encrypt(sampleData),
				encryption.encrypt(sampleData),
				encryption.encrypt(sampleData),
				encryption.encrypt(sampleData),
				encryption.encrypt(sampleData),
				encryption.encrypt(sampleData),
				encryption.encrypt(sampleData),
				encryption.encrypt(sampleData),
				encryption.encrypt(sampleData),
			];

			expect(new Set(encrypted).size).toBe(encrypted.length);
		});
	});

	describe("Encryption#decrypt", () => {
		test("given encrypted data returns the original data", () => {
			const expectedData = "hello world";
			const encrypted = "984e6c32a6f0330941556da47bb8c4a3:1a5d870f3794d8376cb7705ff7dac11f";
			const data = encryption.decrypt(encrypted);

			expect(data).toBe(expectedData);
		});

		test("given encrypted data throws error on wrong key", () => {
			const incorrectKey = "89c5822696fe41ca3325349f59333e3a";
			const incorrectEncryption = new Encryption(incorrectKey);
			const encrypted = "984e6c32a6f0330941556da47bb8c4a3:1a5d870f3794d8376cb7705ff7dac11f";

			expect(() => incorrectEncryption.decrypt(encrypted)).toThrowError();
		});
	});
});
