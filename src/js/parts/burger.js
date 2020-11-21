const burger = () => {
  const nav = document.querySelector(".nav"),
    burger = document.querySelector(".burger");

  burger.addEventListener("click", (e) => {
    e.preventDefault();
    nav.classList.toggle("active");
  });
};
export default burger;
