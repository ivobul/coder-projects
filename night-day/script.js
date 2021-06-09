const sky = document.querySelector("#sky");
const orb = document.querySelector("#orb");
const moonspot1 = document.querySelector("#moonspot1");
const moonspot2 = document.querySelector("#moonspot2");
const moonspot3 = document.querySelector("#moonspot3");

orb.addEventListener("click", () => {
  changeBackground();
  addRemoveVisibility();
});

function changeBackground() {
  if (orb.classList.contains('sun') && sky.classList.contains("day")) {
    orb.classList.replace("sun", "moon");
    sky.classList.replace("day", "night");
  }
  else {
    orb.classList.replace("moon", "sun");
    sky.classList.replace("night", "day");
  }
}

function addRemoveVisibility() {
  if (moonspot1.classList.contains('visible') && moonspot2.classList.contains('visible') && moonspot3.classList.contains('visible')) {
    moonspot1.classList.remove("visible");
    moonspot2.classList.remove("visible");
    moonspot3.classList.remove("visible");
  }    
  else {
    moonspot1.classList.add("visible");
    moonspot2.classList.add("visible");
    moonspot3.classList.add("visible");
  }
}