import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import HotelOffersHeader from './HotelOffersHeader'

describe('HotelOffersHeader', () => {
    test('test HotelOffersHeader description', () => {
        const sortOptions = [
            {label: 'Price high-low', value: 'priceHighToLow'},
            {label: 'Price low-high', value: 'priceLowToHigh'}
        ];
        const { getByText } = render(<HotelOffersHeader 
                                        location="Sydney" 
                                        totalResults={5} 
                                        sortLabel='Sort by' 
                                        sortOptions={sortOptions}
                                    />)
    
        const headerDescription = getByText('Sydney', {exact: false});
        expect(headerDescription.textContent).toEqual('5 hotels in Sydney.');
    })

    test('test HotelOffersHeader select input', async () => {
        const onSortingChange = jest.fn();
        const sortOptions = [
            {label: 'Price high-low', value: 'priceHighToLow'},
            {label: 'Price low-high', value: 'priceLowToHigh'}
        ];
        const { getByText, getByLabelText } = render(
            <HotelOffersHeader 
                onSortingChange={onSortingChange} 
                location="Sydney" 
                totalResults={5} 
                sortLabel='Sort by' 
                sortOptions={sortOptions}
            />)
    
        const selectLabel = getByText('Sort by');
        expect(selectLabel).toBeInTheDocument();

        const selectInput = getByLabelText('Sort by');
        expect(selectInput).toBeInTheDocument();

        expect(selectInput.value).toBe('priceHighToLow');
        expect(getByText('Price high-low')).toBeInTheDocument();

        fireEvent.change(selectInput, { target: { value: 'priceLowToHigh' }});
        expect(selectInput.value).toBe('priceLowToHigh');
        expect(getByText('Price low-high')).toBeInTheDocument();
        expect(onSortingChange).toHaveBeenCalledTimes(1);

        fireEvent.change(selectInput, { target: { value: 'priceHighToLow' }});
        expect(selectInput.value).toBe('priceHighToLow');
        expect(getByText('Price high-low')).toBeInTheDocument();
        expect(onSortingChange).toHaveBeenCalledTimes(2);
    })
})