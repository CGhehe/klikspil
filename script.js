"use strict";

window.addEventListener("load", ready);

let points = 0;
let lives = 0;



function start() {
  console.log("JavaScript kører");

  points = 0;
  lives = 3;

  resetLives();
  resetPoints();
  showGameScreen();
  startTimer();
  startAllAnimations();


  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");

  document.querySelector("#point1_container").classList.add("falling");
  document.querySelector("#point2_container").classList.add("falling");
  document.querySelector("#point3_container").classList.add("falling");
  document.querySelector("#bomb_container").classList.add("falling");
  document.querySelector("#heart_container").classList.add("falling");

  document;
  document
    .querySelector("#point1_container")
    .addEventListener("click", clickPoint);
  document;
  document
    .querySelector("#point2_container")
    .addEventListener("click", clickPoint2);
  document;
  document
    .querySelector("#point3_container")
    .addEventListener("click", clickPoint3);
  document
    .querySelector("#bomb_container")
    .addEventListener("click", clickBomb);
  document;

  document
    .querySelector("#point1_container")
    .addEventListener("animationiteration", pRestart);
  document
    .querySelector("#point2_container")
    .addEventListener("animationiteration", pRestart);
  document
    .querySelector("#point3_container")
    .addEventListener("animationiteration", pRestart);
  document
    .querySelector("#bomb_container")
    .addEventListener("animationiteration", pRestart);
  document
    .querySelector("#heart_container")
    .addEventListener("animationiteration", pRestart);
}

function startAllAnimations() {
  document.querySelector("#point1_container").classList.add("falling");
  document.querySelector("#point2_container").classList.add("falling");
  document.querySelector("#point3_container").classList.add("falling");
  document.querySelector("#bomb_container").classList.add("falling");
  document.querySelector("#heart_container").classList.add("falling");

  document.querySelector("#point1_container").classList.add("position1");
  document.querySelector("#point2_container").classList.add("position2");
  document.querySelector("#point3_container").classList.add("position3");
  document.querySelector("#bomb_container").classList.add("position4");
  document.querySelector("#heart_container").classList.add("position5");
}

function ready() {
  console.log("JavaScript Kører");
  document.querySelector("#btn_start").addEventListener("click", start);
  document.querySelector("#btn_go_to_start").addEventListener("click", start);
  document.querySelector("#btn_replay").addEventListener("click", start);
  document.querySelector("#btn_level_complete").addEventListener("click", start);
}

function showGameScreen() {
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}

function showStartScreen() {
  document.querySelector("start").classList.remove("hidden");
  document.querySelector("game_over").classList.remove("hidden");
  document.querySelector("level_complete").classList.remove("hidden");
}

function resetLives() {
  lives = 3;

  document.querySelector("#heart1").classList.remove("broken_heart");
  document.querySelector("#heart2").classList.remove("broken_heart");
  document.querySelector("#heart3").classList.remove("broken_heart");
  document.querySelector("#heart1").classList.add("active_heart");
  document.querySelector("#heart2").classList.add("active_heart");
  document.querySelector("#heart3").classList.add("active_heart");
}

function resetPoints() {
  points = 0;
  displayPoints();
}

function clickPoint() {
  console.log("Click point");
  document
    .querySelector("#point1_container")
    .removeEventListener("click", clickPoint);
  document.querySelector("#point1_container").classList.add("paused");
  document.querySelector("#point1_sprite").classList.add("zoom_out");
  document
    .querySelector("#point1_container")
    .addEventListener("animationend", pointGone);
  incrementPoints();
}
function clickPoint2() {
  console.log("Click point2");
  document
    .querySelector("#point2_container")
    .removeEventListener("click", clickPoint2);
  document.querySelector("#point2_container").classList.add("paused");
  document.querySelector("#point2_sprite").classList.add("zoom_out");
  document
    .querySelector("#point2_container")
    .addEventListener("animationend", pointGone);
  incrementPoints();
}
function clickPoint3() {
  console.log("Click point3");
  document
    .querySelector("#point3_container")
    .removeEventListener("click", clickPoint3);
  document.querySelector("#point3_container").classList.add("paused");
  document.querySelector("#point3_sprite").classList.add("zoom_out");
  document
    .querySelector("#point3_container")
    .addEventListener("animationend", pointGone);
  incrementPoints();
}

function pointGone() {
  document
    .querySelector("#point1_container")
    .removeEventListener("animationend", pointGone);
  incrementPoints();
  pRestart.call(this);

  document.querySelector("#point1_sprite").classList.remove("zoom_out");
  document.querySelector("#point1_container").classList.remove("paused");
  document
    .querySelector("#point1_container")
    .addEventListener("click", clickPoint);
}

