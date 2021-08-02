import { expect } from 'chai';
import { General } from '../app/inventory';

describe('General Inventory', () => {

    /**
     * Test constructor
     */
    it('should abide by the constructor limit', () => {
        const boots = new General('Traveler\'s boots', 100, -1);
        expect(boots.quality).to.equal(0);

        const sword = new General('Knight\'s sword', 100, 100);
        expect(sword.quality).to.equal(50);
    });

    /**
     * Test degradation
     */
    it('should degrade quality by 1', () => {
        const item = new General('general item', 1, 50);
        item.updateQuality();
        expect(item.quality).to.equal(49);
    });

    /**
     * Test degradation limit
     */
    it('should never fall below 0', () => {
        const item = new General('general item', 0, 0);
        item.updateQuality();
        expect(item.sellIn).to.equal(-1);
        expect(item.quality).to.equal(0);
    });

    /**
     * Test degradation limit safe guard
     */
    it('should never fall below 0', () => {
        const item = new General('general item', 0, 0);
        item.quality = -1;
        item.updateQuality();
        expect(item.sellIn).to.equal(-1);
        expect(item.quality).to.equal(0);
    });

    /**
     * Test degradation past sellIn value
     */
    it('should degrade twice as fast', () => {
        const item = new General('general item', 0, 10);
        item.updateQuality();
        expect(item.sellIn).to.equal(-1);
        expect(item.quality).to.equal(8);
    });
});
