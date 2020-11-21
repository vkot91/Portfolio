import GetElems from "./GetElems";
import slider from "./slider";

const modals = () => {
  const modals = document.querySelectorAll(".modal");
  const openResumeBtns = document.querySelectorAll("[data-resume]");
  const openContactBtns = document.querySelectorAll("[data-contact]");
  const modalResume = document.querySelectorAll(".modal")[0];
  const modalContact = document.querySelectorAll(".modal")[1];
  const modalsWrap = document.querySelector(".modals");
  const closeBtn = document.querySelectorAll(".close-btn");
  const printBtn = document.querySelector("#print-btn");
  const printFrame = document.querySelector("#print-frame");
  const body = document.querySelector("body");
  const items = [];

  const createModal = () => {
    const getElements = new GetElems();
    //Get items from db
    getElements.getItems().then((data) => filterElems(data));
  };

  const openModal = (modal) => {
    modal.style.display = "flex";
    body.classList.add("no-scroll");
  };
  const closeModal = () => {
    modals.forEach((item) => {
      item.style.display = "none";
    });
    body.classList.remove("no-scroll");
  };

  const filterElems = (data) => {
    document.addEventListener("click", (e) => {
      const target = e.target;
      if (target.classList.contains("open-btn")) {
        const elem = data.filter((item) => {
          return item.id == target.parentNode.parentNode.parentNode.dataset.id;
        });
        renderItem(elem[0]);
      }
    });
  };

  const renderItem = (elem) => {
    const { id, category, title, year, sliderImg, text } = elem;

    const div = document.createElement("div");
    div.classList.add("modal");
    div.dataset.modal = "work";
    div.innerHTML = `
    <div class="modal__dialog">
    <div class="modal-work " data-id=${id}>
    <i class="far fa-times-circle close-btn-proj"></i>

    <div class="modal-work__preview">

      <img
        class="modal-work__preview--photo fade"
        src="
        ${sliderImg[0]}"
        alt=""
      />
      <img
        class="modal-work__preview--photo fade"
        src="${sliderImg[1]}"
        alt=""
      />
      <img
        class="modal-work__preview--photo fade"
        src="${sliderImg[2]}"
        alt=""
      />
      <div class="modal-work__dots">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      </div>
    </div>

      <div class="modal-work__content">
        <div class="modal-work__header">
          <h3 class="modal-work__header-title">${title}</h3>
          <div class="modal-work__header-info">
            ${category} | ${year}
          </div>
        </div>

        <div class="modal-work__text">
        ${text}

      </div>
    </div>
    </div>
  `;
    modalsWrap.appendChild(div);
    items.push(div);
    openModal(div);
    slider();
  };
  const print = (e) => {
    e.preventDefault();
    printFrame.contentWindow.focus();
    printFrame.contentWindow.print();
  };
  createModal();
  closeBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
      closeModal(e);
    });
  });
  openResumeBtns.forEach((item) =>
    item.addEventListener("click", () => {
      openModal(modalResume);
    })
  );
  openContactBtns.forEach((item) =>
    item.addEventListener("click", () => {
      openModal(modalContact);
    })
  );
  document.addEventListener("click", (e) => {
    const target = e.target;

    if (
      target.classList.contains("close-btn-proj") ||
      target.getAttribute("data-modal") === "work"
    ) {
      items[0].parentNode.removeChild(items[0]);
      items.splice(0, 1);
      body.classList.remove("no-scroll");
    }
  });

  printBtn.addEventListener("click", print);
};

export default modals;
