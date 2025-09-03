import { dataDemo } from "../utils/DataNews.js";

const urlParams = new URLSearchParams(window.location.search);
const title = document.querySelector(".post-detail__title");
const date = document.querySelector(".post-detail__date");
const image = document.querySelector(".post-detail__image");
const text = document.querySelector(".post-detail__text");

const id = urlParams.get("id");

const notice = dataDemo.find((item) => item.id === parseInt(id));
console.log(notice);


if (notice) {
  title.textContent = notice.titulo;
  date.textContent = notice.fecha;
  image.src = notice.img;
  text.textContent = notice.textoResumen;
}
