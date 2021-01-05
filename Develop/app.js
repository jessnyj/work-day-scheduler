// Current Day
$(document).ready(function () {
    console.log(moment());

    console.log(moment().format());

    $("#current-day").text(moment().format("dddd, MMMM"));

}


// Time blocks for business hours


// Time block is color coded for past, present, and future

// click time block, can enter event

// click save button to save event in local storage

// when refresh page, saved events persist