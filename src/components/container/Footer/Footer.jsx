import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";

import { FaLinkedin } from "react-icons/fa";

const icons = {
  linksIcons: [
    {
      iconName: <BsGithub />,
      iconLink: "https://github.com/ismail-safha",
    },
    {
      iconName: <FaLinkedin />,
      iconLink: "https//linkmen.com",
    },
  ],
};

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="footer"
    >
      <div className="copyright">
        <p>
          Copyright&copy;2023 All rights reserved.Made by{" "}
          <span>Ismail Safha</span>
        </p>
      </div>
      <div className="followMe">
        <h4>Follow Me</h4>
        <div className="stick"></div>
        <div className="social_icons">
          {icons.linksIcons.map((icon, i) => {
            return (
              <Link key={i} to={icon.iconLink}>
                {icon.iconName}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
