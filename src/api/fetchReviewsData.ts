import { mocks } from "../mocks/reviewMocks";
import { Review } from "types";

export const fetchReviewsData = async (
  setReviewsData: (review: Review[]) => void,
) => {
  if (process.env.NODE_ENV === "development") {
    console.log("Using mock data");
    mocks.sort((a, b) => parseInt(b.rating_int) - parseInt(a.rating_int));
    setReviewsData(mocks.slice(0, 9));
  } else {
    const api = "https://robertsrandomreviews.com/api/post";
    try {
      const response = await fetch(api);
      if (response.status === 200) {
        const jsonData: Review[] = await response.json();
        jsonData.sort(
          (a, b) => parseInt(b.rating_int) - parseInt(a.rating_int),
        );
        setReviewsData(jsonData.slice(0, 9));
      } else {
        console.error("Error: Unexpected status code", response.status);
      }
    } catch (error) {
      console.error("Error fetching reviews data:", error);
    }
  }
};
