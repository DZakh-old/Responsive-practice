const scrollSmoothTo = (elementId) => {
  console.log(elementId);
  const element = document.getElementById(elementId);
  element.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
};

export { scrollSmoothTo };

//Static method