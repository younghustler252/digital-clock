let is24Hour = false;

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let amPm = "";

  if (!is24Hour) {
    amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let timeString = hours + ":" + minutes + ":" + seconds;
  if (!is24Hour) timeString += " " + amPm;

  document.getElementById('digital-clock').textContent = timeString;
  console.log("Time:", timeString);
}

updateClock();
setInterval(updateClock, 1000);

document.getElementById("toggle-format").addEventListener("click", function () {
  is24Hour = !is24Hour; // ✅ fixed!
  this.textContent = is24Hour ? "Switch to 12-Hour" : "Switch to 24-Hour";
  updateClock(); // 🔄 refresh immediately after switching
});

    updateClock();
    setInterval(updateClock,1000)


    document.getElementById("toggle-format").addEventListener("click", function () {
      is24Hour = !is24Hour
      this.textContent = is24Hour ? "Switch to 12-Hour" : "Switch to 24-Hour";
    })
    updateClock();