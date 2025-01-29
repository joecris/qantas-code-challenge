import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import HotelOffersPage from './page'
 
describe('HotelOffersPage', () => {
  it('renders HotelOffers component', () => {
    const { getByText } = render(<HotelOffersPage />) 
    
    expect(getByText('Select input')).toBeInTheDocument();
  })
})