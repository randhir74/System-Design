import { BasePizza } from "./BasePizza";
import { ToppingDecorator } from "./ToppingDecorator";

export class MushRoom extends ToppingDecorator {
    private pizza: BasePizza;
    
    constructor(pizza: BasePizza) {
        super();
        this.pizza = pizza;
    }

    getCost(): number {
        return this.pizza.getCost() + 70;
    }
}