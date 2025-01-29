"use client"

import { useState, useEffect } from "react";
import HotelOffersHeader from "../HotelOffersHeader/HotelOffersHeader"
import HotelOffersList from "../HotelOffersList/HotelOffersList";
import { getHotelOffers } from "@/lib/hotelOffers";

export default function HotelOffers() {
    const [allHotelOffers, setAllHotelOffers] = useState([]);

    const sortOptions = [
        {label: 'Price high-low', value: 'priceHighToLow'},
        {label: 'Price low-high', value: 'priceLowToHigh'}
    ];

    useEffect(() => {
        const initHotelOffers = getHotelOffers('priceHighToLow');
        setAllHotelOffers(initHotelOffers);
    }, [])

    function onSortingChange(event) {
        const hotelOffers = getHotelOffers(event.target.value);
        setAllHotelOffers(hotelOffers);
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
            <HotelOffersList hotelOffers={allHotelOffers.results} />
        </>
    )
}