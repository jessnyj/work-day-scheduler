// Current Day
$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do")); 
})

// Time block is color coded for past, present, and future

// function time () {
//     var currentTime = moment.hour();

//     $("#time-block").each(function(){
//         var block = parseInt(($this).prop("id"));
        
//         if (block > currentTime && black < currentTime + 6) {
//             $(this).addClass()
//         }
// }



// click save button to save event in local storage
$("9am").val(localStorage.setItem("description", "value"));


$("#10am .description").val(localStorage.setItem("10am"));
$("#11am .description").val(localStorage.setItem("11am"));
$("#12pm .description").val(localStorage.setItem("12pm"));
$("#1pm .description").val(localStorage.setItem("1pm"));
$("#2pm .description").val(localStorage.setItem("2pm"));
$("#3pm .description").val(localStorage.setItem("3pm"));
$("#4pm .description").val(localStorage.setItem("4pm"));
$("#5pm .description").val(localStorage.setItem("5pm"));


// when refresh page, saved events persist
// $("#saveBtn").on("click", function() {
//     var 
// })

