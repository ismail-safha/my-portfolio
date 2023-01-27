import {
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLinkedin,
} from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [<BsGithub />, <FaLinkedin />];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Ismail Safha",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+212652233163",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "ismailsafha@gmail.com",
  },
];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "aulad ayad fqihben salah",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "ismailsafha@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+212-652-233-163",
  },
];
