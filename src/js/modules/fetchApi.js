export default function fetchApi() {
  const cardInjection = document.querySelector("[data-card-inject]");

  //On js loading, it'll invoke get Api function.
  const getApi = (async () => {
    try {
        //try to get data
      const url = await fetch("../../api.json");
      const json = await url.json();
      createElement(json);
      return json;
    } catch (err) {
      //if error, show a error message.
      document.body.innerHTML = `
      <div style='font-size: 52px; color: red; text-align: center';>ERRO AO CARREGAR DADOS</div>
      `;
      console.error("Não deu certo, erro: " + err);
    }
  })();

  const createElement = (json) => {
    if (json) {
      json.map((item) => {
        cardInjection.innerHTML += `
        <div class="cards" data-id="${item.id}">
          <div class="card__img">
            <div class="card__img-category">${item.category}</div>
            <img src="${item.image}" alt="${item.name}" />
          </div>
          <div class="card__info">
            <h3 class="card__info-title">${item.name}</h3>
            <span class="card__info-price">R$ ${item.price.toFixed(2)}</span>
          </div>
          <div class="card__buttons">
            <button class="card__button-more">Sobre</button>
            <button class="card__button-buy">Comprar</button>
          </div>
        </div>
        `;
      });
    }
  };
}
