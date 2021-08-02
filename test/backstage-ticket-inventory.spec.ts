import { expect } from 'chai';
import { BackStageTicket } from '../app/inventory';

describe('BackStageTicket Inventory', () => {

    /**
     * Test constructor
     */
    it('should abide by the constructor limit', () => {
        const low = new BackStageTicket('Backstage passes to a bad concert', 100, -1);
        expect(low.quality).to.equal(0);

        const good = new BackStageTicket('Backstage passes to a good concert', 100, 100);
        expect(good.quality).to.equal(50);
    });

    /**
     * Test quality increase
     */
    it('should increase in quality', () => {
        const good = new BackStageTicket('Backstage passes to a good concert', 20, 30);
        good.updateQuality();
        expect(good.sellIn).to.equal(19);
        expect(good.quality).to.equal(31);
    });

    /**
     * Test quality increase 2x
     */
    it('should increase in quality 2x', () => {
        const ticket = new BackStageTicket('Backstage passes to a good concert', 10, 10);
        ticket.updateQuality();
        expect(ticket.sellIn).to.equal(9);
        expect(ticket.quality).to.equal(12);
    });

    /**
     * Test quality increase 3x
     */
    it('should increase in quality 3x', () => {
        const ticket = new BackStageTicket('Backstage passes to a good concert', 5, 10);
        ticket.updateQuality();
        expect(ticket.sellIn).to.equal(4);
        expect(ticket.quality).to.equal(13);
    });

    /**
     * Test quality increase limit
     */
    it('should return quality 50', () => {
        const ticket = new BackStageTicket('Backstage passes to a good concert', 5, 49);
        ticket.updateQuality();
        expect(ticket.sellIn).to.equal(4);
        expect(ticket.quality).to.equal(50);
    });

    /**
     * Test quality increase past sellIn value
     */
    it('should mature twice as fast', () => {
        const ticket = new BackStageTicket('Backstage passes to a good concert', 0, 49);
        ticket.updateQuality();
        expect(ticket.sellIn).to.equal(-1);
        expect(ticket.quality).to.equal(0);
    });
});
