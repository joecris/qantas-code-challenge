import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import HotelOffersList from './HotelOffersList'

jest.mock('../HotelOfferCard/HotelOfferCard', () => () => <div>HotelOfferCardComponent</div>)

describe('HotelOffersList', () => {
    test('test renders HotelOffersCard component correct number of times', () => {
        const offers = [
            {id: 1},
            {id: 2},
            {id: 3},
        ]
        
        const { getAllByText } = render(<HotelOffersList hotelOffers={offers} />);

        expect(getAllByText('HotelOfferCardComponent').length).toBe(3);
    })

    test('test does not render HotelOffersCard component if no hotelOffers received', () => {
        const offers = []
        
        const { queryAllByAltText } = render(<HotelOffersList hotelOffers={offers} />);

        expect(queryAllByAltText('HotelOfferCardComponent').length).toBe(0);
    })
})