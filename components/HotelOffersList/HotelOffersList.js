import HotelOfferCard from '../HotelOfferCard/HotelOfferCard'
import styles from './HotelOffersList.module.scss'

export default function HotelOffersList({ hotelOffers }) {
    return (
        <div className={styles.hotelOffersList}>
            { hotelOffers?.length && hotelOffers.length > 0 && (
                hotelOffers.map(offer => <HotelOfferCard hotelOffer={offer} key={offer.id} />)
            )}
        </div>
    )
}