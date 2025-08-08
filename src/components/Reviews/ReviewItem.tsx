import React from "react";
import { Review } from "types";

interface ReviewItemProps {
  item: Review;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ item }): React.JSX.Element => {
  return (
    <>
      <a target="_blank" href={item.url} key={item.id} rel="noreferrer">
        <li className="pb-3 pt-3" style={{ borderBottom: "1px solid black" }}>
          <div className="flex items-center space-x-4">
            <div className="flex-1 min-w-0">
              <p className="text-md text-black truncate">{item.title}</p>
              <p className="text-md text-gray-400 truncate">
                {item.author_name}
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-black">
              Rating: {item.rating_int}/10
            </div>
          </div>
        </li>
      </a>
    </>
  );
};

export default ReviewItem;
