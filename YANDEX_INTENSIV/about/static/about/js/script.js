start_button = document.getElementById("start_button");
start_button.classList.add("active");
hobbies_button = document.getElementById("hobbies_button");
experience_button = document.getElementById("experience_button");

function getBodyScrollTop() {
  return (
    self.pageYOffset ||
    (document.documentElement && document.documentElement.scrollTop) ||
    (document.body && document.body.scrollTop)
  );
}
window.addEventListener("scroll", (evt) => {
  let x_pos = getBodyScrollTop();
  if (x_pos < 500) {
    start_button.classList.add("active");
    hobbies_button.classList.remove("active");
    experience_button.classList.remove("active");
  } else if (x_pos < 1600) {
    start_button.classList.remove("active");
    hobbies_button.classList.add("active");
    experience_button.classList.remove("active");
  } else {
    start_button.classList.remove("active");
    hobbies_button.classList.remove("active");
    experience_button.classList.add("active");
  }
});
