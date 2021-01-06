// Current Day
$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do")); 
})

// Color Change
function time () {
    var currentTime = moment().format('H');
    
    $(".time-block").each(function(){
        var scheduleTime = parseInt($(this).attr("id"));

        if (scheduleTime === currentTime) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        } else if (scheduleTime < currentTime) {
            $(this).removeClass("present");
            $(this).addClass("past")
            $(this).removeClass("future");
        } else {
            $(this).removeClass("past");
            $(this).addClass("future")
            $(this).removeClass("present");
        }
    });

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
