import { sha1, sha256, sha384, sha512 } from "..";

describe("Hashing", () => {
	describe("sha1", () => {
		test("given data returns sha1 hash", () => {
			const expectedLength = 40;
			const sampleData = "hello world";
			const hash = sha1(sampleData);

			expect(hash.length).toBe(expectedLength);
		});
	});

	describe("shasha256", () => {
		test("given data returns sha256 hash", () => {
			const expectedLength = 64;
			const sampleData = "hello world";
			const hash = sha256(sampleData);

			expect(hash.length).toBe(expectedLength);
		});
	});

	describe("sha384", () => {
		test("given data returns sha384 hash", () => {
			const expectedLength = 96;
			const sampleData = "hello world";
			const hash = sha384(sampleData);

			expect(hash.length).toBe(expectedLength);
		});
	});

	describe("sha512", () => {
		test("given data returns sha512 hash", () => {
			const expectedLength = 128;
			const sampleData = "hello world";
			const hash = sha512(sampleData);

			expect(hash.length).toBe(expectedLength);
		});
	});
});
