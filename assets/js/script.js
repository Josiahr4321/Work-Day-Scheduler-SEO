// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button.  




  function updateHour() {

    $(".container-lg").children().each(function(){
      $(this).remove();
    })
$("#currentDay").text(    dayjs().format("dddd, MMM, YYYY"))
    //what hour it currently is
    //for each time block update it's color according to the hour
    var today = new Date()
    var currentHour = today.getHours()
    console.log(currentHour)
    for (var i = 9; i < 19; i++) {
      var colorKey = ""
      if (i < currentHour) {
        colorKey = "past"
      } else if (i === currentHour) {
        colorKey = "present"
      }
      else {
        colorKey = "future"
      }
      
      var timeBlock = $("<div>").addClass("row time-block ").attr("id", `hour-${i}`);
      var timeText;
     

      if (i>12){
        timeText=(i-12) +"PM"
      }
      else {
        timeText=i +"AM"
      }
    

      var hourDiv = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(timeText);
      var textInput = $("<textarea>").addClass("col-8 col-md-10 description " + colorKey).attr("rows", "3").val(localStorage.getItem(`hour-${i}`))
      var button = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label", "save").on("click", function () {
        var userInput = $(this).siblings(".description").val().trim();
        var hour = $(this).parent().attr("id");
        localStorage.setItem(hour, userInput);
    
      });
      var icon = $("<i>").addClass("fas fa-save").attr("aria-hidden", "true")
      $(".container-lg").append(timeBlock.append(hourDiv, textInput, button.append(icon)))

    }
  
  }
  updateHour()
  setInterval(updateHour,5000)
 

  //This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
