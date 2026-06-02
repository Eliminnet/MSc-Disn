module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	rootDir: "src",
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/$1",
	},
	transform: {
		"^.+\\.ts$": [
			"ts-jest",
			{
				tsconfig: "../tsconfig.json",
			},
		],
	},
	testRegex: ".*\\.spec\\.ts$",
};
