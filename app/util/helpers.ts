// export enum Types {
//     GENERAL,
//     TICKET,
//     AGED,
//     CONJURED,
//     LEGENDARY
// }
// export type TYPE = Types.GENERAL | Types.TICKET | Types.AGED | Types.CONJURED | Types.LEGENDARY;
export const QUALITY_RATE: number = 1;
export const LOW_QUALITY_LIMIT: number = 0;
export const HIGH_QUALITY_LIMIT: number = 50;
export const SULFURAS_QUALITY: number = 80;
export interface Inventory {
    name: string,
    quality: number,
    sellIn: number,
    updateQuality: () => void,
}
