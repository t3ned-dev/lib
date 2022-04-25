module.exports = {
	displayName: "unit test",
	preset: "ts-jest",
	testEnvironment: "node",
	coverageDirectory: "coverage",
	collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
	testMatch: ["<rootDir>/**/__tests__/**/*.test.ts"],
};
