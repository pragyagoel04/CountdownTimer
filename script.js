"use strict";
$(function () {
    var newYear = setInterval(function () {

        //setting eventDate to 2017, January, 1
        var eventDate = new Date(new Date().getFullYear() + 1, 0, 1);
        var currentDate = new Date();

        //difference between current date and event date
        var remaining = eventDate - (currentDate);

        var seconds = Math.floor(remaining / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);

        minutes = minutes - (hours * 60);
        seconds = seconds - (hours * 60 * 60) - (minutes * 60);

        //displaying remaining time on view
        $("#hours").text(hours + ":");
        $("#minutes").text(minutes + ":");
        $("#seconds").text(seconds);

        //adding alert when the difference is zero
        if (remaining < 1) {
            alert("Happy New Year!");
        }
    }, 1000);    //setting interval to 1 seconds
});