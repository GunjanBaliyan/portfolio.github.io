//Menu
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}
const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();

//Maquina de escrever
function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 100 * i);
  });
}
const titulo = document.querySelector(".maquina-escrever");
typeWrite(titulo);

//Revelar animação
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
});

//Home delay
sr.reveal(".button", { delay: 200 });
sr.reveal(".linguagensProjeto", { delay: 400 });
sr.reveal(".imagem-espaco-delay", { delay: 200 });
sr.reveal(".imagem-iuri-delay", { delay: 600 });
sr.reveal(".scroll-delay", { delay: 1000 });
//Sobre mim delay
sr.reveal(".imagem-delay", {});
sr.reveal(".titulo-delay", { delay: 200 });
sr.reveal(".descricao-delay", { delay: 400 });
sr.reveal(".cards-interval", { interval: 400 });

//Animação conhecimentos
var texto1 = document.querySelector(".mudarTextoDescricao");

document.querySelector(".html").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "HTML is a marking-based language, where we mark the elements to define which information the page will display.";
});

document.querySelector(".css").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "CSS is a style sheet language composed of layers, created with the purpose of stylizing HTML pages.";
});

document.querySelector(".js").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "JavaScript is a structured interpreted programming language, high-level script with weak and multiparadigm dynamic typing.";
});

document.querySelector(".tailwind").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "I have learned SQL theoritically and trying to work and make projects related to it but don't have any practical knowledge yet.";
});

document.querySelector(".sass").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "I am proefficient in python and also have worked on it for mini projects as well as major projects. Refer to Github repo fir my work.";
});

document.querySelector(".react").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "C++ was the first programming language i learned , i have also done OOPS in c++ as well as some mini projects.";
});

document.querySelector(".next").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "Canva is a free graphic design platform that's great for making invitations, business cards, Instagram posts, and more. A drag and drop interface makes customizing thousands of templates simple and easy.";
});

document
  .querySelector(".styled")
  .addEventListener("mouseover", function mudarTexto8() {
    texto1.innerHTML =
      "Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at predicting outcomes.I have done projects related to ML(refer to github).";
  });

var sairCaixa = document.getElementsByClassName("sairCaixa");

for (i = 0; i < sairCaixa.length; i++) {
  sairCaixa[i].addEventListener("mouseout", function mudarTextoNormal() {
    texto1.innerHTML = `*Hover the card to Read*`;
  });
}
