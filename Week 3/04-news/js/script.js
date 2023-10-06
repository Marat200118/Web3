// data gathered form https://newsapi.org/

{

  const loadData = (file) => fetch(`assets/data/${file}.json`)
    .then(res => res.json())

  const parseData = (data, name) => {
    const $parent = document.querySelector(`.${name}`)
    data.forEach(article => {

      const $card = document.querySelector(`.${name} .article__item`);
      const $newCard = $card.cloneNode(true);

      $newCard.querySelector('.article__title').innerText = article.title;
      if (article.urlToImage === '') {
        $newCard.querySelector('.article__img').remove();
      } else {
        $newCard.querySelector('.article__img').src = article.urlToImage;
      }
      $newCard.querySelector('.article__description').innerText = article.description;
      $newCard.querySelector('.article__source').innerText = article.source.name;

      $parent.querySelector('.articles').appendChild($newCard);
    });

    document.querySelector(`.${name} .article__item`).remove();
  }

  const init = async () => {
    const dataSources = ["top", "sports", "science"];

    dataSources.forEach(async dataSource => {
      const data = await loadData(dataSource);
      parseData(data.articles, dataSource);
    })

  }

  init();
}