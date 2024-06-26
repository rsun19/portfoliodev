import React from "react";
import ReviewItem from "./ReviewItem";
import { Review } from "./Review";
import { Card } from "@mantine/core";

interface ReviewsProps {
  reviewsData: Review[]
}

const Reviews: React.FC<ReviewsProps> = ({ reviewsData }): React.JSX.Element => {    
  return (
    <Card style={{ margin: "20px 40px 20px 40px" }} shadow="sm" padding="lg" radius="md" withBorder>
        <h1
        className="text-3xl 3xl:text-4xl 4xl:text-6xl mb-5 3xl:mb-10 5xl:text-7xl"
        style={{ textAlign: "center", color: "black", marginTop: "1rem" }}
        >
          Favorite books:
        </h1>
        <div className="rounded-lg m-3">
          <ul className="ml-3 mr-3 4xl:mr-5 4xl:ml-5">
              {reviewsData.map((item) => (
                  <ReviewItem item={item} />
              ))}
          </ul>
        </div>
    </Card>
  );
}

export default Reviews
