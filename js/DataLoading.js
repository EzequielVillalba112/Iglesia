import { dataBgNews, dataNotice } from "../utils/DataHeroNews.js";

const slides = document.querySelector(".slides");
const posts = document.querySelector(".posts-wrapper");

const createSlide = (data) => {
  const article = document.createElement("article");
  article.className = `main-post ${data.id === 0 ? "main-post--active" : ""}`;

  article.innerHTML = `
    <div class="main-post__image">
        <img
          src="${data.img}"
          alt="${data.title}"
        />
      </div>
      <div class="main-post__content">
        <div class="main-post__tag-wrapper">
          <span class="main-post__tag">News</span>
        </div>
        <h1 class="main-post__title">
          ${data.title}
        </h1>
        <a class="main-post__link" href="../page/NoticeId.html?id=${data.id}&news=true">
          <span class="main-post__link-text">Ver más</span>
          <svg
            class="main-post__link-icon main-post__link-icon--arrow"
            width="37"
            height="12"
            viewBox="0 0 37 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 6H36.0001M36.0001 6L31.0001 1M36.0001 6L31.0001 11"
              stroke="white"
            />
          </svg>
        </a>
      </div>
    `;
  slides.appendChild(article);
};

const createPost = (data) => {
  const article = document.createElement("article");
  article.className = "post post--active";
  article.innerHTML = `
    <div class="progress-bar">
    <div class="progress-bar__fill"></div>
  </div>
  <header class="post__header">
    <span class="post__tag">News</span>
    <p class="post__published">${data.date}</p>
  </header>
  <h2 class="post__title">
    ${data.title}
  </h2>
  `;
  posts.appendChild(article);
};

dataNotice.forEach((data) => createPost(data));
dataBgNews.forEach((data) => createSlide(data));
