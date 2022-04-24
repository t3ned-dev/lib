import { Snowflake, constants } from "../src";

describe("Snowflake", () => {
	describe("Snowflake#generate", () => {
		test("given snowflake timestamp option equal to snowflake epoch returns 4096", () => {
			const expectedId = "4096";
			const timestamp = constants.SNOWFLAKE_EPOCH;
			const snowflake = Snowflake.generate({ timestamp });

			expect(snowflake.toString()).toBe(expectedId);
		});

		test("given no snowflake options returns a snowflake larger than 4096", () => {
			const expectedId = 4096n;
			const snowflake = Snowflake.generate();

			expect(snowflake).toBeGreaterThan(expectedId);
		});

		test("given increment option higher than 4095 returns a snowflake with default options", () => {
			const expectedId = "4096";
			const timestamp = constants.SNOWFLAKE_EPOCH;
			const snowflake = Snowflake.generate({ timestamp, increment: 5000n });

			expect(snowflake.toString()).toBe(expectedId);
		});

		test("creation of many snowflakes returns unique bigint values each time", () => {
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
});
