import { Observer } from "./Observer";

export class PhoneDisplay implements Observer{
    private temperature: string;

    constructor() {
        this.temperature = "";
    }   
    update(temperature: string): void {
        this.temperature = temperature;
        this.display();
    }

    display(): void {
        console.log("Phone Display: Displaying temperature - " + this.temperature);
    }
}