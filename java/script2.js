document.addEventListener("DOMContentLoaded", function() {
    var schedule = document.getElementById("schedule");
  
    var daysOfWeek = ["Maciej Lewandowski", "Marek Koszuta", "Szymon Trempała", "Sylwester Boruta", "Kacper Chmura", "Patryk Mocek"];
  
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
      { day: "Maciej Lewandowski", title: "Opiekun", profilePicture: "images/noprof.jpg" },
      { day: "Marek Koszuta", title: "Developer", profilePicture: "images/noprof.jpg" },
      { day: "Szymon Trempała", title: "Developer", profilePicture: "images/noprof.jpg" },
      { day: "Sylwester Boruta", title: "Developer", profilePicture: "images/noprof.jpg" },
      { day: "Kacper Chmura", title: "Developer", profilePicture: "images/noprof.jpg" },
      { day: "Patryk Mocek", title: "Developer", profilePicture: "images/noprof.jpg" }
    ];
  
    for (var j = 0; j < events.length; j++) {
      var event = events[j];
      var eventElement = document.createElement("div");
      eventElement.className = "event";
      eventElement.textContent = event.title;
  
      var profileImg = document.createElement("img");
      profileImg.src = event.profilePicture;
      eventElement.appendChild(profileImg);
  
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