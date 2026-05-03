const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");
const msHand = document.getElementById("ms");

function updateClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const milliseconds = now.getMilliseconds();
  console.log(now);
  // Increment ms hand
  const millAngle = (milliseconds * 360) / 1000;

  //increment second hand
  const secScale = 6 / 1000;
  const secAngle = seconds * 6 + milliseconds * secScale;
  const extraSec = milliseconds * secScale;

  //increment minute hand
  const minScale = 6 / 60000;
  const minAngle =
    minutes * 6 + seconds * minScale + (milliseconds * minScale) / 1000;
  const extraMin = seconds * minScale;

  //increment hour hand
  const hourScale = 30 / 60;
  const hourAngle = minutes * hourScale;
  const extraHour = hours * 30 + hourAngle;

  // Calculate degrees for smooth movement
  // (360 degrees / 60 units) = 6 degrees per unit
  const secDeg = seconds * 6 + milliseconds * 0.006;
  const minDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;
  const msDeg = milliseconds * 0.36; // (360 degrees / 1000 ms) = 0.36 degrees per ms
  secondHand.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
  msHand.style.transform = `translateX(-50%) rotate(${msDeg}deg)`;

  // Request the next frame
  requestAnimationFrame(updateClock);
}

// Start the animation
requestAnimationFrame(updateClock);
