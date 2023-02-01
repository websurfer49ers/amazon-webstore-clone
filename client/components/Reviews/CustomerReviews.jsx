import React from "react";
import { Rate, PercentageBar } from "./Rating.jsx"
import { Container } from "./RatingStyles.jsx";


export function CustomerReviews() {
    return (
        <span className="customerReviews">
            <div className="customerReviewDiv">
                <h2 className="reviewText">Customer reviews</h2>
                <Container>
                    <Rate className="calculatedStars"/>
                    <span className="starHolder">4.6 out of 5</span>
                </Container>
                <span className="globalRatings">
                    4 global ratings
                </span>
                <Container>
                    <p className="barText">5 star</p>
                    <PercentageBar bgcolor="rgb(255, 153, 0)" progress='55'  height={15} />
                    <p className="barText">55%</p>
                </Container>
                <Container>
                    <p className="barText">4 star</p>
                    <PercentageBar bgcolor="rgb(255, 153, 0)" progress='10'  height={15} />
                    <p className="barText">10%</p>
                </Container>
                <Container>
                    <p className="barText">3 star</p>
                    <PercentageBar bgcolor="rgb(255, 153, 0)" progress='4'  height={15} />
                    <p className="barText">4%</p>
                </Container>
                <Container>
                    <p className="barText">2 star</p>
                        <PercentageBar bgcolor="rgb(255, 153, 0)" progress='6'  height={15} />
                    <p className="barText">6%</p>
                </Container>
                <Container>
                    <p className="barText">1 star</p>
                    <PercentageBar bgcolor="rgb(255, 153, 0)" progress='25'  height={15} />
                    <p className="barText">25%</p>
                </Container>
            </div>
        </span>
    )
}

// Button requires more styling (cursor on hover)
export function ReviewThisProduct() {
    return (
        <div className="reviewThisMain">
            <div className="reviewHeadline">Review this product</div>
            <div className="thoughts">Share your thoughts with other customers</div>
            <div>
                <button className="writeReview">Write a customer review</button>
            </div>
        </div>
    )
}