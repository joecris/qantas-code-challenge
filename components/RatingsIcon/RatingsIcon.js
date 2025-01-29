import styles from './RatingsIcon.module.scss'

function WholeStarIcon() {
    return (
        <svg className={styles.ratingsIcon} viewBox="0 0 24 24" title="star" fill="currentcolor" data-testid="star-ratings-whole-icon-testid">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
        </svg>
    )
}

function HalfStarIcon() {
    return (
        <svg className={styles.ratingsIcon} viewBox="0 0 24 24" title="starHalf" fill="currentcolor" data-testid="star-ratings-half-icon-testid">
            <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
        </svg>
    )
}

function WholeStarGreyIcon() {
    return (
        <svg className={styles.ratingsIcon} viewBox="0 0 24 24" title="starBorder" fill="currentcolor" data-testid="star-ratings-whole-grey-icon-testid">
            <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
        </svg>
    )
}

function WholeCircleIcon() {
    return (
        <svg className={styles.ratingsIcon} viewBox="0 0 24 24" title="circle" fill="currentcolor" data-testid="circle-ratings-whole-icon-testid">
            <path d="M12,3a9,9,0,1,0,9,9A9,9,0,0,0,12,3Z"></path>
        </svg>
    )
}

function HalfCircleIcon() {
    return (
        <svg className={styles.ratingsIcon} viewBox="0 0 24 24" title="circleHalf" fill="currentcolor" data-testid="circle-ratings-half-icon-testid">
            <path d="M12,3a9,9,0,1,0,9,9A9,9,0,0,0,12,3Zm0,16.14V4.86a7.14,7.14,0,0,1,0,14.28Z"></path>
        </svg>
    )
}

function WholeCircleGreyIcon() {
    return (
        <svg className={styles.ratingsIcon} viewBox="0 0 24 24" title="circleBorder" fill="currentcolor" data-testid="circle-ratings-whole-grey-icon-testid">
            <path d="M12,3a9,9,0,1,0,9,9A9,9,0,0,0,12,3Zm0,16.2A7.2,7.2,0,1,1,19.2,12,7.21,7.21,0,0,1,12,19.2Z"></path>
        </svg>
    )
}

export default function RatingsIcon({ value, type }) {
    
    if (value < 0 || value > 5) return '';

    if (type != 'self' && type != 'star') return '';

    const content = [];

    // check if ratings has half rating
    const hasHalfRating = value % 1 === 0 ? false : true;
    let wholeRatings = value;

    if (hasHalfRating) wholeRatings = wholeRatings - 0.5;

    let numGreyIcons = 5 - wholeRatings;
    if (hasHalfRating) numGreyIcons--;

    // Add whole ratings
    for(let i=0; i<wholeRatings; i++) {
        if (type === 'star') {
            content.push(<WholeStarIcon key={`${i}-star-rate`}/>)
        } else {
            content.push(<WholeCircleIcon key={`${i}-circle-rate`}/>)
        }
    }

    // Add half ratings
    if (hasHalfRating) {
        if (type === 'star') {
            content.push(<HalfStarIcon key='star-half-rate'/>)
        } else {
            content.push(<HalfCircleIcon key='circle-half-rate'/>)
        }
    }

    // Add grey icons
    for(let i=0; i<numGreyIcons; i++) {
        if (type === 'star') {
            content.push(<WholeStarGreyIcon key={`${i}-star-grey`}/>)
        } else {
            content.push(<WholeCircleGreyIcon key={`${i}-circle-grey`}/>)
        }
    }

    return (
        <div className={styles.ratingsContainer}>
            {content}
        </div>
    )
}