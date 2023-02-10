import React from "react";
import { CustomerReviews, ReviewThisProduct } from "./CustomerReviews.jsx";
import { UserReviews } from "./UserReviews.jsx";
import { Sponsored } from "./Sponsored.jsx";

// Main DOM component for all review components
function MainReviews(props){
    return (
        <span className="mainReviewDiv" id="mainReviewsDiv">
            <div className="reviewsLeft">
                 <CustomerReviews productId={props.productId}/>
                <div className="partition"></div>
                <ReviewThisProduct />
            </div>
            <div className="reviewsRight">
                <UserReviews productId={props.productId}/>
            </div>
        </span>
    );
};

export default MainReviews;
