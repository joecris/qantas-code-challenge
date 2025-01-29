import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import HotelOffers from './HotelOffers'

jest.mock('../HotelOffersHeader/HotelOffersHeader', () => () => <div>HotelOffersHeaderComponent</div>)
jest.mock('../HotelOffersList/HotelOffersList', () => () => <div>HotelOffersListComponent</div>)

describe(('HotelOffers'), () => {
    test('test rendering of child components', () => {
        const { getByText } = render(<HotelOffers />)
        expect(getByText('HotelOffersHeaderComponent')).toBeInTheDocument();
        expect(getByText('HotelOffersListComponent')).toBeInTheDocument();
    })
})