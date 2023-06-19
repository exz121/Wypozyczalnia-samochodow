document.addEventListener("DOMContentLoaded", function() {
  var schedule = document.getElementById("schedule");

  var daysOfWeek = ["26.04.2023", "03.05.2023", "17.05.2023", "24.05.2023", "31.05.2023", "07.06.2023"];

  for (var i = 0; i < daysOfWeek.length; i++) {
    var day = document.createElement("div");
    day.className = "day";

    var dayHeader = document.createElement("div");
    dayHeader.className = "day-header";
    dayHeader.textContent = daysOfWeek[i];

    day.appendChild(dayHeader);
    schedule.appendChild(day);
  }

  var events = [
    { day: "26.04.2023", title: "Zapoznawcze spotkanie z opiekunem zespołu - Maciejem Lewandowskim, omówienie w jaki sposób będziemy pracować." },
    { day: "03.05.2023", title: "Omówienie kilku wybranych tematów, oraz rozmowa o podstawowych funkcjonalnościach" },
    { day: "17.05.2023", title: "Wybranie przez członków zespołu najciekawszego tematu. Wstępne omówienie walking skeleton, mvp oraz trello" },
    { day: "24.05.2023", title: "Omówienie `prototypu` dokumentacji,epików oraz wstępne przydzielanie do zadań " },
    { day: "31.05.2023", title: "Sporządzenie szczegółowego spisu funkcjonalności aplikacji. Wybór narzędzi do pracy." },
    { day: "07.06.2023", title: "Oficjalne przyklepanie osób za co kto jest odpowiedzialny" }
  ];

  for (var j = 0; j < events.length; j++) {
    var event = events[j];
    var eventElement = document.createElement("div");
    eventElement.className = "event";
    eventElement.textContent = event.title;

    var dayElements = document.getElementsByClassName("day");
    for (var k = 0; k < dayElements.length; k++) {
      var dayElement = dayElements[k];
      var dayHeader = dayElement.getElementsByClassName("day-header")[0];
      if (dayHeader.textContent === event.day) {
        dayElement.appendChild(eventElement);
        break;
      }
    }
  }
});
