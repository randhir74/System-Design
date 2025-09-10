import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class WeatherStation implements Subject {
    private observers: Observer[] = [];
    private temperature: number = 0;

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(data: any): void {
        this.observers.forEach(observer => observer.update(data));
    }

    setTemperature(temp: number): void {
        console.log(`WeatherStation: New temperature is ${temp}`);
        this.temperature = temp;
        this.notifyObservers(this.temperature);
    }
}