import { BasePizza } from "./BasePizza";

export class FarmHouse extends BasePizza {
    getCost(): number {
        return 250;
    }
}