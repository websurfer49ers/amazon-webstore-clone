import React from "react";
import { CustomerReviews, ReviewThisProduct } from "./CustomerReviews.jsx";
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
                <UserReviews />
            </div>
        </span>
    );
};

export default MainReviews;