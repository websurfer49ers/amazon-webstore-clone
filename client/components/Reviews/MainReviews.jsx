import React from "react";
import { CustomerReviews, ReviewThisProduct } from "./CustomerReviews.jsx";
import { UserReviews } from "./UserReviews.jsx";



function MainReviews(props){
    return (
        <span className="mainReviewDiv">
            <div className="reviewsLeft">
                <CustomerReviews />
                <div className="partition"></div>
                <ReviewThisProduct />
                <div className="partitions"></div>
                <Sponsored productIdArr={props.productIdArr} />
            </div>
            <div className="reviewsRight">
                <UserReviews />
            </div>
        </span>
    );
};

export default MainReviews;