import { BasePizza } from "./BasePizza";

export class Margherita extends BasePizza{
    getCost(): number {
        return 200;
    }
}