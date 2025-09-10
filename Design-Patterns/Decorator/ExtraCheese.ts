import { BasePizza } from "./BasePizza";
import { ToppingDecorator } from "./ToppingDecorator";

export class ExtraCheese extends ToppingDecorator {
    private pizza: BasePizza;

    constructor(pizza: BasePizza) {
        super();
        this.pizza = pizza;
    }

    getCost(): number {
        return this.pizza.getCost() + 50;
    }
}