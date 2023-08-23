const modal = document.querySelector(".modal");
const close_button = document.querySelector(".close_button");
const open_button = document.querySelector(".open_button");

open_button.addEventListener("click", () => {
  modal.showModal();
  console.log("open");
});

close_button.addEventListener("click", () => {
  modal.close();
  console.log("close");
});
