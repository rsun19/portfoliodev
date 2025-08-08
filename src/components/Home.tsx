import React, { useEffect, useState } from "react";
import PortfolioSlider from "./carousel/PortfolioSlider";
import "font-awesome/css/font-awesome.min.css";
import profile from "../assets/myImage.jpg";
import Reviews from "./Reviews/Reviews";
import { motion, useScroll } from "framer-motion";
import Menu from "./Menu";
import ContactBar from "./ContactBar";
import WorkTimeline from "./Timeline/Timeline";
import { Review } from "types";
import { fetchReviewsData } from "../api/fetchReviewsData";

const Home = (): React.JSX.Element => {
  const [reviewsData, setReviewsData] = useState<Review[]>([]);

  useEffect(() => {
    fetchReviewsData(setReviewsData);
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

  return (
    <div id="home-page" className="page-transition">
      <div id="homeTop" style={{ background: "#D3D3D3" }}>
        <motion.div
          id="progress-bar"
          className="progress-bar"
          style={{ scaleX: scrollYProgress, display: "none" }}
        />
        <div style={{ textAlign: "center", paddingTop: "3rem" }}>
          <Menu />
        </div>
        <div className="text-center mb-3">
          <br />
          <p className="text-3xl">Hi, I&apos;m Robert</p>
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
                ease: [0, 0.71, 0.2, 1.01],
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
          <ContactBar />
        </div>
        <div
          id="portfolio"
          style={{
            marginLeft: "2rem",
            marginRight: "2rem",
            paddingTop: "10px",
          }}
        >
          <PortfolioSlider />
        </div>
        <div
          id="WorkXP"
          style={{
            marginLeft: "2rem",
            marginRight: "2rem",
            paddingTop: "10px",
          }}
        >
          <WorkTimeline />
        </div>
        <div
          style={{
            marginLeft: "2rem",
            marginRight: "2rem",
            paddingTop: "10px",
          }}
        >
          <Reviews reviewsData={reviewsData} />
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Home;
