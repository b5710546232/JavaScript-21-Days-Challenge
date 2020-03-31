"use strict";
(() => {
  // เริ่มเขียนโค้ด
  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  function setElementInnerText(id, text) {
    const element = document.getElementById(id)
    element.innerText = text
  }

  function countDonw() {
    const now = new Date().getTime() // get unix time stamp.
    const newYear = new Date(`December 31, 2020, 23:59:59`).getTime()
    const unixTimeLeft = newYear - now;

    setElementInnerText(`days`, Math.floor(unixTimeLeft / DAY));
    setElementInnerText(`hours`, Math.floor((unixTimeLeft % DAY) / HOUR));
    setElementInnerText(`minutes`, Math.floor((unixTimeLeft % HOUR) / MINUTE));
    setElementInnerText(`seconds`, Math.floor((unixTimeLeft % MINUTE) / SECOND));

  }

  function run() {
    setInterval(()=>{
      countDonw()
    },SECOND)
  }

  run();
})();
