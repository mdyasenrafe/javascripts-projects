const digitalClock = () => {
  // set date and time and minitues and seconds
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let timeFormat = "AM";
  //   conditions
  if (hours > 12) {
    hours = hours - 12;
    timeFormat = "PM";
  }
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  //   let finalTime = `${hours}:${minutes}:${seconds}`;

  //   set value in inner html
  //   document.getElementById("time").innerHTML = finalTime;
  document.getElementById("hours").innerHTML = `${hours}:`;
  document.getElementById("minutes").innerHTML = `${minutes}:`;
  document.getElementById("seconds").innerHTML = `${seconds}:`;
  document.getElementById("timeFormat").innerHTML = timeFormat;

  setInterval(digitalClock, 1000);
};
digitalClock();
