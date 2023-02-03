import React, { useState, useEffect } from "react";
import { Rate, PercentageBar, } from "./Rating.jsx";
import { Container } from "./RatingStyles.jsx";

function percentage(partialValue, totalValue) {
    return Math.round((100 * partialValue) / totalValue);
};

export function CustomerReviews(props) {
    const [rate, setRate] = useState(0);
    const [returnedRatings, setReturnedRatings] = useState("")

    useEffect(() => {
        fetch("/api/avgrating/1", {
          mode: "cors",
        })
        .then((res) => res.json())
        .then((ratings) => {
          setRate(ratings[0])
        });
      }, []);
    
    useEffect(() => {
        fetch("/api/rating/product/1", {
          mode: "cors",
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setReturnedRatings(data)
        });
      }, []);

    const productRating = Math.round(rate.averagerating)
    const numOfRatings = returnedRatings.length

    console.log(returnedRatings)


    let fiveStar = 0;
    let fivePercent = 0;
    let fourStar = 0;
    let fourPercent = 0;
    let threeStar = 0;
    let threePercent = 0;
    let twoStar = 0;
    let twoPercent = 0;
    let oneStar = 0;
    let onePercent = 0;

    function addStars (arr) {
        for (let i = 0; i < arr.length; i++) {
            switch (arr[i].rating) {
                case 5: 
                    fiveStar++;
                    break;
                case 4: 
                    fourStar++;
                    break;
                case 3: 
                    threeStar++;
                    break;
                case 2: 
                    twoStar++;
                    break;
                case 1: 
                    oneStar++;
                    break;

            }
        }
        let totalStar = fiveStar + fourStar + threeStar + twoStar + oneStar
        fivePercent = percentage(fiveStar, totalStar)
        fourPercent = percentage(fourStar, totalStar)
        threePercent = percentage(threeStar, totalStar)
        twoPercent = percentage(twoStar, totalStar)
        onePercent = percentage(oneStar, totalStar)
    };

    addStars(returnedRatings);
    console.log(fiveStar)
    console.log(fivePercent)

    return (
        <span className="customerReviews">
            <div className="customerReviewDiv">
                <h2 className="reviewText">Customer reviews</h2>
                <Container>
                    <Rate className="calculatedStars"/>
                    <span className="starHolder">{productRating} out of 5</span>
                </Container>
                <span className="globalRatings">
                    {numOfRatings} global ratings
                </span>
                <Container>
                    <p className="barText">5 star</p>
                    <PercentageBar bgcolor="rgb(255, 153, 0)" progress={fivePercent}  height={15} />
                    <p className="barText">{fivePercent}%</p>
                </Container>
                <Container>
                    <p className="barText">4 star</p>
                    <PercentageBar bgcolor="rgb(255, 153, 0)" progress={fourPercent}  height={15} />
                    <p className="barText">{fourPercent}%</p>
                </Container>
                <Container>
                    <p className="barText">3 star</p>
                    <PercentageBar bgcolor="rgb(255, 153, 0)" progress={threePercent}  height={15} />
                    <p className="barText">{threePercent}%</p>
                </Container>
                <Container>
                    <p className="barText">2 star</p>
                        <PercentageBar bgcolor="rgb(255, 153, 0)" progress={twoPercent}  height={15} />
                    <p className="barText">{twoPercent}%</p>
                </Container>
                <Container>
                    <p className="barText">1 star</p>
                    <PercentageBar bgcolor="rgb(255, 153, 0)" progress={onePercent}  height={15} />
                    <p className="barText">{onePercent}%</p>
                </Container>
            </div>
        </span>
    );
};

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
    );
};
