import GetElems from "./GetElems";
const works = () => {
  const portfolio = document.querySelector(".works__portfolio");
  const getElements = new GetElems();

  //Get items from db
  getElements.getItems().then((data) => renderCards(data));

  const createElements = (
    id,
    category,
    title,
    year,
    gitLink,
    link,
    img,
    alt
  ) => {
    const div = document.createElement("div");

    div.classList.add("works__portfolio-col");
    div.innerHTML = `
              <div class="portfolio__item" data-id=${id}>
                <img
                  class="portfolio__item-img"
                  src=${img}
                  alt=${alt}
                />
                 
                <div class="portfolio__item-content">
                  <div class="portfolio__item-content--cat">${category}</div>
                  <div class="portfolio__item-content--title">
                    ${title}
                    <div class="portfolio__item-content--date">${year}</div>
                  </div>
                </div>
               <div class="overlay">
                 ${
                   gitLink
                     ? `<a href=${gitLink} class="overlay__link"><i class="fab fa-github-alt"></i></a>`
                     : ""
                 }
                 
                 ${
                   link
                     ? `<a href=${link} class="overlay__link" ><i class="fas fa-desktop"></i></a>`
                     : ""
                 }
                  <button type="button" class="btn-trans"><i class="open-btn fas fa-inbox"></i></button> 
                  </div>
              </div>
            
      `;

    portfolio.appendChild(div);
  };

  const renderCards = (items) => {
    items.forEach((item) => {
      const { id, category, title, year, gitLink, link, img, alt } = item;
      createElements(id, category, title, year, gitLink, link, img, alt);
    });
  };
};
export default works;
