import React, { Fragment } from "react";
import emoji from "react-easy-emoji";

import DisplayLottie from "../../DisplayLottie";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import { Icon } from "@iconify/react";
import "./skills.css";

// =====

const skillsSection = {
  softwareSkills: [
    {
      skillName: "Figma",
      fontAwesomeClassname: "skill-icons:figma-dark",
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "CSS-3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "skill-icons:sass",
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "skill-icons:bootstrap",
    },
    {
      skillName: "tailwindcss",
      fontAwesomeClassname: "skill-icons:tailwindcss-dark",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "Typescript",
      fontAwesomeClassname: "logos:typescript-icon-round",
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "Redux",
      fontAwesomeClassname: "logos:redux",
    },
    {
      skillName: "Nextjs",
      fontAwesomeClassname: "skill-icons:nextjs-dark",
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "skill-icons:nodejs-dark",
    },
    {
      skillName: "Expressjs",
      fontAwesomeClassname: "skill-icons:expressjs-dark",
    },
    {
      skillName: "Mongodb",
      fontAwesomeClassname: "skill-icons:mongodb",
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "skill-icons:php-dark",
    },
    {
      skillName: "Wordpress",
      fontAwesomeClassname: "skill-icons:wordpress",
    },
    {
      skillName: "Mysql",
      fontAwesomeClassname: "skill-icons:mysql-dark",
    },

    {
      skillName: "NPM",
      fontAwesomeClassname: "logos:npm-icon",
    },
    {
      skillName: "GIT",
      fontAwesomeClassname: "vscode-icons:file-type-git",
    },
  ],
  skills: [
    emoji(
      "⚡ I convert any Design coded in Responsive HTML/CSS/JS Template and react js "
    ),
    emoji("⚡ I convert Figma UI/UX design into ReactJS "),
    emoji("⚡ Building responsive static websites using Next.js"),
    emoji("⚡ Building a RESTful API with Node.js and Express MERN stack"),

    emoji("⚡ Building website with WordPress as Headless CMS"),
    emoji("⚡ I convert HTML template to WordPress theme"),
  ],
};
// =====

const SkiilsPrtfolio = () => {
  return (
    <>
      <Container
        className="flex text-center my-5 section section-lg"
        id="skills"
      >
        {/*  title */}
        <h2 className="section-heading" data-outline="What I do">
          What I do
        </h2>
        {/* <h1 className="h1">What I do</h1> */}
        <p className="lead lead_p">
          FULL STACK DEVELOPER I HAVE kNOWLEDGE EVERY TECH STACK
        </p>

        <Row className="my-5">
          {/* left */}
          <Col lg="6" className="order-2 order-lg-1 Lottie">
            <DisplayLottie animationPath="/lottie/skills/fullstack.json" />
          </Col>
          {/* right  */}
          <Col lg="6" className="order-1 order-lg-2">
            <h3 className="h3 mb-2 fullS">Full Stack Development</h3>

            <div className="  iconnn__s d-flex justify-content-center flex-wrap mb-2">
              {skillsSection.softwareSkills.map((skill, i) => {
                return (
                  <Fragment key={i}>
                    <div
                      className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                      id={skill.skillName.replace(/\s/g, "")}
                    >
                      <Icon
                        className="ic__ns "
                        icon={skill.fontAwesomeClassname}
                        data-inline="false"
                      ></Icon>
                    </div>
                    <UncontrolledTooltip
                      delay={0}
                      placement="bottom"
                      target={skill.skillName.replace(/\s/g, "")}
                    >
                      {skill.skillName}
                    </UncontrolledTooltip>
                  </Fragment>
                );
              })}
            </div>
            <div className="skills_betel">
              {skillsSection.skills.map((skill, i) => {
                return (
                  <p className="skills_p" key={i}>
                    {skill}
                  </p>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SkiilsPrtfolio;
