// Code MovieReviews Here
import React from 'react';

 const Review = ({ byHow, headline, short_preview}) => {
    return (
        <div className="review">
            <h3>{headline}</h3>
            <h4>By:{byHow}</h4>
            <p>{short_preview}</p>
        </div>
    )
}
 const MovieReviews = ({ reviews }) => {
    return (
        <div className="review-list">
            <ul>
            {reviews.map(review =>
                <div className="review">
                    <h3>{review.headline}</h3>
                    <h4>By: {review.byHow}</h4>
                    <p>{review.short_preview}</p>
                </div>

        )
            }
            </ul>
        </div>
    )
};
 MovieReviews.defaultProps = {
    reviews: []
}

  export default MovieReviews;
