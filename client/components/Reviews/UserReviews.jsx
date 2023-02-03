import React, {useEffect, useState} from "react";
import { Rate, Rated } from "./Rating";
import { Container, Rating } from "./RatingStyles";


export function UserReviews() {
    const [returnedResults, setReturnedResults] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/api/rating/product/1", {
            mode: "cors",
        })
        .then((res) => res.json())
        .then((data) => {
            setReturnedResults(data)
        });
    }, []);

    const year = [2019, 2020, 2021, 2022, 2023]
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    return (
        <div className="userReviewsMain">
            <div className="userReviewDisplay">
                <div className="topReviewsDiv">
                    <span className="topReviews">Top Reviews from the United States</span>
                </div>
                {returnedResults.map((data) => {
                    return (
                        <div className="mapWrapper">
                            <Container>
                                <div className="userImageWrapper">
                                    <img className="userImage" src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"></img>
                                </div>
                                <span className="userName">{data.firstname} {data.lastname}</span>
                            </Container>
                            <Container>
                                <div className="userStars">
                                    <Rated userStars={data.rating}/>
                                </div>
                                <div className="reviewTitle">
                                    <span>{data.title}</span>
                                </div>
                            </Container>
                            <p className="dateReviewed">Reviewed in the United States on {month[Math.ceil(Math.random() * 11)]} {Math.ceil(Math.random() * 28)}, {year[Math.ceil(Math.random() * 5)]}</p>
                            <div className="contentWrapper">
                                <p className="reviewContent">{data.content}</p>
                            </div>
                            <Container>
                                <button className="helpfulButton">Helpful</button>
                                <i className="textSperator" role="img"></i>
                                <span className="reportAbuse">Report Abuse</span>
                            </Container>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};