import React from "react";
import './hero-section.css'
const HeroSection = () => {
  return (
    <>
      <div className="ng-tns-c3-1 ng-star-inserted">
        <div
          className="container d-flex align-items-center justify-content-center ng-tns-c3-1"
          style={{ marginTop: "100px" }}
        >
          <div className="row d-flex flex-column-reverse gap-5 gap-xl-0 flex-xl-row ng-tns-c3-1">
            <div className="col-xl-6 gap-3 d-flex flex-column justify-content-center align-items-xl-start ng-tns-c3-1">
              <h1
                className="fw-bold ng-tns-c3-1 ng-trigger ng-trigger-inBottomAnimation"
                style={{ fontSize: "60px" }}
              >
                {" "}
                Incididunt sint aliquip Collection{" "}
              </h1>
              <p className="fs-5 ng-tns-c3-1 ng-trigger ng-trigger-inBottomAnimation">
                {" "}
                Duis reprehenderit labore nulla mollit non consectetur quis aute
                eu amet sint.{" "}
              </p>
              <button
                className="herosection-btn"
                
              >
                {" "}
                Join our discord{" "}
              </button>
              {/**/}
            </div>
            <div className="col-xl-6 flex justify-content-center ng-tns-c3-1">
              <img
                src="/assets/nfts.png"
                alt=""
                className="herosection-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
