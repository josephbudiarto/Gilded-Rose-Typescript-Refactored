import { Item } from './item';
import {
    SULFURAS_QUALITY
} from "../util/helpers";

export default class Legendary extends Item {

    constructor(name: string, sellIn: number, quality: number) {
        sellIn = 0;
        quality = SULFURAS_QUALITY;
        super(name, sellIn, quality);
    }

    updateQuality (): void {
        // I am legendary I never degrade!
    }
}
