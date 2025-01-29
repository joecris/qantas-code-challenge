import { getHotelOfferDisplayName, getHotelOfferDisplayAddress, getHotelOfferDisplayPrice } from "./utils";

describe('utils', () => {
    test('getHotelOfferDisplayName', () => {
        const longName = 'A Very long hotel name that will be shortened'
        const expectedLongNameOutput = 'A Very long hotel name that will...'
        expect(getHotelOfferDisplayName(longName)).toBe(expectedLongNameOutput);

        const shortName = 'A Hotel'
        const expectedShortNameOutput = 'A Hotel'
        expect(getHotelOfferDisplayName(shortName)).toBe(expectedShortNameOutput);

        expect(getHotelOfferDisplayName('')).toBe('');
    })

    test('getHotelOfferDisplayAddress', () => {
        const inputAddress = ['Pitt St', 'Sydney', 'NSW'];

        expect(getHotelOfferDisplayAddress(inputAddress)).toBe(inputAddress.join(' '));
        expect(getHotelOfferDisplayAddress(['A'])).toBe('A');
        expect(getHotelOfferDisplayAddress([])).toBe('');

    })

    test('getHotelOfferDisplayPrice', () => {
        expect(getHotelOfferDisplayPrice(100.000000)).toBe(100)
        expect(getHotelOfferDisplayPrice(100.0001)).toBe(100)
        expect(getHotelOfferDisplayPrice(0.0001)).toBe(0)
        expect(getHotelOfferDisplayPrice(100)).toBe(100)
    })
})