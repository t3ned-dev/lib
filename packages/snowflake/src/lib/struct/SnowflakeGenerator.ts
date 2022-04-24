export class SnowflakeGenerator {
	readonly #epoch: bigint;
	#increment = 0n;

	public constructor(epoch: bigint) {
		this.#epoch = epoch;
	}

	public generate(options: Partial<SnowflakeGenerateOptions> = {}): snowflake {
		const workerId = options.workerId ?? 0n;
		const processId = options.processId ?? 1n;
		const timestamp = options.timestamp ?? BigInt(Date.now());

		let increment = options.increment;
		if (typeof increment === "bigint" && increment >= 4095n) {
			increment = 0n;
		} else {
			increment = this.#increment++;
			if (this.#increment >= 4095n) this.#increment = 0n;
		}

		return (
			((timestamp - this.#epoch) << 22n) |
			((workerId & 0b11111n) << 17n) |
			((processId & 0b11111n) << 12n) |
			increment
		);
	}

	public deconstruct(snowflake: snowflake): DeconstructedSnowflake {
		return {
			timestamp: (snowflake >> 22n) + this.#epoch,
			workerId: (snowflake >> 17n) & 0b11111n,
			processId: (snowflake >> 12n) & 0b11111n,
			increment: snowflake & 0b111111111111n,
			epoch: this.#epoch,
		};
	}
}

export type snowflake = bigint;

export interface SnowflakeGenerateOptions {
	workerId: bigint;
	processId: bigint;
	increment: bigint;
	timestamp: bigint;
}

export interface DeconstructedSnowflake {
	epoch: bigint;
	workerId: bigint;
	processId: bigint;
	increment: bigint;
	timestamp: bigint;
}
