import { findByLabelText } from "@testing-library/react";
import React, { useState } from "react";
import {  FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";


export function Rate () {
  const [rate, setRate] = useState(0);
  return (
    <Container>
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label className="starHolder">
            <Radio
              type="radio"
              value={givenRating}
              onClick={() => {
                setRate(givenRating);
              }}
            />
            <Rating>
              <FaStar
                color={
                  givenRating < rate || givenRating === rate
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

export const PercentageBar = ({bgcolor,progress,height}) => {

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
