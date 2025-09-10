import { PhoneDisplay } from "./PhoneDisplay";
import { TVDisplay } from "./TVDisplay";
import { WeatherStation } from "./WeatherStation";

class WeatherApp {
    // private temperature: number;
    private weatherStation: WeatherStation = new WeatherStation();

    run(): void {
        const phoneDisplay = new PhoneDisplay();
        this.weatherStation.addObserver(phoneDisplay);

        const tvDisplay = new TVDisplay();
        this.weatherStation.addObserver(tvDisplay);

        this.weatherStation.setTemperature(30);
        this.weatherStation.setTemperature(35);

        this.weatherStation.removeObserver(tvDisplay);

        this.weatherStation.setTemperature(40);
    }
}

const app = new WeatherApp();
app.run();