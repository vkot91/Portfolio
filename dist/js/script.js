/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parts_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/nav */ "./src/js/parts/nav.js");
/* harmony import */ var _parts_works__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/works */ "./src/js/parts/works.js");
/* harmony import */ var _parts_modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/modals */ "./src/js/parts/modals.js");
/* harmony import */ var _parts_burger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/burger */ "./src/js/parts/burger.js");




document.addEventListener("DOMContentLoaded", () => {
  Object(_parts_nav__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_parts_works__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_parts_modals__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_parts_burger__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

/***/ }),

/***/ "./src/js/parts/GetElems.js":
/*!**********************************!*\
  !*** ./src/js/parts/GetElems.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GetElems; });
class GetElems {
  async getItems() {
    const result = await fetch("../database/db.json").then(response => response.json()).catch(error => {
      console.log(error);
    });
    return result;
  }

}

/***/ }),

/***/ "./src/js/parts/burger.js":
/*!********************************!*\
  !*** ./src/js/parts/burger.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const burger = () => {
  const nav = document.querySelector(".nav"),
        burger = document.querySelector(".burger");
  burger.addEventListener("click", e => {
    e.preventDefault();
    nav.classList.toggle("active");
  });
};

/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ }),

/***/ "./src/js/parts/modals.js":
/*!********************************!*\
  !*** ./src/js/parts/modals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GetElems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetElems */ "./src/js/parts/GetElems.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ "./src/js/parts/slider.js");



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
    const getElements = new _GetElems__WEBPACK_IMPORTED_MODULE_0__["default"](); //Get items from db

    getElements.getItems().then(data => filterElems(data));
  };

  const openModal = modal => {
    modal.style.display = "flex";
    body.classList.add("no-scroll");
  };

  const closeModal = () => {
    modals.forEach(item => {
      item.style.display = "none";
    });
    body.classList.remove("no-scroll");
  };

  const filterElems = data => {
    document.addEventListener("click", e => {
      const target = e.target;

      if (target.classList.contains("open-btn")) {
        const elem = data.filter(item => {
          return item.id == target.parentNode.parentNode.parentNode.dataset.id;
        });
        renderItem(elem[0]);
      }
    });
  };

  const renderItem = elem => {
    const {
      id,
      category,
      title,
      year,
      sliderImg,
      text
    } = elem;
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
    Object(_slider__WEBPACK_IMPORTED_MODULE_1__["default"])();
  };

  const print = e => {
    e.preventDefault();
    printFrame.contentWindow.focus();
    printFrame.contentWindow.print();
  };

  createModal();
  closeBtn.forEach(item => {
    item.addEventListener("click", e => {
      closeModal(e);
    });
  });
  openResumeBtns.forEach(item => item.addEventListener("click", () => {
    openModal(modalResume);
  }));
  openContactBtns.forEach(item => item.addEventListener("click", () => {
    openModal(modalContact);
  }));
  document.addEventListener("click", e => {
    const target = e.target;

    if (target.classList.contains("close-btn-proj") || target.getAttribute("data-modal") === "work") {
      items[0].parentNode.removeChild(items[0]);
      items.splice(0, 1);
      body.classList.remove("no-scroll");
    }
  });
  printBtn.addEventListener("click", print);
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/parts/nav.js":
/*!*****************************!*\
  !*** ./src/js/parts/nav.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const nav = () => {
  const linkBtns = document.querySelectorAll(".nav__link");

  const toggleActive = activeItem => {
    linkBtns.forEach(item => {
      item.classList.remove("active");
    });
    activeItem.classList.add("active");
  };

  linkBtns.forEach(item => {
    item.addEventListener("click", () => {
      toggleActive(item);
    });
  });
  const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
        animationTime = 300,
        framesCount = 20;
  anchors.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      let coordY = document.querySelector(item.getAttribute("href")).getBoundingClientRect().top + window.pageYOffset;
      let scroller = setInterval(function () {
        let scrollBy = coordY / framesCount;

        if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
          window.scrollBy(0, scrollBy);
        } else {
          window.scrollTo(0, coordY);
          clearInterval(scroller);
        }
      }, animationTime / framesCount);
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (nav);

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const slider = () => {
  const slides = document.querySelectorAll(".modal-work__preview--photo"),
        dotsWrap = document.querySelector(".modal-work__dots"),
        dots = document.querySelectorAll(".dot");
  let slideIndex = 1;
  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(slide => {
      slide.style.display = "none";
    });
    dots.forEach(item => {
      item.classList.remove("dot-active");
    });
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("dot-active");
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  dotsWrap.addEventListener("click", function (event) {
    for (let i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains("dot") && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/parts/works.js":
/*!*******************************!*\
  !*** ./src/js/parts/works.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GetElems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetElems */ "./src/js/parts/GetElems.js");


const works = () => {
  const portfolio = document.querySelector(".works__portfolio");
  const getElements = new _GetElems__WEBPACK_IMPORTED_MODULE_0__["default"]();
  const spinner = document.getElementById("spinner");
  console.log(spinner); //Get items from db

  spinner.removeAttribute("hidden");
  getElements.getItems(spinner).then(data => {
    renderCards(data);
    spinner.setAttribute("hidden", "");
  });

  const createElements = (id, category, title, year, gitLink, link, img, alt) => {
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
                 ${gitLink ? `<a href=${gitLink} class="overlay__link"><i class="fab fa-github-alt"></i></a>` : ""}
                 
                 ${link ? `<a href=${link} class="overlay__link" ><i class="fas fa-desktop"></i></a>` : ""}
                  <button type="button" class="btn-trans"><i class="open-btn fas fa-inbox"></i></button> 
                  </div>
              </div>
            
      `;
    portfolio.appendChild(div);
  };

  const renderCards = items => {
    if (!items) {
      console.log("hello world!!");
    }

    items.forEach(item => {
      const {
        id,
        category,
        title,
        year,
        gitLink,
        link,
        img,
        alt
      } = item;
      createElements(id, category, title, year, gitLink, link, img, alt);
    });
  };
};

/* harmony default export */ __webpack_exports__["default"] = (works);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map