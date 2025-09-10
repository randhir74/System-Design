import { OffRoadVehicle } from "./OffRoadVehicle";
import { PassengerVehicle } from "./PassengerVehicle";
import { SportsVehicle } from "./SportsVehicle";

class Main {
    static main() {
        const passengerVehicle = new PassengerVehicle();
        passengerVehicle.drive();

        const sportsVehicle = new SportsVehicle();
        sportsVehicle.drive();

        const offRoadVehicle = new OffRoadVehicle();
        offRoadVehicle.drive();
    }
}

Main.main();