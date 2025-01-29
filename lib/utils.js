const HOTEL_NAME_DISPLAY_MAX_LENGTH = 32;

export function getHotelOfferDisplayName(hotelName) {
    if (hotelName && hotelName.length > HOTEL_NAME_DISPLAY_MAX_LENGTH) {
        return `${hotelName.substring(0, 32)}...`
    }

    return hotelName;
}

export function getHotelOfferDisplayAddress(addressArray) {
    if (!addressArray || addressArray.length < 1) {
        return '';
    }

    return addressArray.join(' ');
}

export function getHotelOfferDisplayPrice(amount) {
    return parseInt(amount);
}