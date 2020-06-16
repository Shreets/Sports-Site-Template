var deadline = new Date("Nov 22,2022 12:00:00").getTime();

var calcumation = setInterval(() => {
  var now = new Date().getTime();

  var interval = deadline - now;

  var week = Math.floor(interval / (1000 * 7 * 24 * 60 * 60));
  var day = Math.floor(
    (interval % (1000 * 7 * 24 * 60 * 60)) / (1000 * 60 * 60 * 24)
  );
  var hour = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((interval % (1000 * 60)) / 1000);

  console.log(deadline);

  document.getElementById("week").textContent = week;
  document.getElementById("day").textContent = day;
  document.getElementById("hour").textContent = hour;
  document.getElementById("min").textContent = min;
  document.getElementById("sec").textContent = sec;
}, 1000);
