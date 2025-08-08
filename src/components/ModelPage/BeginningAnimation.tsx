import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Home from "../Home";
import PlaneModel from "./PlaneModel";

const BeginningAnimation = (): React.JSX.Element => {
  const [click, setClick] = useState(false);
  const startAnimation = () => {
    const portfolioButton = document.getElementById("portfolioButton");
    setClick(true);
    if (portfolioButton) {
      portfolioButton.style.display = "none";
    }
  };

  useEffect(() => {
    startAnimation();
  });

  let isMidToggled = false;

  const [finishAnimation, setFinishAnimation] = useState(false);

  const finishAnimationChange = (change: boolean) => {
    setFinishAnimation(change);
  };

  const finishMidFunc = () => {
    if (!isMidToggled) {
      const page = document.getElementById("home-page");
      if (page) {
        page.classList.toggle("show");
        isMidToggled = true;
        const app = document.getElementById("App");
        const progressBar = document.getElementById("progress-bar");
        if (app && progressBar) {
          page.addEventListener("transitionend", () => {
            setTimeout(() => {
              page.style.transition = "none";
              page.style.transform = "none";
              app.style.overflow = "visible";
              progressBar.style.display = "block";
              window.scrollBy(0, 1);
            }, 0);
          });
        }
      }
    }
  };

  return (
    <div>
      <div style={{ position: "relative", background: "#D3D3D3" }}>
        <Home />
      </div>
      {!finishAnimation && (
        <div style={{ margin: "0px", padding: "0px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: "100vh",
                width: "100vw",
                margin: "0px",
                padding: "0px",
              }}
            >
              <Canvas>
                <Environment
                  files={`./${
                    process.env.NODE_ENV === "development" && "portfoliodev/"
                  }farm_field_puresky_1k.hdr`}
                  background
                />
                <Suspense fallback={null}>
                  {click && (
                    <PlaneModel
                      onAnimationFinish={finishAnimationChange}
                      onMidwayFinish={finishMidFunc}
                      start={click}
                    />
                  )}
                  <OrbitControls />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeginningAnimation;
