var countDownDate = new Date("Jun 10, 2019 15:00:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
  var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "به زودی!";
  } else {
  document.getElementById("ss").innerHTML = seconds;
  document.getElementById("mm").innerHTML = minutes;
  document.getElementById("hh").innerHTML = hours;
  document.getElementById("dd").innerHTML = days;
  document.getElementById("ww").innerHTML = weeks;
}

}, 1000);
