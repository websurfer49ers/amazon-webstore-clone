import React from "react";
import { Rate, PercentageBar } from "./Rating.jsx"


function CustomerReviews(){
    return (
        <div className="customerReviewDiv">
            <div>
                <Rate />
                <PercentageBar bgcolor="rgb(255, 153, 0)" progress='30'  height={15} />
                <PercentageBar bgcolor="rgb(255, 153, 0)" progress='60'  height={15} />
                <PercentageBar bgcolor="rgb(255, 153, 0)" progress='50'  height={15} />
                <PercentageBar bgcolor="rgb(255, 153, 0)" progress='85'  height={15} />
                <PercentageBar bgcolor="rgb(255, 153, 0)" progress='95'  height={15} />
            </div>
        </div>
    )
}

export default CustomerReviews