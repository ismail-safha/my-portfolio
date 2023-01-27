import React from "react";
// import { Link } from 'react-router-dom'
import image1 from "../assets/project-1.png";
import image2 from "../assets/project-2.png";
import image3 from "../assets/project-3.png";
import image4 from "../assets/project-4.png";
import image5 from "../assets/project-5.png";
import { BsGithub } from "react-icons/bs";

import "./project.css";

const Project = () => {
  return (
    <>
      <section id="portfolio">
        <div className="container">
          <h2 className="section-heading" data-outline="Projects">
            Projects
          </h2>
          <div className="all-items">
            <div className="item">
              <div className="left">
                <div className="img">
                  <img src={image1} alt="" />
                </div>
              </div>
              <div className="right">
                <h2 className="project-title">Nika Store</h2>
                <h3 className="project-sub-title">
                  nika store withe react and tailwind css
                </h3>
                <p className="project-desc">
                  Modern Nike Store ECommerce React js Web App with Tailwind
                  Css, Redux Toolkit, React Redux
                </p>
                <div className="buttons">
                  <a
                    href="https://github.com/ismail-safha/nika_store_reactjs"
                    className="primary-btn"
                  >
                    <BsGithub />
                  </a>
                  <a
                    href="https://nika-store-ismail-safha.netlify.app/"
                    className="primary-btn outline external-link"
                  >
                    <span>demo</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="left">
                <div className="img">
                  <img src={image2} alt="" />
                </div>
              </div>
              <div className="right">
                <h2 className="project-title">WEATHER API</h2>
                <h3 className="project-sub-title">app for WEATHER API</h3>
                <p className="project-desc">
                  BUILD A TYPESCRIPT REACT API PROJECT USING A WEATHER API.
                  ReactJS, TypeScript, TailwindCSS, Fetch API
                </p>
                <div className="buttons">
                  <a
                    href="https://github.com/ismail-safha/Weather-Forecast-App-"
                    className="primary-btn"
                  >
                    <BsGithub />
                  </a>
                  <a
                    href="https://weather-forecast-app-tau.vercel.app/"
                    className="primary-btn outline external-link"
                  >
                    <span>Demo</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="left">
                <div className="img">
                  <img src={image3} alt="" />
                </div>
              </div>
              <div className="right">
                <h2 className="project-title">Furniture</h2>
                <h3 className="project-sub-title">
                  A website for Ecommerce Website
                </h3>
                <p className="project-desc">
                  React Furniture Ecommerce Website using ReactJs, Redux Toolkit
                </p>
                <div className="buttons">
                  <a
                    href="https://github.com/ismail-safha/Furniture-Ecommerce-Website"
                    className="primary-btn"
                  >
                    <BsGithub />
                  </a>
                  <a
                    href="https://ismail-safha-multishop.netlify.app/home"
                    className="primary-btn outline external-link"
                  >
                    <span>Demo</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="left">
                <div className="img">
                  <img src={image4} alt="" />
                </div>
              </div>
              <div className="right">
                <h2 className="project-title">Sushi Restaurant</h2>
                <h3 className="project-sub-title">
                  A website for Sushi Restaurant
                </h3>
                <p className="project-desc">
                  Responsive Sushi Restaurant Website Design Using HTML CSS &
                  JavaScript
                </p>
                <div className="buttons">
                  <a
                    href="https://github.com/ismail-safha/sushi-shop"
                    className="primary-btn"
                  >
                    <BsGithub />
                  </a>
                  <a
                    href="https://sushi-shop-ismail-safha.netlify.app/"
                    className="primary-btn outline external-link"
                  >
                    <span>Demo</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="left">
                <div className="img">
                  <img src={image5} alt="" />
                </div>
              </div>
              <div className="right">
                <h2 className="project-title">real estate</h2>
                <h3 className="project-sub-title">A website for real estate</h3>
                <p className="project-desc">
                  Responsive-real-estate-website using html and css JavaScript
                </p>
                <div className="buttons">
                  <a
                    href="https://github.com/ismail-safha/Responsive-real-estate-website"
                    className="primary-btn"
                  >
                    <BsGithub />
                  </a>
                  <a
                    href="https://ismail-safha.github.io/Responsive-real-estate-website/"
                    className="primary-btn outline external-link"
                  >
                    <span>Demo</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==== */}
      <div className="talk">
        <div className="talk_left">
          <h3>
            so let's talk about <br /> <span>your next projects</span>
          </h3>
        </div>
        <div className="talk_right">
          <a href="#contact">Contact Me</a>
        </div>
      </div>
      {/* ==== */}
    </>
  );
};

export default Project;
