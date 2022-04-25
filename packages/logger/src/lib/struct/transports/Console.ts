import type { ConsoleTransportOptions } from "winston/lib/winston/transports";
import { LogLevel, timestampFormat, consoleFormat } from "../../..";
import { format, transports } from "winston";

export const ConsoleTransport = (
	options: ConsoleTransportOptions = {},
): transports.ConsoleTransportInstance => {
	return new transports.Console({
		format: format.combine(timestampFormat, consoleFormat),
		level: LogLevel.DEBUG,
		...options,
	});
};
