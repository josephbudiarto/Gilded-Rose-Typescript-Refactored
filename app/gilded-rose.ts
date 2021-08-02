import { General, Aged, Conjured, BackStageTicket, Legendary } from './inventory';
import { Inventory } from "./util/helpers";

export class GildedRose {
    items: Inventory[];

    constructor(items: Inventory[] = []) {
        this.items = GildedRose._init(items);
    }

    private static _init(items: Inventory[]): Inventory[] {
        let inventory: Inventory[] = [];

        for (let item of items) {
            let product: Inventory;

            // Can definitely be refactored if not because of the goblin ...
            if (item.name.toLowerCase().includes('aged')) {
                product = new Aged(item.name, item.sellIn, item.quality);
            } else if (item.name.toLowerCase().includes('conjured')) {
                product = new Conjured(item.name, item.sellIn, item.quality);
            } else if (item.name.toLowerCase().includes('backstage passes')) {
                product = new BackStageTicket(item.name, item.sellIn, item.quality);
            } else if (item.name.toLowerCase().includes('sulfuras')) {
                product = new Legendary(item.name, item.sellIn, item.quality);
            } else {
                product = new General(item.name, item.sellIn, item.quality);
            }

            inventory.push(product);
        }

        return inventory;
    }

    updateQuality(): Inventory[] {
        for (let item of this.items) {
            item.updateQuality();
        }

        return this.items;
    }
}
