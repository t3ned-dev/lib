import { Snowflake, constants } from "../src";

describe("Snowflake", () => {
	describe("Snowflake#generate", () => {
		test("given timestamp returns snowflake", () => {
			const expectedId = "32614907904004096";
			const sampleTimestamp = 1648771200000n;
			const snowflake = Snowflake.generate({ timestamp: sampleTimestamp });

			expect(snowflake.toString()).toBe(expectedId);
		});

		test("given increment exceeding 4095n returns snowflake", () => {
			const expectedId = "32614907904004096";
			const sampleTimestamp = 1648771200000n;
			const snowflake = Snowflake.generate({ timestamp: sampleTimestamp, increment: 5000n });

			expect(snowflake.toString()).toBe(expectedId);
		});

		test("given the creation of many snowflakes returns unique values", () => {
			const snowflakes = [
				Snowflake.generate(),
				Snowflake.generate(),
				Snowflake.generate(),
				Snowflake.generate(),
				Snowflake.generate(),
				Snowflake.generate(),
				Snowflake.generate(),
				Snowflake.generate(),
				Snowflake.generate(),
				Snowflake.generate(),
			];

			expect(new Set(snowflakes).size).toBe(snowflakes.length);
		});
	});

	describe("Snowflake#deconstruct", () => {
		test("given snowflake returns deconstructed data", () => {
			const id = 32614907904004096n;
			const snowflake = Snowflake.deconstruct(id);

			expect(snowflake).toStrictEqual({
				timestamp: 1648771200000n,
				workerId: 0n,
				processId: 1n,
				increment: 0n,
				epoch: constants.SNOWFLAKE_EPOCH,
			});
		});
	});
});
