import { transportTimestampFormat } from "../../..";
import { format } from "winston";

export const timestampFormat = format.timestamp({
	format: transportTimestampFormat,
});
