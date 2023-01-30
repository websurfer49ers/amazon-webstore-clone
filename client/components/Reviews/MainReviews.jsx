import React from "react";
import CustomerReviews from "./CustomerReviews.jsx";

function MainReviews(){
    return (
        <div className="mainReviewDiv">
            <div className="reviewsLeft">
                <CustomerReviews />
            </div>
            <div className="reviewsRight">

            </div>
        </div>
    )
}

export default MainReviews