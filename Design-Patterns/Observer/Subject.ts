import { Observer } from "./Observer";

export interface Subject {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(data: any): void;
}