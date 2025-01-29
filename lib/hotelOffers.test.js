import { getHotelOffers, ALL_OFFERS } from "./hotelOffers";

describe('getHotelOffers', () => {
    test('test getHotelOffers if sorted by default sorting', () => {
        const allOffers = getHotelOffers();

        expect(allOffers.results.length).toBe(5);
    })

    test('test getHotelOffers low to high sorting', () => {
        const allOffers = getHotelOffers('priceLowToHigh');

        const expectedOutput = ALL_OFFERS.results.sort((hotel1, hotel2) => hotel1.offer.displayPrice.amount - hotel2.offer.displayPrice.amount)

        expect(allOffers.results.length).toBe(expectedOutput.length);

        allOffers.results.forEach((val, index) => {
            expect(val.id).toBe(expectedOutput[index].id);
        })
    })

    test('test getHotelOffers high to low sorting', () => {
        const allOffers = getHotelOffers('priceHighToLow');

        const expectedOutput = ALL_OFFERS.results.sort((hotel1, hotel2) => hotel2.offer.displayPrice.amount - hotel1.offer.displayPrice.amount)

        expect(allOffers.results.length).toBe(expectedOutput.length);

        allOffers.results.forEach((val, index) => {
            expect(val.id).toBe(expectedOutput[index].id);
        })
    })
})