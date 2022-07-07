// Script to manage pages //
const pages = document.getElementsByClassName("page");
const backButton = document.getElementById("back");
let current = 'home';

function set_page(name) {
  // Fade out current page
  document.getElementById(current).style.animation = 'fadeOut 3s forwards';
  current = name;

  setTimeout(() => {
    // Reset animation of last page
    document.getElementById(current).style.animation = '';

    // Enable and disable the back button as needed
    if (name === 'home')
      backButton.setAttribute("hidden", "")
    else
      backButton.removeAttribute("hidden")

    // Set the visibility of each page accordingly
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];

      if (page.id === name)
        page.removeAttribute("hidden")
      else
        page.setAttribute("hidden", "")
    }
  }, 3000);
}

// Setup certain things
const projects = document.getElementsByClassName('project');
for (let i = 0; i < projects.length; i++) {
  const proj = projects[i];

  if (i % 2 === 0) proj.style.animation = "projectEnterLeft 1s ease-in-out forwards";
  else proj.style.animation = "projectEnterRight 1s ease-in-out forwards";

  proj.style.animationDelay = `${i / 2}s`;
}