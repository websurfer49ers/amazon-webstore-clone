import React from "react";
import { Rate, PercentageBar } from "./Rating.jsx"
import { Container } from "./RatingStyles.jsx";


function CustomerReviews(){
    return (
        <span className="customerReviews">
            <div className="customerReviewDiv">
                <h2>Customer Reviews</h2>
                <Rate className="calculatedStars"/>
                <PercentageBar bgcolor="rgb(255, 153, 0)" progress='30'  height={15} />
                <PercentageBar bgcolor="rgb(255, 153, 0)" progress='60'  height={15} />
                <PercentageBar bgcolor="rgb(255, 153, 0)" progress='50'  height={15} />
                <PercentageBar bgcolor="rgb(255, 153, 0)" progress='85'  height={15} />
                <PercentageBar bgcolor="rgb(255, 153, 0)" progress='95'  height={15} />
            </div>
        </span>
    )
}

export default CustomerReviews