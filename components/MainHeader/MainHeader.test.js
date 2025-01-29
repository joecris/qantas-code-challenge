import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import MainHeader from './MainHeader'
 
describe('MainHeader', () => {
  it('renders MainHeader with Qantas logo', () => {
    const { getByAltText, getByTestId } = render(<MainHeader />) 
    
    expect(getByAltText('Qantas logo')).toBeInTheDocument();

    const homeLink = getByTestId('header-brand-logo-link-testid');
    expect(homeLink).toHaveAttribute('href', '/');
  })
})