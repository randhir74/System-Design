import { LoggerFactory, LoggerType } from "./LoggerFactory";

const consoleLogger = LoggerFactory.createLogger(LoggerType.CONSOLE);
consoleLogger.log("This is a console log message.");

const fileLogger = LoggerFactory.createLogger(LoggerType.FILE, "app.log");
fileLogger.log("This is a file log message.");

