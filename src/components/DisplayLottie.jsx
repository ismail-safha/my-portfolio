// =========
import React from "react";
import Lottie from "lottie-react";
import skills_code from "./Comp 1.json";

const DisplayLottie = () => {
  return (
    <div>
      <Lottie animationData={skills_code} loop={true} />
    </div>
  );
};

export default DisplayLottie;
