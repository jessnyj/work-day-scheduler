# work-day-scheduler

## Site Picture
![Site](./Assets/work-day.png)


## Technologies Used

* HTML
* CSS
* jQuery

## Summary
This calendar application allows a user to view what the current day is, and has time blocks
for business hours that allows a user to enter and save events. These time blocks are also
color coded in order to display whether it is the past, present or future. 


## Deployed Link

* [See Live Site] (https://jessnyj.github.io/work-day-scheduler/)


## Work Involved
For this application, I utilized Moment.js in order to add the date within the schedule
and the hour in order to track the color coded time blocks. I also created the timeblocks utilizing 
jQuery. Furthermore, I added the ability to save events to the page through local storage. 


## Code Snippet
```
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
```


## Authors
**UC Berkeley Coding Bootcamp**

**Jessny Joseph** 
- [Link to Github](https://github.com/jessnyj)
- [Link to LinkedIn](https://www.linkedin.com/in/jessny-joseph-361515201)



## Acknowledgments
Trilogy Education Services