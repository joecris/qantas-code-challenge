"use client"

import styles from './HotelOffersHeader.module.scss'

export default function HotelOffersHeader({ 
    location = 'Sydney', 
    totalResults = 0, 
    onSortingChange, 
    sortLabel = 'Sort by', 
    sortOptions = []
}) {
    return (
        <div className={styles.hotelOffersHeader}>
            <div className={styles.hotelOffersHeaderSubtitle}>
                <p>{totalResults} <span className={styles.hotelOffersHeaderSubtitleDescription}>hotels in</span> {location}.</p>
            </div>
            {sortOptions && sortOptions.length >  0 && (
                <div className={styles.hotelOffersHeaderSortInput}>
                    <label htmlFor="hotel-offers-sort">{sortLabel}</label>
                    <select name="hotel-offers-sort" id="hotel-offers-sort" onChange={onSortingChange}>
                        {sortOptions.map(option => (
                            <option value={option.value} key={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
            )}
        </div>
    )
}