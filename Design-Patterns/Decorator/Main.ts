import { ExtraCheese } from "./ExtraCheese";
import { Margherita } from "./Margherita";
import { MushRoom } from "./MushRoom";
import { VegDelight } from "./VegDelight";

class Main {

    static run(): void {
        const extraCheeseOverMargherita = new ExtraCheese(new Margherita());
        console.log("Extra cheese over margherita cost: ",extraCheeseOverMargherita.getCost());

        const margherita = new Margherita();
        console.log("Margherita cost: ",margherita.getCost());

        const extraCheeseOverMargheritaOverVegDelight = new ExtraCheese(new MushRoom(new VegDelight()));
        console.log("Extra cheese over mushroom over VegDelight cost: ",extraCheeseOverMargheritaOverVegDelight.getCost());
    }
}

Main.run();