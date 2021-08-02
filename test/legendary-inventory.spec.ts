import { expect } from 'chai';
import { Legendary } from '../app/inventory';

describe('Legendary Inventory', () => {

    /**
     * Test constructor
     */
    it('should abide by the constructor limit', () => {
        const ragnaros = new Legendary('Sulfuras, Hand of Ragnaros', 100, -1);
        expect(ragnaros.sellIn).to.equal(0);
        expect(ragnaros.quality).to.equal(80);

        const helios = new Legendary('Sulfuras, Hand of Helios', 100, 100);
        expect(helios.sellIn).to.equal(0);
        expect(helios.quality).to.equal(80);
    });

    /**
     * Test degradation
     */
    it('should NOT degrade', () => {
        const ragnaros = new Legendary('Sulfuras, Hand of Ragnaros', 100, 10);
        ragnaros.updateQuality();
        expect(ragnaros.sellIn).to.equal(0);
        expect(ragnaros.quality).to.equal(80);
    });
});
