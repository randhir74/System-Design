import { ConsoleLogger } from "./ConsoleLogger";
import { FileLogger } from "./FileLogger";

export enum LoggerType {
    CONSOLE = 'Console',
    FILE = 'File'
}

export class LoggerFactory {
    static createLogger(type: LoggerType, filePath?: string) {
        switch (type) {
            case LoggerType.CONSOLE:
                const consoleLogger = new ConsoleLogger();
                return consoleLogger;

            case LoggerType.FILE:
                if (!filePath) {
                    throw new Error("File path must be provided for FileLogger");
                }
                const fileLogger = new FileLogger(filePath);
                return fileLogger;

            default:
                throw new Error("Invalid logger type");
        }
    }
}