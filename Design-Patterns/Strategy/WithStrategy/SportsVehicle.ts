import { SpecialDrivingStrategy } from "./SpecialDrivingStrategy";
import { Vehicle } from "./Vehicle";

export class SportsVehicle extends Vehicle {
    constructor() {
        super(new SpecialDrivingStrategy());
    }
}