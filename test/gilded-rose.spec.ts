import { expect } from 'chai';
import { GildedRose } from '../app/gilded-rose';
import { Aged, BackStageTicket, Conjured, General, Item, Legendary } from '../app/inventory';

describe('Gilded Rose', () => {

    /**
     * Test gilded rose constructor
     */
    it('should be empty', () => {
        const gildedRose = new GildedRose();
        expect(gildedRose.items).to.be.empty;
    });

    /**
     * Test gilded rose inventory categorization
     */
    it('should contain the correct object instances', () => {
        const items = [
            new Item("Aged Brie", 2, 0),
            new Item("Elixir of the Mongoose", 5, 7),
            new Item("Sulfuras, Hand of Ragnaros", 0, 80),
            new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
            new Item("Conjured Mana Cake", 3, 6)
        ];

        const gildedRose = new GildedRose(items);
        expect(gildedRose.items[0]).to.be.an.instanceof(Aged);
        expect(gildedRose.items[1]).to.be.an.instanceof(General);
        expect(gildedRose.items[2]).to.be.an.instanceof(Legendary);
        expect(gildedRose.items[3]).to.be.an.instanceof(BackStageTicket);
        expect(gildedRose.items[4]).to.be.an.instanceof(Conjured);
    });

    /**
     * Test gilded rose update quality function
     */
    it('should update quality + sellIn values correctly', () => {
        const items = [
            new Item("Aged Brie", 2, 0),
            new Item("Elixir of the Mongoose", 5, 7),
            new Item("Sulfuras, Hand of Ragnaros", 10, 55),
            new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
            new Item("Conjured Mana Cake", 3, 6)
        ];

        const gildedRose = new GildedRose(items);
        gildedRose.updateQuality();

        expect(gildedRose.items[0].sellIn).to.equal(1);
        expect(gildedRose.items[0].quality).to.equal(1);

        expect(gildedRose.items[1].sellIn).to.equal(4);
        expect(gildedRose.items[1].quality).to.equal(6);

        expect(gildedRose.items[2].sellIn).to.equal(0);
        expect(gildedRose.items[2].quality).to.equal(80);

        expect(gildedRose.items[3].sellIn).to.equal(14);
        expect(gildedRose.items[3].quality).to.equal(21);

        expect(gildedRose.items[4].sellIn).to.equal(2);
        expect(gildedRose.items[4].quality).to.equal(4);
    });

});
