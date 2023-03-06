"use strict";

window.addEventListener("load", start);

let points = 0;
let lives = 0;

function start() {
   console.log("JavaScript kører");

   points = 0;
   lives = 3;
   points = 0;
   lives = 3;

   document.querySelector("#point1_container").classList.add("falling");
   document.querySelector("#point2_container").classList.add("falling");
   document.querySelector("#point3_container").classList.add("falling");
   document.querySelector("#bomb_container").classList.add("falling");
   document.querySelector("#heart_container").classList.add("falling");
   //    document.querySelector("#point1_container").classList.add("falling");
   //    document.querySelector("#point2_container").classList.add("falling");
   //    document.querySelector("#point3_container").classList.add("falling");
   //    document.querySelector("#bomb_container").classList.add("falling");
   //    document.querySelector("#heart_container").classList.add("falling");

   document;
   document.querySelector("#point1_container").addEventListener("click", clickPoint);
   document;
   document.querySelector("#point2_container").addEventListener("click", clickPoint2);
   document;
   document.querySelector("#point3_container").addEventListener("click", clickPoint3);
   document.querySelector("#bomb_container").addEventListener("click", clickBomb);
   document;
   points = 0;
   lives = 3;

   document.querySelector("#point1_container").classList.add("falling");
   document.querySelector("#point2_container").classList.add("falling");
   document.querySelector("#point3_container").classList.add("falling");
   document.querySelector("#bomb_container").classList.add("falling");
   document.querySelector("#heart_container").classList.add("falling");

   document.querySelector("#point1_container").addEventListener("click", clickPoint);
   document.querySelector("#point2_container").addEventListener("click", clickPoint2);
   document.querySelector("#point3_container").addEventListener("click", clickPoint3);
   document.querySelector("#bomb_container").addEventListener("click", clickBomb);
   document.querySelector("#heart_container").addEventListener("click", clickHeart);
}

function clickPoint() {
   console.log("Click point");
   document.querySelector("#point1_container").removeEventListener("click", clickPoint);
   document.querySelector("#point1_container").classList.add("paused");
   document.querySelector("#point1_sprite").classList.add("zoom_out");
   document.querySelector("#point1_container").addEventListener("animationend", pointGone);
   incrementPoints();
}
function clickPoint2() {
   console.log("Click point2");
   document.querySelector("#point2_container").removeEventListener("click", clickPoint2);
   document.querySelector("#point2_container").classList.add("paused");
   document.querySelector("#point2_sprite").classList.add("zoom_out");
   document.querySelector("#point2_container").addEventListener("animationend", pointGone);
   incrementPoints();
}
function clickPoint3() {
   console.log("Click point3");
   document.querySelector("#point3_container").removeEventListener("click", clickPoint3);
   document.querySelector("#point3_container").classList.add("paused");
   document.querySelector("#point3_sprite").classList.add("zoom_out");
   document.querySelector("#point3_container").addEventListener("animationend", pointGone);
   incrementPoints();
}

function clickPoint4() {
   console.log("Click point4");
   document.querySelector("#point4_container").removeEventListener("click", clickPoint4);
   document.querySelector("#point4_container").classList.add("paused");
   document.querySelector("#point4_sprite").classList.add("zoom_out");
   document.querySelector("#point4_container").addEventListener("animationend", pointGone);
   incrementPoints();
}

function point4Gone() {
   document.querySelector("#point4_container").removeEventListener("animationend", pointGone);
   incrementPoints();
}

document.querySelector("#point4_sprite").classList.remove("zoom_out");
document.querySelector("#point4_container").classList.remove("paused");
document.querySelector("#point4_container").classList.remove("falling");
document.querySelector("#point4_container").offsetWidth;
document.querySelector("#point4_container").classList.add("falling");
document.querySelector("#point4_container").addEventListener("click", clickPoint4);
incrementPoints();

function pointGone() {
   document.querySelector("#point1_container").removeEventListener("animationend", pointGone);
   incrementPoints();
}

