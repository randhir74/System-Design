import { NormalDrivingStrategy } from "./NormalDrivingStrategy";
import { Vehicle } from "./Vehicle";

export class PassengerVehicle extends Vehicle {
    constructor() {
        const normalDrivingStrategy = new NormalDrivingStrategy();
        super(normalDrivingStrategy);
    }
}