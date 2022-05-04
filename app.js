const btn1 = document.getElementById("btnPlayer1");
const btn2 = document.getElementById("btnPlayer2");
const btnReset = document.getElementById("btnReset");

const spanP1 = document.querySelector(".spanPlayer1");
const spanP2 = document.querySelector(".spanPlayer2");
const inputScore = document.getElementById("winScore");
const image = document.querySelector(".image");
const text = document.querySelector("h1");

inputScore.focus();

btn1.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputScore.value > 10 || inputScore.value < 1) {
    alert("Score to Win: must be between 1 and 10");
    inputScore.value = "5";
    return;
  }
  
  spanP1.innerHTML++;
  if (spanP1.innerHTML == inputScore.value) {
    image.style.backgroundImage = "url(./img/wingiphy.gif)";
    image.style.width = "35em";
    text.innerHTML = "WINNER : PLAYER 1 !";
    text.style.color = "green";
    spanP1.style.color = "green";
    spanP2.style.color = "red";
    btn1.style.opacity = "0.5";
    btn2.style.opacity = "0.5";
    btn1.disabled = true;
    btn2.disabled = true;
  }
});

btn2.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputScore.value > 10 || inputScore.value < 1) {
    alert("Score to Win: must be between 1 and 10");
    inputScore.value = "5";
    return;
  }
  
  spanP2.innerHTML++;
  if (spanP2.innerHTML == inputScore.value) {
    image.style.backgroundImage = "url(./img/wingiphy.gif)";
    image.style.width = "35em";
    text.innerHTML = "WINNER : PLAYER 2 !";
    text.style.color = "green";
    spanP1.style.color = "red";
    spanP2.style.color = "green";
    btn1.style.opacity = "0.5";
    btn2.style.opacity = "0.5";
    btn1.disabled = true;
    btn2.disabled = true;
  }
});

btnReset.addEventListener("click", ()=>{location.reload();});
