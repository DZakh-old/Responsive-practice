const processInnerLinkClick = () => {
  const links = document.querySelectorAll(".navigation__item-link,.first__arrow-to-down");
  for (const link of links) {
    link.addEventListener("click", e => {
      // console.log("clicked");
      e.preventDefault();
      e.stopPropagation();
      smoothScrollTo(e.target.dataset.id);
    });
  };
};

const smoothScrollTo = (elementId) => {
  // console.log(elementId);
  const element = document.getElementById(elementId);
  element.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
};



processInnerLinkClick();