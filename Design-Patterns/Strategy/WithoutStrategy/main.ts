import { OffRoadVehicle } from "./OffRoadVehicle";
import { PassengerVehicle } from "./PassengerVehicle";

class Main {
    static run() {
        const offRoadVehicle = new PassengerVehicle();
        offRoadVehicle.drive();
    }
}

Main.run();