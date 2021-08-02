import { Item } from './item'
import {
    HIGH_QUALITY_LIMIT,
    LOW_QUALITY_LIMIT,
    QUALITY_RATE
} from "../util/helpers";

export default class Conjured extends Item {

    constructor(name: string, sellIn: number, quality: number) {
        quality = Math.min(Math.max(quality, LOW_QUALITY_LIMIT), HIGH_QUALITY_LIMIT);
        super(name, sellIn, quality);
    }


    updateQuality(): number {

        this.sellIn -= 1;

        if (this.quality > 0) {
            this.quality -= (this.sellIn < 0)
                ? (QUALITY_RATE * 2 * 2) // twice as much as general inventory
                : (QUALITY_RATE * 2);
        }

        if (this.quality < 0)  {
            this.quality = 0;
        }

        return this.quality;
    }
}
