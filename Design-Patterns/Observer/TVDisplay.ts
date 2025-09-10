import { Observer } from "./Observer";

export class TVDisplay implements Observer {
    private temperature: string;

    constructor() {
        this.temperature = "";
    }   
    update(temperature: string): void {
        this.temperature = temperature;
        this.display();
    }

    display(): void {
        console.log("TV Display: Displaying temperature - " + this.temperature);
    }
}