import { createHash } from "node:crypto";

export type shaAlgorithm = "sha1" | "sha256" | "sha384" | "sha512";

export const shaHash = (algorithm: shaAlgorithm, data: string): string => {
	return createHash(algorithm).update(data, "utf8").digest("hex");
};

export const sha1 = (data: string): string => shaHash("sha1", data);
export const sha256 = (data: string): string => shaHash("sha256", data);
export const sha384 = (data: string): string => shaHash("sha384", data);
export const sha512 = (data: string): string => shaHash("sha512", data);
