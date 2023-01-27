// import React from "react";
// import "./DarckMode.scss";

// const DarkMode = () => {
//   let clickedClass = "clicked";
//   const body = document.body;
//   const darkTheme = "dark";
//   const lightTheme = "light";
//   let theme;
//   // local storage
//   if (localStorage) {
//     theme = localStorage.getItem("theme");
//   }
//   if (theme === lightTheme || theme === darkTheme) {
//     body.classList.add(theme);
//   } else {
//     body.classList.add(lightTheme);
//   }
//   const switchTheme = (e) => {
//     if (theme === darkTheme) {
//       body.classList.replace(darkTheme, lightTheme);
//       e.target.classList.remove(clickedClass);
//       localStorage.setItem("theme", "light");
//       theme = lightTheme;
//     } else {
//       body.classList.replace(lightTheme, darkTheme);
//       e.target.classList.add(clickedClass);
//       localStorage.setItem("theme", "light");
//       theme = darkTheme;
//     }
//   };
//   return (
//     <button
//       className={theme === "dark" ? clickedClass : ""}
//       id="darMode"
//       onClick={(e) => switchTheme(e)}
//     ></button>
//   );
// };

// export default DarkMode;
