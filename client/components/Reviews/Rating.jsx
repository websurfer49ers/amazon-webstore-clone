import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";

// Calculated Ratings from all reviews displayed by stars

export function Rate(props) {
  const [rate, setRate] = useState(0);

  useEffect(() => {
    fetch(`/api/avgrating/${props.productId}`, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((ratings) => {
        setRate(ratings[0])
      });
  }, [props.productId]);

  const avgRating = Math.round(rate.averagerating);

  return (
    <Container>
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label className="starHolder" key={Math.random() * Math.random()}>
            <Radio
              type="radio"
              value={avgRating}
            />
            <Rating>
              <FaStar
                color={
                  givenRating < avgRating || givenRating === avgRating
                    ? "rgb(255, 153, 0)"
                    : "rgb(211, 211, 211)"
                }
              />
            </Rating>
          </label>
        );
      })}
    </Container>
  );
};



// Specific Rating set by user displayed by stars
export function Rated(prop) {
  const userStars = prop.userStars
  return (
    <Container>
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label className="starHolder" key={Math.random() * Math.random()}>
            <Radio
              type="radio"
              value={userStars}
            />
            <Rating>
              <FaStar
                color={
                  givenRating < userStars || givenRating === userStars
                    ? "rgb(255, 153, 0)"
                    : "rgb(211, 211, 211)"
                }
              />
            </Rating>
          </label>
        );
      })}
    </Container>
  );
};

// Rating percentage bars by star ratings
export const starArray = []
export const PercentageBar = ({ bgcolor, progress, height }) => {

  const Parentdiv = {
    display: "flex",
    verticalAlign: "top",
    height: height,
    width: "185px",
    backgroundColor: 'whitesmoke',
    borderStyle: "solid",
    borderColor: "rgb(211, 211, 211)",
    borderWidth: 1,
    borderRadius: 3,
    margin: 7
  }

  const Childdiv = {
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderStyle: "solid",
    borderColor: "rgb(252, 97, 0)",
    borderWidth: 1,
    borderRadius: 1,
    textAlign: 'right'
  }

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
      </div>
    </div>
  )
}