import React from "react";
import { Rate } from "./Rating";
import { Container, Rating } from "./RatingStyles";

export function UserReviews() {
    return (
        <div className="userReviewsMain">
            <div className="userReviewDisplay">
                <h4>Top Reviews from the United States</h4>
                <Container>
                    <div>USER_IMAGE</div>
                    <h6>Amazon Customer</h6>
                </Container>
                <Container>
                    <Rate className="userStars"></Rate>
                    <h6 className="reviewTitle">This is the best product</h6>
                </Container>
                <p className="dateReviewed">Reviewed in the United States on March 2, 2019</p>
                <p className="reviewContent">This product is great. This product is great. This product is great. This product is great. This product is great. This product is great. </p>
            </div>
        </div>
    )
}