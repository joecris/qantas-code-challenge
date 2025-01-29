import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import HotelOffersPage from './page'

jest.mock('../components/HotelOffers/HotelOffers', () => () => <div>HotelOffersComponent</div>)
 
describe('HotelOffersPage', () => {
  it('renders HotelOffers component', () => {
    const { getByText } = render(<HotelOffersPage />) 
    
    expect(getByText('HotelOffersComponent')).toBeInTheDocument();
  })
})