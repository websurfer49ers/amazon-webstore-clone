import React from "react";
import { CustomerReviews, ReviewThisProduct } from "./CustomerReviews.jsx";


function MainReviews(){
    return (
        <div className="mainReviewDiv">
            <div className="reviewsLeft">
                <CustomerReviews />
                <div className="partition"></div>
                <ReviewThisProduct />
            </div>
            <div className="reviewsRight">

            </div>
        </div>
    )
}

export default MainReviews