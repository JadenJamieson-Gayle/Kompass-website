import React from "react";
import "./score.css";
import score_rating from "./star-svgrepo-com.svg";
interface Props {
  rating: number;
}
const Score: React.FC<Props> = ({ rating }) => {
  const ratings = [];
  for (let i = 0; i < rating; i++) {
    ratings.push(<img src={score_rating} id={`star_${i}`} />);
  }

  return (
    <div className="container-fluid px-0 mt-3 d-flex justify-content-start">
      {ratings}
    </div>
  );
};

export default Score;
