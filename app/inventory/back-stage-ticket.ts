import { Item } from './item'
import {
    HIGH_QUALITY_LIMIT,
    LOW_QUALITY_LIMIT,
    QUALITY_RATE
} from "../util/helpers";

export default class BackStageTicket extends Item {

    constructor(name: string, sellIn: number, quality: number) {
        quality = Math.min(Math.max(quality, LOW_QUALITY_LIMIT), HIGH_QUALITY_LIMIT);
        super(name, sellIn, quality);
    }

    updateQuality(): number {

        this.sellIn -= 1;

        if (this.sellIn < 0) {
            this.quality = 0;
            return this.quality;
        }

        this.quality += QUALITY_RATE;

        if (this.sellIn < 11) {
            this.quality += QUALITY_RATE;
        }

        if (this.sellIn < 6) {
            this.quality += QUALITY_RATE;
        }

        if (this.quality > HIGH_QUALITY_LIMIT) {
            this.quality = HIGH_QUALITY_LIMIT;
        }

        return this.quality;
    }
}