document.querySelector("#point1_sprite").classList.remove("zoom_out");
document.querySelector("#point1_container").classList.remove("paused");
document.querySelector("#point1_container").classList.remove("falling");
document.querySelector("#point1_container").offsetWidth;
document.querySelector("#point1_container").classList.add("falling");
document.querySelector("#point1_container").addEventListener("click", clickPoint);


function point2Gone() {
   document.querySelector("#point2_container").removeEventListener("animationend", point2Gone);
}

document.querySelector("#point2_sprite").classList.remove("zoom_out");
document.querySelector("#point2_container").classList.remove("paused");
document.querySelector("#point2_container").classList.remove("falling");
document.querySelector("#point2_container").offsetWidth;
document.querySelector("#point2_container").classList.add("faling");
document.querySelector("#point2_container").addEventListener("click", clickPoint2);

function point3Gone() {
   document.querySelector("#point3_container").removeEventListener("animationend", point3Gone);
}

document.querySelector("#point3_sprite").classList.remove("zoom_out");
document.querySelector("#point3_container").classList.remove("paused");
document.querySelector("#point3_container").classList.remove("falling");
document.querySelector("#point3_container").offsetWidth;
document.querySelector("#point3_container").classList.add("faling");
document.querySelector("#point3_container").addEventListener("click", clickPoint3);

function clickBomb() {
   console.log("Click bomb");
   document.querySelector("#bomb_container").removeEventListener("click", clickBomb);
   document.querySelector("#bomb_container").classList.add("paused");
   document.querySelector("#bomb_sprite").classList.add("zoom_in");

   document.querySelector("#bomb_container").addEventListener("animationend", bombGone);

   decrementLives();
}

function bombGone() {
   document.querySelector("#bomb_container").removeEventListener("animationend", bombGone);

   document.querySelector("#bomb_sprite").classList.remove("zoom_in");
   document.querySelector("#bomb_container").classList.remove("paused");
   document.querySelector("#bomb_container").classList.remove("falling");
   document.querySelector("#bomb_container").offsetWidth;
   document.querySelector("#bomb_container").classList.add("falling");
   document.querySelector("#bomb_container").addEventListener("click", clickBomb);
}

function clickHeart() {
   console.log("Click heart");
   document.querySelector("#heart_container").removeEventListener("click", clickHeart);
   document.querySelector("#heart_container").classList.add("paused");
   document.querySelector("#heart_sprite").classList.add("zoom_in");
   document.querySelector("#heart_container").addEventListener("animationend", heartGone);

   if (lives < 3) {
      incrementLives();
   }
}

function heartGone() {
   document.querySelector("#heart_container").removeEventListener("animationend", heartGone);

   document.querySelector("#heart_sprite").classList.remove("zoom_in");
   document.querySelector("#heart_container").classList.remove("paused");
   document.querySelector("#heart_container").classList.remove("falling");
   document.querySelector("#heart_container").offsetWidth;
   document.querySelector("#heart_container").classList.add("falling");
   document.querySelector("#heart_container").addEventListener("click", clickHeart);
}

function incrementPoints() {
   console.log("Giv point");
   points++;
   console.log("har nu " + points + " point");
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
   console.log("Mist et liv");
   if (lives <= 1) {
      gameOver();
   }

   showDecrementedlives();
   lives--;
}

function incrementLives() {
   console.log("Få et liv");
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
   stop();
}

function levelComplete() {
   console.log("Level Complete");
   document.querySelector("#level_complete").classList.remove("hidden");
   stop();
}

function stop() {
   document.querySelector("#point1_container").classList.remove("falling");
   document.querySelector("#point2_container").classList.remove("falling");
   document.querySelector("#point3_container").classList.remove("falling");
   document.querySelector("#bomb_container").classList.remove("falling");
   document.querySelector("#heart_container").classList.remove("falling");

   document.querySelector("#point1_container").removeEventListener("click", clickPoint);
   document.querySelector("#point2_container").removeEventListener("click", clickPoint2);
   document.querySelector("#point3_container").removeEventListener("click", clickPoint3);
   document.querySelector("#bomb_container").removeEventListener("click", clickBomb);
   document.querySelector("#heart_container").removeEventListener("click", clickHeart);
}
