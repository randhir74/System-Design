import { SpecialDrivingStrategy } from "./SpecialDrivingStrategy";
import { Vehicle } from "./Vehicle";

export class OffRoadVehicle extends Vehicle {
    constructor() {
        const specialDrivingStrategy = new SpecialDrivingStrategy();
        super(specialDrivingStrategy);
    }
}