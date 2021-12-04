class Countdown extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
  
      // ShadowDOM
      this.attachShadow({mode: 'open'});

      // Element
      const countdown = document.createElement("div");
      countdown.setAttribute("class", "countdown");

      const daysElement = document.createElement("span");
      daysElement.setAttribute("class", "days");

      const hoursElement = document.createElement("span");
      hoursElement.setAttribute("class", "hours");

      const minutesElement = document.createElement("span");
      minutesElement.setAttribute("class", "minutes");

      const secondsElement = document.createElement("span");
      secondsElement.setAttribute("class", "seconds");

      const countdownHeader = this.getAttribute("countdownHeader") ? this.getAttribute("countdownHeader") : "";
      if (countdownHeader) {
        const header = document.createElement("h3");
        header.innerText = countdownHeader;
        countdown.appendChild(header);
      }

      countdown.appendChild(daysElement);
      countdown.appendChild(hoursElement);
      countdown.appendChild(minutesElement);
      countdown.appendChild(secondsElement);

      let dateAttr = this.getAttribute("date");
      let targetDate = new Date(dateAttr);

      const daysText = this.getAttribute("days-text") ? this.getAttribute("days-text") : "d";
      const hoursText = this.getAttribute("hours-text") ? this.getAttribute("hours-text") : "h";
      const minutesText = this.getAttribute("minutes-text") ? this.getAttribute("minutes-text") : "m";
      const secondsText = this.getAttribute("seconds-text") ? this.getAttribute("seconds-text") : "s";

      const completionText = this.getAttribute("completionText") ? this.getAttribute("completionText") : "Expired!";
      const spacing = this.getAttribute("spacing") ? this.getAttribute("spacing") : "5";

      const styling = document.createElement("style");
      styling.textContent += ".countdown { text-align: center; font-size: var(--countdown-font-size, 1.25em); }";
      styling.textContent += ".countdown h3 { margin: 0; padding: 8px; font-size: var(--countdown-header-size, 1.4em); }"
      styling.textContent += ".countdown span { margin: " + spacing + "px; display: inline-block; }";
      styling.textContent += ".countdown span:first-child { margin-left: 0; }";
      styling.textContent += ".countdown span:last-child { margin-right: 0; }";

      let timer = setInterval(function() {
        let now = new Date().getTime();

        let diff = targetDate.getTime() - now;

        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);

        daysElement.innerText = days + daysText;
        hoursElement.innerText = hours + hoursText;
        minutesElement.innerText = minutes + minutesText;
        secondsElement.innerText = seconds + secondsText;

        if (diff <= 0) {
          clearInterval(timer);
          countdown.innerHTML = completionText;
        }
      }, 1000);

      this.shadowRoot.appendChild(styling);
      this.shadowRoot.appendChild(countdown);
    }
  }

  customElements.define('date-countdown', Countdown);