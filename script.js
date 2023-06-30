const html = document.querySelector("html");
const btn = document.querySelector("#switch");
const perfilImg = document.querySelector("#perfil-img");

btn.addEventListener("click", () => {
  html.classList.toggle("light");
  let img = "https://github.com/";

  if (html.classList.contains("light")) {
    perfilImg.src = `${img}maykbrito.png`;
    perfilImg.setAttribute("alt", "Foto de perfil maykão");
  } else {
    perfilImg.src = `${img}vitoroliveiradev.png`;
    perfilImg.setAttribute("alt", "Foto de perfil Vitor Oliveira");
  }
});
