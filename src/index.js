/* Css */
import "../node_modules/normalize.css/normalize.css";
import "./fonts/stylesheet.css";
import "./css/main.css";

/* Functions */
import "./js/correct-view";
import "./js/smooth-scroll-to";

/* Packedges */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import "babel-polyfill";





/* NEW THINGS I LEARNED */
/* Touch it later */

// /* Helpers */
// import {append, create} from "./js/dom"
// import {log} from "./js/helpers"


// /* Emplement values into js (use json) */
// import data from "./data/data.json";
// const skills = data.skills;
// const skillsList = document.querySelector(".skills__list");

// const renderSkill = ({id, name, value}) => {
//   const skill = `
//     <li data-id="${id}" class="skills__item">
//       <div class="skills__number">
//         ${value}%
//       </div>
//       <p class="skills__name">
//         ${name}
//       </p>
//     </li>
//   `;
//   skillsList.innerHTML += skill;
// };

// const renderSkills = (skills = []) => {
//   skills.map(renderSkill);
// };

// renderSkills(skills);


// /* Ajax */
// class Ajax {
//   static async get(url) {
//     try{
//       const res = await fetch(url);
//       return res.json();
//     } catch(error) {
//       throw new Error(error)
//     }
//   }
// }

// /* Json by URL */
// Ajax.get("https://jsonplaceholder.typicode.com/posts").then(posts => {
//   posts.map(post => {
//     const postBlock = `
//       <p>${post.title}</p>
//     `;
//     document.body.innerHTML += postBlock;
//   })
// })