import "./style.scss";
document.addEventListener("DOMContentLoaded", function (event) {
  const word = document.getElementById("word");

  const text = "comming soon";
  const textArr = text.toUpperCase().split("");
  // const textArr = text.toUpperCase().split('').map((char , ind) => `<span class="rotated" data-num="${ind}">${char == " " ? "&nbsp" : char }</span>`)

  let counter = 0;
  const screenWord = [];

setTimeout(() => {
  const interval = setInterval(() => {
    if (counter < textArr.length) {
      screenWord.push(textArr[counter]);
      counter++;
      word.textContent = screenWord.join("");
    } else {
      setTimeout(() => {
        word.style.border = "none"
      }, 200);
      clearInterval(interval);
    }
  }, 150);
}, 2000);

  // word.innerHTML = textArr.join("");
  // const interval = setInterval(() => {
  //   const element = document.querySelector(`h4 span[data-num="${counter}"]`);
  //   console.log(element);
  //   if (element) {
  //     element.classList.remove("rotated");
  //     counter++;
  //   } else {
  //     clearInterval(interval);
  //   }
  // }, 250);

  // Set the date we're counting down to
  const countDownDate = new Date("2024-07-15T00:00:00").getTime();
  // Update the countdown every 1 second
  const countdownFunction = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("days").innerText = days
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").innerText = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").innerText = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").innerText = seconds
      .toString()
      .padStart(2, "0");

    // If the countdown is over, write some text
    if (distance < 0) {
      clearInterval(countdownFunction);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);
});