function point2Gone() {
  document
    .querySelector("#point2_container")
    .removeEventListener("animationend", point2Gone);
  pRestart.call(this);

  document.querySelector("#point2_sprite").classList.remove("zoom_out");
  document.querySelector("#point2_container").classList.remove("paused");
  document
    .querySelector("#point2_container")
    .addEventListener("click", clickPoint2);
}

function point3Gone() {
  document
    .querySelector("#point3_container")
    .removeEventListener("animationend", point3Gone);

  pRestart.call(this);

  document.querySelector("#point3_sprite").classList.remove("zoom_out");
  document.querySelector("#point3_container").classList.remove("paused");
  document
    .querySelector("#point3_container")
    .addEventListener("click", clickPoint3);
}

function clickBomb() {
  console.log("Click bomb");
  document
    .querySelector("#bomb_container")
    .removeEventListener("click", clickBomb);
  document.querySelector("#bomb_container").classList.add("paused");
  document.querySelector("#bomb_sprite").classList.add("zoom_in");

  document
    .querySelector("#bomb_container")
    .addEventListener("animationend", bombGone);

  decrementLives();
}

function bombGone() {
  document
    .querySelector("#bomb_container")
    .removeEventListener("animationend", bombGone);

  document.querySelector("#bomb_sprite").classList.remove("zoom_in");
  document.querySelector("#bomb_container").classList.remove("paused");
  document
    .querySelector("#bomb_container")
    .addEventListener("click", clickBomb);

  pRestart.call(this);
}

function clickHeart() {
  console.log("Click heart");
  document
    .querySelector("#heart_container")
    .removeEventListener("click", clickHeart);
  document.querySelector("#heart_container").classList.add("paused");
  document.querySelector("#heart_sprite").classList.add("zoom_in");
  document
    .querySelector("#heart_container")
    .addEventListener("animationend", heartGone);

  if (lives < 3) {
    incrementLives();
  }
}

function heartGone() {
  document
    .querySelector("#heart_container")
    .removeEventListener("animationend", heartGone);

  document.querySelector("#heart_sprite").classList.remove("zoom_in");
  document.querySelector("#heart_container").classList.remove("paused");
  document
    .querySelector("#heart_container")
    .addEventListener("click", clickHeart);
  pRestart.call(this);
}

function incrementPoints() {
  console.log("Giv point");
  points++;
  console.log("har nu " + points + " points");
  displayPoints();

  if (points >= 10) {
    levelComplete();
  }
}

function displayPoints() {
  console.log("Vis point");
  document.querySelector("#point_count").textContent = points;
}

function decrementLives() {
  console.log("Mist liv");
  if (lives === 0) {
    gameOver();
  }

  showDecrementedlives();
  lives--;
}

function incrementLives() {
  console.log("Få liv");
  lives++;
  showIncrementedLives();
}

function showDecrementedlives() {
  document.querySelector("#heart" + lives).classList.remove("active_heart");
  document.querySelector("#heart" + lives).classList.add("broken_heart");
}

function showIncrementedLives() {
  document.querySelector("#heart" + lives).classList.remove("broken_heart");
  document.querySelector("#heart" + lives).classList.add("active_heart");
}

function gameOver() {
  console.log("Game Over");
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#btn_return").addEventListener("click", start);
  stop();
}

function levelComplete() {
  console.log("Level Complete");
  document.querySelector("#level_complete").classList.remove("hidden");
  document.querySelector("#btn_retry").addEventListener("click", start);
  stop();
}


function stop() {
  isGameRunning = false;
  document.querySelector("#point1_container").classList.remove("falling");
  document.querySelector("#point2_container").classList.remove("falling");
  document.querySelector("#point3_container").classList.remove("falling");
  document.querySelector("#bomb_container").classList.remove("falling");
  document.querySelector("#heart_container").classList.remove("falling");

  document
    .querySelector("#point1_container")
    .removeEventListener("click", clickPoint);
  document
    .querySelector("#point2_container")
    .removeEventListener("click", clickPoint2);
  document
    .querySelector("#point3_container")
    .removeEventListener("click", clickPoint3);
  document
    .querySelector("#bomb_container")
    .removeEventListener("click", clickBomb);
  document
    .querySelector("#heart_container")
    .removeEventListener("click", clickHeart);

  document.querySelector("#time_sprite").classList.remove("shrink");
}

function pRestart() {
  console.log("restart");
  const point = this;

  point.classList.remove("falling");
  point.offsetWidth;
  point.classList.add("falling");

  point.classList.remove(
    "position1",
    "position2",
    "position3",
    "position4",
    "position5"
  );

  const p = Math.ceil(Math.random() * 5);
  point.classList.add(`position${p}`);
}

function startTimer() {
  document.querySelector("#time_sprite").classList.add("shrink");
  document
    .querySelector("#time_sprite")
    .addEventListener("animationend", timeIsUp);
}

function timeIsUp() {
  console.log("times up");
  if (points >= 10) {
    levelComplete();
  } else {
    gameOver();
  }
}