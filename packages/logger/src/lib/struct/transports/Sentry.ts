import Sentry, { SentryTransportOptions } from "winston-transport-sentry-node";
import { LogLevel } from "../../..";

export const SentryTransport = (dsn: string, options: SentryTransportOptions = {}): Sentry => {
	return new Sentry({
		...options,
		sentry: { ...options.sentry, dsn },
		level: LogLevel.ERROR,
	});
};
