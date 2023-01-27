import React from "react";
import portfolio from "../../../assets/portfolio.png";
import "./Home.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1,
      },
    },
  };

  return (
    <>
      <section className="section__home">
        <motion.div
          className="container "
          id="home"
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            delay: 0.5,
          }}
        >
          <div className="profile">
            <img src={portfolio} alt="portfolio" />
          </div>
          <div className="profile_text">
            <h3 className="name">
              Hi, I'm <span>Ismail Safha</span>{" "}
            </h3>
            <span className="job">Web Developer </span>
            <span className="text">
              Passionate
              <br /> to craft innovative <br /> web products.
            </span>
            <motion.Link
              to="#contact"
              whileHover={{ scale: 1.1 }}
              variants={moveVariants}
              animate="animation"
            >
              connect with me
            </motion.Link>
            <div className="web">Web Developer</div>
            <div className="ui">UI/UX Designer</div>
            <div className="freelance">Freelancer</div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
