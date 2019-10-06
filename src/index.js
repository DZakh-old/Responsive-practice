import "../node_modules/normalize.css/normalize.css";
import "babel-polyfill";
import "./fonts/stylesheet.css";
import "./css/main.scss";
import {append, create} from "./js/dom"
import {log} from "./js/helpers"

// import "./js/correct-view";
import { scrollSmoothTo } from "./js/smooth-scroll-to";


for (let link of document.querySelectorAll(".navigation__item-link")) {
  link.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();
    scrollSmoothTo(e.target.dataset.id);
  })
}


// import $ from "jquery";
// log($);

import data from "./data/data.json";
const skills = data.skills;
const skillsList = document.querySelector(".skills__list");

const renderSkill = ({id, name, value}) => {
  const skill = `
    <li data-id="${id}" class="skills__item">
      <div class="skills__number">
        ${value}%
      </div>
      <p class="skills__name">
        ${name}
      </p>
    </li>
  `;
  skillsList.innerHTML += skill;
};

const renderSkills = (skills = []) => {
  skills.map(renderSkill);
};

renderSkills(skills);


// log(skills);




class Ajax {
  static async get(url) {
    try{
      const res = await fetch(url);
      return res.json();
    } catch(error) {
      throw new Error(error)
    }
  }
}

Ajax.get("https://jsonplaceholder.typicode.com/posts").then(posts => {
  posts.map(post => {
    const postBlock = `
      <p>${post.title}</p>
    `;
    document.body.innerHTML += postBlock;
  })
})