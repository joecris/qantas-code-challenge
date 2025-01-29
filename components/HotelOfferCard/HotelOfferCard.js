import styles from './HotelOfferCard.module.scss'
import { 
    getHotelOfferDisplayName,
    getHotelOfferDisplayAddress,
    getHotelOfferDisplayPrice
 } from '@/lib/utils'
import RatingsIcon from '../RatingsIcon/RatingsIcon'

export default function HotelOfferCard({ hotelOffer }) {

    const { property, offer } = hotelOffer;
    const { rating } = property;

    if (!property || !offer) return;

    // add fallback background if no image
    let cardImageBackground = {
        backgroundColor: '#ccc'
    }

    if (property?.previewImage?.url) cardImageBackground = {backgroundImage: `url(${property.previewImage.url})`}

    return (
        <div className={styles.card}>
            <div className={styles.cardImage} style={cardImageBackground}>
                {offer?.promotion?.title && <div className={styles.cardImageBadge}>
                    {offer.promotion.title}
                </div>}
            </div>
            <div className={styles.cardDetails}>
                <div className={styles.cardDetailsInfo}>
                    <h2 className={styles.cardDetailsHotelName}>
                        {getHotelOfferDisplayName(property.title)}
                        {rating?.ratingValue && rating?.ratingType &&
                        <span>
                                <RatingsIcon 
                                    value={rating.ratingValue} 
                                    type={rating.ratingType} 
                                />
                        </span>}
                    </h2>
                    <p className={styles.cardDetailsHotelAddress}>{getHotelOfferDisplayAddress(property.address)}</p>
                    <p className={styles.cardDetailsOfferName}>{offer.name}</p>
                    {offer?.cancellationOption?.cancellationType && <p className={styles.cardDetailsCancellationOption}>
                        {offer.cancellationOption.cancellationType === 'FREE_CANCELLATION' ? 'Free cancellation' : ''}
                    </p>}
                </div>
                <div className={styles.cardDetailsPrice}>
                    {offer.displayPrice.currency && <p className={styles.cardDetailsPriceDescription}>
                        {`1 night total (${offer.displayPrice.currency})`}
                    </p>}
                    {offer.displayPrice.amount && <h2 className={styles.cardDetailsPriceAmount}>
                        <span className={styles.cardDetailsPriceCurrency}>$</span>
                        {getHotelOfferDisplayPrice(offer.displayPrice.amount)}
                    </h2>}
                    {offer?.savings?.amount && (<p className={styles.cardDetailsPriceSavings}>
                        {`Save $${getHotelOfferDisplayPrice(offer.savings.amount)}~`}
                    </p>)}
                </div>
            </div>
        </div>
    )
}