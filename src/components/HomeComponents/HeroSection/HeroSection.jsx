import React from "react";
import { motion } from "framer-motion";

import "./hero-section.css";
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
              <motion.h1
                whileInView={{ y: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
                className="fw-bold"
                style={{ fontSize: "60px" }}
              >
                Incididunt sint aliquip Collection
              </motion.h1>
              
              <motion.p className="fs-5"  whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}>
                {" "}
                Duis reprehenderit labore nulla mollit non consectetur quis aute
                eu amet sint.{" "}
              </motion.p>
              <motion.button className="herosection-btn"  whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}> Join our discord </motion.button>
              {/**/}
            </div>
            <motion.div className="col-xl-6 flex justify-content-center ng-tns-c3-1" whileInView={{ x: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}>
              <img src="/assets/nfts.png" alt="" className="herosection-img" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
