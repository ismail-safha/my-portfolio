import React from "react";
import "./Contact.scss";
import { contacts } from "../../../Data";

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

const Contact = () => {
  return (
    <div className="container" id="contact">
      <h2 className="section-heading" data-outline="Contact Me">
        Contact Me
      </h2>
      <div className="contact_form">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_left_container"
        >
          <h3>Just Say Hi</h3>
          <p className="contact_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil
            unde atque voluptates, cumque molestias eveniet voluptatum animi
            consectetur magni mollitia dolor exercitationem labore maiores!
          </p>
          {contacts.map((contact) => {
            return (
              <div className="contact_left" key={contact.id}>
                <div className="icon">{contact.icon}</div>
                <p className="info_text">{contact.infoText}</p>
              </div>
            );
          })}
          {/* === */}

          {/* ==== */}
          <div className="social_icons">
            {icons.linksIcons.map((icon, i) => {
              return (
                <a key={i} href={icon.iconLink}>
                  {icon.iconName}
                </a>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_right"
        >
          <h3>Get In Touch</h3>
          <div className="row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last name" />
          </div>
          <div className="row">
            <input type="text" placeholder="Phone" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="row">
            <textarea placeholder="message"></textarea>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="btn"
          >
            <a href="#">Send</a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
