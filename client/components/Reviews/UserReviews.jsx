import React from "react";
import { Rate } from "./Rating";
import { Container, Rating } from "./RatingStyles";

export function UserReviews() {
    return (
        <div className="userReviewsMain">
            <div className="userReviewDisplay">
                <div className="topReviewsDiv">
                    <span className="topReviews">Top Reviews from the United States</span>
                </div>
                <Container>
                    <div className="userImageWrapper">
                        <img className="userImage" src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"></img>
                    </div>
                    <span className="userName">Amazon Customer</span>
                </Container>
                <Container>
                    <div className="userStars">
                        <Rate></Rate>
                    </div>
                    <div className="reviewTitle">
                        <span>This is the best product</span>
                    </div>
                </Container>
                <p className="dateReviewed">Reviewed in the United States on March 2, 2019</p>
                <p className="reviewContent">This product is great. This product is great. This product is great. This product is great. This product is great. This product is great. </p>
            </div>
        </div>
    )
}