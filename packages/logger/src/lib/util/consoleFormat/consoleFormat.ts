import { format } from "winston";
const { colorize } = format.colorize();

export const consoleFormat = format.printf((info) => {
	const message =
		(typeof info.error === "object" ? info.error.stack ?? info.error.message : info.message) ??
		"~Empty log message~";

	return [
		colorize("timestamp", `[${info.timestamp}]`),
		`[${colorize(`${info.level}BG`, info.level.toUpperCase())}]`,
		colorize(info.level, message),
	].join(" ");
});
