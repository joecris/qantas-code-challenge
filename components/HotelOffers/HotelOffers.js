"use client"

import HotelOffersHeader from "../HotelOffersHeader/HotelOffersHeader"
import HotelOffersList from "../HotelOffersList/HotelOffersList"
import { getHotelOffers } from "@/lib/hotelOffers";

export default function HotelOffers() {
    const sortOptions = [
        {label: 'Price high-low', value: 'priceHighToLow'},
        {label: 'Price low-high', value: 'priceLowToHigh'}
    ];

    const allHotelOffers = getHotelOffers();

    function onSortingChange(event) {
        console.log(event.target.value);
    }

    return (
        <>
            <HotelOffersHeader 
                location="Sydney" 
                totalResults={allHotelOffers?.results?.length}
                onSortingChange={onSortingChange}
                sortLabel="Sort by"
                sortOptions={sortOptions}
            />
            <HotelOffersList hotelOffers={allHotelOffers?.results} />
        </>
    )
}