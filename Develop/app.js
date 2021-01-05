// Current Day
$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do")); 
})

// Time block is color coded for past, present, and future

function time () {
    var currentTime = moment.hour();

    $(".time-block").each(function(){
    
    })
}



// click save button to save event in local storage
$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));


// when refresh page, saved events persist

