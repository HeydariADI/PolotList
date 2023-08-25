function navbarFadeIn() {
  const navbar = document.querySelector(".navbar");
  const navbarLogo = document.querySelector(".brand img");

  if (window.scrollY > 50) {
    navbar.classList.remove("dark");
    navbarLogo.src = "/assets/images/black-logo.png";
  } else {
    navbar.classList.add("dark");
    navbarLogo.src = "/assets/images/white-logo.png";
  }
}

window.addEventListener("scroll", navbarFadeIn);
