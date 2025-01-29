import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import HotelOfferCard from './HotelOfferCard'
import { getHotelOfferDisplayName, getHotelOfferDisplayAddress, getHotelOfferDisplayPrice } from '@/lib/utils'

describe(('HotelOfferCard'), () => {
    test('test HotelOfferCard renders correctly on correctly formed props', () => {
        const hotelOffer = {
            "id": "cxd650nuyo",
            "property": {
              "propertyId": "P107801",
              "title": "Courtyard by Marriott Sydney-North Ryde",
              "address": [
                "7-11 Talavera Rd",
                "North Ryde"
              ],
              "previewImage": {
                "url": "https://unsplash.it/145/125/?random",
                "caption": "Image of Courtyard by Marriott Sydney-North Ryde",
                "imageType": "PRIMARY"
              },
              "rating": {
                "ratingValue": 4.5,
                "ratingType": "self"
              }
            },
            "offer": {
              "promotion": {
                "title": "Exclusive Deal",
                "type": "MEMBER"
              },
              "name": "Deluxe Balcony Room",
              "displayPrice": {
                "amount": 329.000000000,
                "currency": "AUD"
              },
              "savings": {
                "amount": 30.000000000,
                "currency": "AUD"
              },
              "cancellationOption": {
                "cancellationType": "NOT_REFUNDABLE"
              }
            }
          }

        const { getByText, getByTestId } = render(<HotelOfferCard hotelOffer={hotelOffer} />)

        const cardImg = getByTestId('cardImage-data-testid');
        expect(cardImg).toHaveAttribute('style', `background-image: url(${hotelOffer.property.previewImage.url});`);
        expect(getByText(hotelOffer.offer.promotion.title)).toBeInTheDocument();

        expect(getByText(getHotelOfferDisplayName(hotelOffer.property.title))).toBeInTheDocument();
        expect(getByText(getHotelOfferDisplayAddress(hotelOffer.property.address))).toBeInTheDocument();
        expect(getByText(hotelOffer.offer.name)).toBeInTheDocument();

        expect(getByText(`Save $${getHotelOfferDisplayPrice(hotelOffer.offer.savings.amount)}~`)).toBeInTheDocument();
        expect(getByText(`1 night total (${hotelOffer.offer.displayPrice.currency})`)).toBeInTheDocument();

        const amountText = getByText(getHotelOfferDisplayPrice(hotelOffer.offer.displayPrice.amount), {exact: false});
        expect(amountText.textContent).toEqual(`$${getHotelOfferDisplayPrice(hotelOffer.offer.displayPrice.amount)}`);
    })
})