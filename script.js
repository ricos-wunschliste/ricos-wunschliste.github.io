////////////////////////////
// TOGGLE STATE SPEICHERN //
////////////////////////////
const checkboxes = document.querySelectorAll("input[type=checkbox]");

// Save the current state of all checkboxes to local storage
function saveCheckboxStates() {
  checkboxes.forEach(saveCheckboxState);
}

// Save an individual checkbox state
function saveCheckboxState(checkbox) {
  localStorage.setItem(checkbox.value, checkbox.checked);
}

// Load and restore the state of all checkboxes from local storage
function loadCheckboxStates() {
  checkboxes.forEach(loadCheckboxState);
}

// Load an individual checkbox state and update UI
function loadCheckboxState(checkbox) {
  const savedState = localStorage.getItem(checkbox.value);
  checkbox.checked = savedState === "true";

  updateCheckboxUI(checkbox);
}

// Update the checkbox UI based on its state
function updateCheckboxUI(checkbox) {
  const checkboxElement = document.getElementById(checkbox.value);
  if (checkbox.checked) {
    checkboxElement.parentNode.parentNode.classList.add("selected");
  } else {
    checkboxElement.parentNode.parentNode.classList.remove("selected");
  }
}

loadCheckboxStates();

// END TOGGLE STATE SPEICHERN //

///////////////
// Countdown //
///////////////

// Set the date counting down to
var countDownDate = new Date("Dec 24, 2025 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  // Add leading zero to seconds if less than 10
  seconds = seconds < 10 ? '0' + seconds : seconds;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  hours = hours < 10 ? '0' + hours : hours;
  days = days < 10 ? '0' + days : days;

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML =
    "<p class=\"countdown-header\">Weihnachtscountdown<br></p>" + 
    days +
    "d " +
    hours +
    "h " +
    minutes +
    "m " +
    seconds +
    "s";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "<p class=\"countdown-header\">🎄🎅🏻Merry Christmas🎅🏻🎄</p>";
  }
}, 1000);
// END COUNTDOWN //

////////////
// SWITCH //
////////////

var $table = document.querySelector("#checkbox-container");

$table.addEventListener("click", function (ev) {
  if (ev.target.tagName == "INPUT") {
    if (ev.target.checked) {
      ev.target.parentNode.parentNode.classList.add("selected");
    } else {
      ev.target.parentNode.parentNode.classList.remove("selected");
    }
  }
});

// END SWITCH //

//////////
// INFO //
//////////

document.addEventListener("DOMContentLoaded", function () {
  const infoIcon = document.getElementById("info-icon");
  const infoBox = document.getElementById("info-box");

  infoIcon.addEventListener("click", function () {
      // Toggle the visibility and animation class
      infoBox.classList.toggle("show");
  });

  // Close the box if clicking outside
  document.addEventListener("click", function (e) {
      if (e.target !== infoIcon && !infoBox.contains(e.target)) {
          infoBox.classList.remove("show");
      }
  });
});

//////////
// SNOW //
//////////

const snowContainer = document.querySelector('.snow-container');

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');

  const size = Math.random() * 10 + 5 + 'px';
  snowflake.style.width = size;
  snowflake.style.height = size;
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.animationDuration = Math.random() * 3 + 5 + 's';
  snowflake.style.opacity = Math.random();

  snowContainer.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 8000);
}

setInterval(createSnowflake, 100);

