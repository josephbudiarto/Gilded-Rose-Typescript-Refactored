import { expect } from 'chai';
import { Conjured } from '../app/inventory';

describe('Conjured Inventory', () => {

    /**
     * Test constructor
     */
    it('should abide by the constructor limit', () => {
        const tome = new Conjured('Tome of fire', 5, -1);
        expect(tome.quality).to.equal(0);

        const wand = new Conjured('Wand', 5, 100);
        expect(wand.quality).to.equal(50);
    });

    /**
     * Test quality decrease
     */
    it('should degrade 2x faster than general inventory', () => {
        const wand = new Conjured('Wand', 1, 10);
        wand.updateQuality();
        expect(wand.sellIn).to.equal(0);
        expect(wand.quality).to.equal(8);
    });

    /**
     * Test quality decrease limit
     */
    it('should return quality 0', () => {
        const wand = new Conjured('Wand', -5, 1);
        wand.updateQuality();
        expect(wand.sellIn).to.equal(-6);
        expect(wand.quality).to.equal(0);
    });

    /**
     * Test low quality safe guard
     */
    it('should return quality 0', () => {
        const wand = new Conjured('Wand', -5, 1);
        wand.quality = -10;
        wand.updateQuality();
        expect(wand.sellIn).to.equal(-6);
        expect(wand.quality).to.equal(0);
    });

    /**
     * Test quality degradation past sellIn value
     */
    it('should degrade 4x faster', () => {
        const wand = new Conjured('Wand', -5, 25);
        wand.updateQuality();
        expect(wand.sellIn).to.equal(-6);
        expect(wand.quality).to.equal(21);
    });
});
