import winston, { LoggerOptions } from "winston";
import { LogLevels, colors } from "../..";

winston.addColors(colors);

export const Logger = (service: string, options: LoggerOptions = {}) => {
	return winston.createLogger({
		...options,
		defaultMeta: { ...options.defaultMeta, service },
		levels: LogLevels,
	});
};
