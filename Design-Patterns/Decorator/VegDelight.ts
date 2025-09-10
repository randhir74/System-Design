import { BasePizza } from "./BasePizza";

export class VegDelight extends BasePizza{
    getCost(): number {
        return 150;
    }
}