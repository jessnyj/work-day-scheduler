// Current Day
$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do")); 
})

// Time block is color coded for past, present, and future

function time () {
    var currentTime = moment().format('H');
    console.log(currentTime)
    var timeBlocks = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
    var timeDiv = $("#timeOfDay");

    
    // make for loop iterating through timeBlocks
    for (var i = 0; i < timeBlocks.length; i++) {
        var newTimeBlock = $("<div class='row time-block'><div class='col-md-1 hour'>" + timeBlocks[i] + "</div><textarea class='col-md-10 description'></textarea> <button class='col-md-1 saveBtn'><i class='fas fa-save'></i></button></div>" )
        timeDiv.append(newTimeBlock);
    }
    // new div for each timeblock
    // append to timeOfDay
}

time();




// when refresh page, saved events persist
$(".saveBtn").on("click", function () {
    var hour = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();

    localStorage.setItem(hour, text);
})

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
