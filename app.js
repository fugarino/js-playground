const countDownTimer = (() => {
  // Selectors
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");
  const startBtn = document.getElementById("startBtn");
  const inputContainer = document.querySelector(".inputs");
  const live = document.querySelector(".live");
  const h = document.querySelector(".h");
  const m = document.querySelector(".m");
  const s = document.querySelector(".s");

  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  let timer;

  // Functions
  const setDisplay = (hours, minutes, seconds) => {
    h.textContent = hours < 10 ? `0${hours}` : hours;
    m.textContent = minutes < 10 ? `0${minutes}` : minutes;
    s.textContent = seconds < 10 ? `0${seconds}` : seconds;
  };

  const changeClasses = () => {
    inputContainer.classList.remove("active");
    live.classList.remove("closed");
    inputContainer.classList.add("closed");
    live.classList.add("active");
  };

  const fn = () => {
    setDisplay(hours, minutes, seconds - 1);
    seconds--;

    if (seconds === 0) {
      minutes--;
      seconds = 60;
    }
    if (minutes === -1) {
      hours--;
      minutes = 59;
    }
    if (hours === -1) {
      clearInterval(timer);
    }
  };

  // EventListeners
  hoursElement.addEventListener("input", (e) => (hours = e.target.value));
  minutesElement.addEventListener("input", (e) => (minutes = e.target.value));
  secondsElement.addEventListener("input", (e) => (seconds = e.target.value));
  startBtn.addEventListener("click", () => {
    changeClasses();
    setDisplay(hours, minutes, seconds);
    timer = setInterval(fn, 1000);
  });
})();
