import { dataBgNews } from "../utils/DataHeroNews.js";
import { dataDemo } from "../utils/DataNews.js";

const urlParams = new URLSearchParams(window.location.search);
const title = document.querySelector(".post-detail__title");
const date = document.querySelector(".post-detail__date");
const image = document.querySelector(".post-detail__image");
const text = document.querySelector(".post-detail__text");

const id = urlParams.get("id");
const news = urlParams.get("news");

if (id !== null && news === null) {
  const notice = dataDemo.find((item) => item.id === parseInt(id));

  if (notice) {
    document.title = notice.titulo;
    title.textContent = notice.titulo;
    date.textContent = notice.fecha;
    image.src = `.${notice.img}`;

    notice.parrafos.forEach((p) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = p;
      text.appendChild(paragraph);
    });
  }
} else if (id !== null && news === "true") {
  const notice = dataBgNews.find((item) => item.id === parseInt(id));

  if (notice) {
    document.title = notice.title;
    title.textContent = notice.title;
    date.textContent = notice.fecha;
    image.src = `.${notice.img}`;

    notice.parrafos.forEach((p) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = p;
      text.appendChild(paragraph);
    });
  }
}
