import { dataDemo } from "../utils/DataNews.js";

const containerNotice = document.querySelector(".container-notices");

const createCard = (data) => {
  const card = document.createElement("div");
  card.className = `card-item card-${data.id}`;
  card.innerHTML = `
 <div>
   <h2>${data.titulo}</h2>
  <p class="card-text">${data.texto}</p>
 </div>
  <img src="${data.img}" alt="${data.titulo}">
  <a href="#">
          <span>Ver más</span>
          <svg
            width="37"
            height="12"
            viewBox="0 0 37 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 6H36.0001M36.0001 6L31.0001 1M36.0001 6L31.0001 11"
              stroke="#FF5C00"
            />
          </svg>
        </a>
`;

  containerNotice.appendChild(card);
};

dataDemo.forEach(createCard);
