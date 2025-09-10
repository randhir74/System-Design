import { DrivingStrategy } from "./DrivingStrategy";

export class SpecialDrivingStrategy implements DrivingStrategy{
    drive() {
        console.log("Special driving strategy");
    }
}