module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	coverageDirectory: "coverage",
	collectCoverageFrom: ["<rootDir>/packages/src/**/*.ts"],
	testMatch: ["<rootDir>/packages/**/__tests__/**/*.test.ts"],
};
