import { Item } from './item'
import {
    HIGH_QUALITY_LIMIT,
    LOW_QUALITY_LIMIT,
    QUALITY_RATE
} from "../util/helpers";

export default class Aged extends Item {

    constructor(name: string, sellIn: number, quality: number) {
        quality = Math.min(Math.max(quality, LOW_QUALITY_LIMIT), HIGH_QUALITY_LIMIT);
        super(name, sellIn, quality);
    }

    updateQuality(): number {

        this.sellIn -= 1;

        if (this.quality < HIGH_QUALITY_LIMIT) {
            this.quality += (this.sellIn < 0)
                ? (QUALITY_RATE * 2)
                : QUALITY_RATE;
        }

        if (this.quality > HIGH_QUALITY_LIMIT)  {
            this.quality = HIGH_QUALITY_LIMIT;
        }

        return this.quality;
    }
}
