import React from "react";
import { CustomerReviews, ReviewThisProduct } from "./CustomerReviews.jsx";
import { Container } from "./RatingStyles.jsx";
import { UserReviews } from "./UserReviews.jsx";

function MainReviews(){
    return (
        <span className="mainReviewDiv">
            <div className="reviewsLeft">
                <CustomerReviews />
                <div className="partition"></div>
                <ReviewThisProduct />
            </div>
            <div className="reviewsRight">
                <UserReviews></UserReviews>
            </div>
        </span>
    )
}

export default MainReviews