const time = document.getElementsByClassName("time")[0],
  datePlace = document.getElementsByClassName("date")[0],
  author = document.getElementsByClassName("title_author")[0],
  title = document.getElementsByClassName("title_name")[0],
  background = document.querySelector("body"),
  AMPMContainer = document.getElementById("amPm");
function setTime() {
  const date = new Date(),
    hours = 12 - 24 + date.getHours(),
    AMPM = date.getHours() >= 12 ? "PM" : "AM";
  time.innerText = `${addZero(hours)}:${addZero(date.getMinutes())}:${addZero(
    date.getSeconds()
  )}`;
  AMPMContainer.innerText = AMPM;
  setTimeout(setTime, 1000);
}
function addZero(count) {
  return count > 9 ? count : `0` + count;
}
function setDate() {
  const date = new Date();
  datePlace.innerText = `${date.getDate()}.${date.getMonth() +
    1}.${date.getFullYear()}`;
}
function setTitle() {
  const date = new Date(),
    hours = date.getHours();
  if (hours < 10) {
    background.style.color = "#000";
    background.style.background = `url('./src/assets/roland-hechanova-f372RxIk18U-unsplash.jpg') no-repeat center/ cover`;
    title.innerText = "Good morning!";
  } else if (hours < 15) {
    background.style.color = "rgba(255,255,255,1)";
    background.style.background = `url('./src/assets/arnaud-mariat-VZvWjqh-wJU-unsplash.jpg') no-repeat center/ cover`;
    title.innerText = "Good afternoon!";
  } else if (hours < 22) {
    background.style.background = `url('./src/assets/lerone-pieters-XVaXbzQul90-unsplash.jpg') no-repeat center/ cover`;
    title.innerText = "Good evening!";
  } else {
    background.style.background = `url('./src/assets/blake-carpenter-oJbglDa4cO0-unsplash.jpg') no-repeat center/ cover`;
    title.innerText = "Good night!";
  }
}
author.addEventListener("keypress", setName);
author.addEventListener("blur", setName);
function setName(ev) {
  if (ev.type === "keypress") {
    if (ev.keyCode === 13) {
      localStorage.setItem("name", ev.currentTarget.innerText);
      author.blur();
    }
  } else {
    if (ev.currentTarget.innerText.length > 3) {
      localStorage.setItem("name", ev.currentTarget.innerText);
    } else {
      author.textContent = "[Enter your Name]";
    }
  }
}
function getName() {
  if (
    localStorage.getItem("name") === null ||
    localStorage.getItem("name") === ""
  ) {
    author.textContent = "[Enter your Name]";
  } else {
    author.textContent = localStorage.getItem("name");
  }
}
setTime();
setDate();
setTitle();
getName();
