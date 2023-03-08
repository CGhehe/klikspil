"use strict";

window.addEventListener("load", ready);

let points = 0;
let lives = 0;

function ready() {
  console.log("JavaScript ready!");
  document.querySelector("#btn_start").addEventListener("click", startGame);
  document.querySelector("#btn_restart").addEventListener("click", startGame);
  document.querySelector("#btn_go_to_start").addEventListener("click", showStartScreen);
}

function showGameScreen() {
  // Skjul startskærm, game over og level complete
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}

function showStartScreen() {
  // fjern hidden fra startskærm og tilføj til game over og level complete
  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}

function resetLives() {
  // sæt lives til 3
  lives = 3;
  //nulstil visning af liv (hjerte vi ser)
  document.querySelector("#heart1").classList.remove("broken_heart");
  document.querySelector("#heart2").classList.remove("broken_heart");
  document.querySelector("#heart3").classList.remove("broken_heart");
  document.querySelector("#heart1").classList.add("active_heart");
  document.querySelector("#heart2").classList.add("active_heart");
  document.querySelector("#heart3").classList.add("active_heart");
}

function resetPoints() {
  // nulstil point
  points = 0;
  // nulstil vising af point
  displayPoints();
}

function resetPoints() {
  // nulstil point
  points = 0;
  // nulstil vising af point
  displayPoints();
}

function startGame() {
  resetLives();
  resetPoints();
  showGameScreen();

  // Start baggrundsmusik
  document.querySelector("#sound_baggrund").play();
  // start alle animationer
  startAllAnimations();

  // start timer
  startTimer();

  // Registrer click
  document.querySelector("#point1_container").addEventListener("click", clickPoint);
  document.querySelector("#point2_container").addEventListener("click", clickPoint);
  document.querySelector("#point3_container").addEventListener("click", clickPoint);
  document.querySelector("#bomb_container").addEventListener("click", clickBomb);
  document.querySelector("#heart_container").addEventListener("click", clickHeart);

  // Registrer når bunden rammes
  document.querySelector("#point1_container").addEventListener("animationiteration", pointRestart);
  document.querySelector("#point2_container").addEventListener("animationiteration", pointRestart);
  document.querySelector("#point3_container").addEventListener("animationiteration", pointRestart);
}

function startAllAnimations() {
  // Start falling animationer
  document.querySelector("#point1_container").classList.add("falling");
  document.querySelector("#point2_container").classList.add("falling");
  document.querySelector("#point3_container").classList.add("falling");
  document.querySelector("#bomb_container").classList.add("falling");
  document.querySelector("#heart_container").classList.add("falling");

  // Sæt position klasser
  document.querySelector("#point1_container").classList.add("position1");
  document.querySelector("#point2_container").classList.add("position2");
  document.querySelector("#point3_container").classList.add("position3");
  document.querySelector("#bomb_container").classList.add("position4");
  document.querySelector("#heart_container").classList.add("position5");
}








function clickPoint() {
  console.log("Click point");
  // Brug en point variabel i stedet for gentagne querySelectors
  const point = this; // document.querySelector("#point_container");

  // Forhindr gentagne clicks
  point.removeEventListener("click", clickPoint);

  // Stop point container
  point.classList.add("paused");

  // sæt forsvind-animation på sprite
  point.querySelector("img").classList.add("zoom_out");

  // når forsvind-animation er færdig: pointGone
  point.addEventListener("animationend", pointGone);

  // Genstart mønt-lyd
  document.querySelector("#sound_yea_buddy").currentTime = 0;
  // Afspil mønt-lyd
  document.querySelector("#sound_yea_buddy").play();

  // Giv point
  incrementPoints();
}


function pointGone() {
  console.log("point gone");
  // Brug en point variabel i stedet for gentagne querySelectors
  const point = this; //document.querySelector("#point1_container");
  // fjern event der bringer os herind
  point.removeEventListener("animationend", pointGone);

  // fjern forsvind-animation på sprite
  point.querySelector("img").classList.remove("zoom_out");

  // fjern pause
  point.classList.remove("paused");

  pointRestart.call(this);

  // gør det muligt at klikke på point igen
  point.addEventListener("click", clickPoint);
}

function pointRestart() {
  console.log("point restart");
  const point = this;

  // genstart falling animation
  point.classList.remove("falling");
  point.offsetWidth;
  point.classList.add("falling");

  // fjern alle positioner
  point.classList.remove("position1", "position2", "position3", "position4", "position5");

  // sæt position til en ny klasse
  const p = Math.ceil(Math.random() * 5);
  point.classList.add(`position${p}`);
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

  // Genstart bombe-lyd
  document.querySelector("#sound_bomb").currentTime = 0;
  // Afspil bombe-lyd
  document.querySelector("#sound_bomb").play();

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

    // Genstart success-lyd
    document.querySelector("#sound_pump").currentTime = 0;
    // Afspil success-lyd
    document.querySelector("#sound_pump").play();
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
  console.log("har nu " + points + " point");
  displayPoints();

  if (points === 10) {
      levelComplete();
  }
}

function displayPoints() {
  console.log("vis point");
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
  stopGame();
  document.querySelector("#sound_gameover").play();
}

function levelComplete() {
  console.log("Level Complete");
  document.querySelector("#level_complete").classList.remove("hidden");
  stopGame();
  document.querySelector("#sound_levelcomplete").play();
}


function stopGame() {
  // Stop animationer
  document.querySelector("#point1_container").classList.remove("falling");
  document.querySelector("#point2_container").classList.remove("falling");
  document.querySelector("#point3_container").classList.remove("falling");
  document.querySelector("#bomb_container").classList.remove("falling");
  document.querySelector("#heart_container").classList.remove("falling");

  // Fjern click
  document.querySelector("#point1_container").removeEventListener("click", clickPoint);
  document.querySelector("#point2_container").removeEventListener("click", clickPoint);
  document.querySelector("#point3_container").removeEventListener("click", clickPoint);
  document.querySelector("#bomb_container").removeEventListener("click", clickBomb);
  document.querySelector("#heart_container").removeEventListener("click", clickHeart);

  // Stop og nulstil lyde, fx baggrundsmusik
  document.querySelector("#sound_baggrund").pause();
  document.querySelector("#sound_baggrund").currentTime = 0;

  // nulstil timer - fjern animationen fra timeren (fjern klassen shrink fra time_sprite)
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
  // Sæt timer-animationen (shrink) i gang ved at tilføje klassen shrink til time_sprite
  document.querySelector("#time_sprite").classList.add("shrink");

  // Tilføj en eventlistener som lytter efter at animationen er færdig (animationend) og kalder funktionen timeIsUp
  document.querySelector("#time_sprite").addEventListener("animationend", timeIsUp);
}

function timeIsUp() {
  console.log("Tiden er gået!");

  if (points >= 10) {
      levelComplete();
  } else {
      gameOver();
  }
}