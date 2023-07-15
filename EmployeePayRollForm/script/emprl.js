document.addEventListener("DOMContentLoaded", function() {
    var daySelect = document.getElementById("day");
    var monthSelect = document.getElementById("month");
    var yearSelect = document.getElementById("year");
  
    // Generate options for day
    for (var day = 1; day <= 31; day++) {
      var option = document.createElement("option");
      option.value = day;
      option.text = day;
      daySelect.appendChild(option);
    }
  
    // Generate options for month
    var months = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];
    for (var month = 0; month < months.length; month++) {
      var option = document.createElement("option");
      option.value = month + 1;
      option.text = months[month];
      monthSelect.appendChild(option);
    }
  
    // Generate options for year
    var currentYear = new Date().getFullYear();
    for (var year = currentYear; year >= 1900; year--) {
      var option = document.createElement("option");
      option.value = year;
      option.text = year;
      yearSelect.appendChild(option);
    }
  });
  