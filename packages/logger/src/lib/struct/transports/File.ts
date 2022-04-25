import type { DailyRotateFileTransportOptions } from "winston-daily-rotate-file";
import type { FileTransportOptions } from "winston/lib/winston/transports";
import type DailyRotateFile from "winston-daily-rotate-file";
import { transportDateFormat, timestampFormat } from "../../..";
import { format, transports } from "winston";
import "winston-daily-rotate-file";
import { join } from "path";

export const FileTransport = (
	options: FileOptions & FileTransportOptions,
): transports.FileTransportInstance => {
	return new transports.File({
		...options,
		filename: join(options.logFilesDirectory, options.fileName),
		format: format.combine(timestampFormat, format.json()),
	});
};

export const FileRotateTransport = (options: FileOptions & FileRotateOptions): DailyRotateFile => {
	if (options.fileName.includes(".")) {
		const fileNameParts = options.fileName.split(".");
		const fileExtention = fileNameParts.pop();
		options.fileName = `${fileNameParts.join(".")}-%DATE%.${fileExtention}`;
	}

	return new transports.DailyRotateFile({
		...options,
		filename: join(options.logFilesDirectory, options.fileName),
		format: format.combine(timestampFormat, format.json()),
		datePattern: transportDateFormat,
		utc: true,
	});
};

export interface FileOptions {
	logFilesDirectory: string;
	fileName: string;
}

export type FileRotateOptions = Pick<
	DailyRotateFileTransportOptions,
	"zippedArchive" | "maxFiles" | "maxSize" | "level"
>;
