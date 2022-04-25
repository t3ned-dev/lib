export enum LogLevelSeverity {
	ERROR,
	WARN,
	INFO,
	VERBOSE,
	DEBUG,
}

export enum LogLevel {
	ERROR = "error",
	WARN = "warn",
	INFO = "info",
	VERBOSE = "verbose",
	DEBUG = "debug",
}

export const LogLevels = {
	[LogLevel.ERROR]: LogLevelSeverity.ERROR,
	[LogLevel.WARN]: LogLevelSeverity.WARN,
	[LogLevel.INFO]: LogLevelSeverity.INFO,
	[LogLevel.VERBOSE]: LogLevelSeverity.VERBOSE,
	[LogLevel.DEBUG]: LogLevelSeverity.DEBUG,
};

export const colors = {
	timestamp: "bold grey",
	error: "red",
	warn: "yellow",
	info: "blue",
	verbose: "green",
	debug: "grey",
	errorBG: "bold red",
	warnBG: "bold yellow",
	infoBG: "bold blue",
	verboseBG: "bold green",
	debugBG: "bold grey",
};

export const transportTimestampFormat = "DD/MM/YYYY @ HH:mm:ss";
export const transportDateFormat = "YYYY-MM-DD-HH";
