import React, { useState } from "react";
import { FaRegBell, FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";
const Rate = () => {
    const [rate, setRate] = useState(0);
    return (
        <container>
            {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                    <label>
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
                                givenRating < rate || givenRating === rate ? "000" : "rgb(255, 215, 0)"
                              }
                            />
                          </Rating>
                    </label>
                );
            })}
        </container>
    );
};

export default Rate;

// Comment 2