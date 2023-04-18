import React, { useEffect, useState } from "react";
import { Rate, Rated } from "./Rating";
import { Container, Rating } from "./RatingStyles";

export function UserReviews(props) {
  const [returnedResults, setReturnedResults] = useState([]);

  useEffect(() => {
    fetch(`/api/rating/product/${props.productId}`, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        setReturnedResults(data);
      });
  }, [props.productId]);

  // console.log(returnedResults)

  return (
    <div className="userReviewsMain">
      <div className="userReviewDisplay">
        <div className="topReviewsDiv">
          <span className="topReviews">Top Reviews from the United States</span>
        </div>
        {returnedResults.map((data) => {
          return (
            <div className="mapWrapper" key={Math.random()}>
              <Container>
                <div className="userImageWrapper">
                  <img
                    className="userImage"
                    src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"
                  ></img>
                </div>
                <span className="userName">
                  {data.firstname} {data.lastname}
                </span>
              </Container>
              <Container>
                <div className="userStars">
                  <Rated userStars={data.rating} />
                </div>
                <div className="reviewTitle">
                  <span>{data.title}</span>
                </div>
              </Container>
              <p className="dateReviewed">
                Reviewed in the United States on March 2, 2019
              </p>
              <div className="contentWrapper">
                <p className="reviewContent">{data.content}</p>
              </div>
              <Container>
                <button className="helpfulButton">Helpful</button>
                <i className="textSperator" role="img"></i>
                <span className="reportAbuse">Report Abuse</span>
              </Container>
            </div>
          );
        })}
      </div>
    </div>
  );
}
