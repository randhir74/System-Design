import { DrivingStrategy } from "./DrivingStrategy";

export class Vehicle {
    driveObject : DrivingStrategy;
    constructor(driveObject: DrivingStrategy) {
        this.driveObject = driveObject;
    }

    drive() {
        this.driveObject.drive();
    }
}