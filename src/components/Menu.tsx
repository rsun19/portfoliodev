import React, { useEffect, useState } from "react";

const Menu = (): React.JSX.Element => {
  const [, setPage] = useState(0);

  const arrangeMenu = () => {
    const homeDiv = document.getElementById("homeTop");
    const portfolioDiv = document.getElementById("portfolio");
    const workXpDiv = document.getElementById("WorkXP");
    if (homeDiv && portfolioDiv && workXpDiv) {
      const homeBorder = homeDiv.getBoundingClientRect();
      const portfolioBorder = portfolioDiv.getBoundingClientRect();
      const workBorder = workXpDiv.getBoundingClientRect();
      if (portfolioBorder.top < 0 && -portfolioBorder.top >= workBorder.top) {
        navigatePage(2);
      } else if (homeBorder.top < 0 && -homeBorder.top >= portfolioBorder.top) {
        navigatePage(1);
      } else {
        navigatePage(0);
      }
    }
  };

  const handleScroll = () => {
    arrangeMenu();
  };

  const navigatePage = (pageNum: number) => {
    const firstPage = document.getElementById("first-page");
    const secondPage = document.getElementById("second-page");
    const thirdPage = document.getElementById("third-page");
    const handle = document.getElementById("handle");
    setPage(pageNum);
    if (pageNum === 0 && handle && firstPage) {
      const firstPageWidth = firstPage.offsetWidth;
      handle.style.marginLeft = "0%";
      if (firstPageWidth) {
        handle.style.width = (firstPageWidth + 36).toString() + "px";
      }
    } else if (pageNum === 1 && handle && secondPage) {
      const secondPageWidth = secondPage.offsetWidth;
      handle.style.marginLeft = "27%";
      if (secondPageWidth) {
        handle.style.width = (secondPageWidth + 22).toString() + "px";
      }
    } else if (pageNum === 2 && handle && thirdPage) {
      const thirdPageWidth = thirdPage.offsetWidth;
      handle.style.marginLeft = "55%";
      if (thirdPageWidth) {
        handle.style.width = (thirdPageWidth + 40).toString() + "px";
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="mb-5"
    >
      <div className="switch">
        <div id="handle" />
        <a href="#" id="first-page" onClick={() => navigatePage(0)}>
          Home
        </a>
        <a href="#portfolio" id="second-page" onClick={() => navigatePage(1)}>
          Portfolio
        </a>
        <a href="#WorkXP" id="third-page" onClick={() => navigatePage(2)}>
          Experience
        </a>
      </div>
    </div>
  );
};

export default Menu;
