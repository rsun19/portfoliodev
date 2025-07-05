import React, { useEffect, useState } from "react";
import useWidth from "../hooks/changeWidth";
import PortfolioSlider from "./carousel/PortfolioSlider";
import "font-awesome/css/font-awesome.min.css";
import profile from "../assets/myImage.jpg";
import Reviews from "./Reviews/Reviews"
import { motion, useScroll } from "framer-motion";
import Menu from "./Menu";
import ContactBar from "./ContactBar";
import { Review } from "./Reviews/Review";
import WorkTimeline from "./Timeline/Timeline";

const Home = (): React.JSX.Element => {
  const [reviewsData, setReviewsData] = useState<Review[]>([]);
    
  useEffect(() => {
      const fetchReviewsData = async () => {
        try {
          const response = await fetch(
            "https://robertsrandomreviews.com/api/post",
          );
          if (response.status === 200) {
            const jsonData: Review[] = await response.json();
            jsonData.sort(
              (a, b) => parseInt(b.rating_int) - parseInt(a.rating_int),
            );
            setReviewsData(jsonData.slice(0, 9));
            console.log(jsonData);
          } else {
            console.error("Error: Unexpected status code", response.status);
          }
        } catch (error) {
          console.error("Error fetching reviews data:", error);
        }
      };
      fetchReviewsData();
  }, []);

  useEffect(() => {
    scrollUp();
  }, []);

  const { scrollYProgress } = useScroll();

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { md, twoxl } = useWidth();

  return (
    <div id='home-page' className='page-transition'>
      <div id="homeTop" style={{ background: "#D3D3D3" }}>
        <motion.div
          id = "progress-bar"
          className="progress-bar"
          style={{ scaleX: scrollYProgress, display: 'none' }}
        />
        <div style={{ textAlign: "center", paddingTop: '3rem'}}>
          <Menu />
        </div>
        <div className="text-center mb-3">
          <br />
           <p className="text-3xl" >Hi, I'm Robert</p>
           <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <img
              className="w-40 h-40 p-1 rounded-full ring-2 ring-gray-300"
              style={{ objectFit: "cover" }}
              src={profile}
              alt="Bordered avatar"
              /> 
            </motion.div>
          </div>
          <br />
          <ContactBar twoxl={twoxl} />
        </div>
        <div id="portfolio" style={{ marginLeft: "2rem", marginRight: "2rem", paddingTop: "10px"  }}>
          <PortfolioSlider />
        </div>
        <div id="WorkXP" style={{ marginLeft: "2rem", marginRight: "2rem", paddingTop: "10px" }}>
          <WorkTimeline />
        </div>
        <div style={{ marginLeft: "2rem", marginRight: "2rem", paddingTop: "10px" }}>
          <Reviews reviewsData={reviewsData} />
        </div>
        <br /><br />
      </div>
    </div>
  );
};

export default Home;