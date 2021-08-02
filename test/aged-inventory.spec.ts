import { expect } from 'chai';
import { Aged } from '../app/inventory';

describe('Aged Inventory', () => {

    /**
     * Test constructor
     */
    it('should abide by the constructor limit', () => {
        const bishopCheese = new Aged('Stinky Bishop', 100, -1);
        expect(bishopCheese.quality).to.equal(0);

        const camembert = new Aged('Camembert', 100, 100);
        expect(camembert.quality).to.equal(50);

        const cheese = new Aged('Cheese', 100, 10);
        expect(cheese.quality).to.equal(10);
    });

    /**
     * Test quality increase
     */
    it('should increase in quality', () => {
        const cheese = new Aged('Cheese', 1, -1);
        cheese.updateQuality();
        expect(cheese.sellIn).to.equal(0);
        expect(cheese.quality).to.equal(1);
    });

    /**
     * Test quality increase limit
     */
    it('should return quality 50', () => {
        const cheese = new Aged('Cheese', 1, 49);
        cheese.updateQuality();
        expect(cheese.sellIn).to.equal(0);
        expect(cheese.quality).to.equal(50);
    });

    /**
     * Test high quality safe guard
     */
    it('should return quality 50', () => {
        const cheese = new Aged('Cheese', 1, 49);
        cheese.quality = 100;
        cheese.updateQuality();
        expect(cheese.sellIn).to.equal(0);
        expect(cheese.quality).to.equal(50);
    });

    /**
     * Test quality increase past sellIn value
     */
    it('should mature twice as fast', () => {
        const item = new Aged('general item', 0, 25);
        item.updateQuality();
        expect(item.sellIn).to.equal(-1);
        expect(item.quality).to.equal(27);
    });
});
