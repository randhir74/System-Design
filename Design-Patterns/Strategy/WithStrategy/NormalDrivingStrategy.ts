import { DrivingStrategy } from "./DrivingStrategy";

export class NormalDrivingStrategy implements DrivingStrategy{
    drive() {
        console.log("Normal driving strategy");
    }
}