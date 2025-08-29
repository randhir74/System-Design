import { ILogger } from "./ILogger";
import * as fs from 'fs';

export class FileLogger implements ILogger{
    private readonly filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    log(message: string): void {
        // Simulate logging to a file by printing to the console
        // console.log(`File : ${message}`);
        fs.appendFileSync(this.filePath, `File : ${message}\n`);
    }
}