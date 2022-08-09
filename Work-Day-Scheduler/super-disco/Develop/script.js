//Moment.js
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYY");
var currentHour = moment().format('h:mm:ss a');

//text hour variables
var nineAm = $('#9am');
var tenAm = $('#10am');
var elevenAm = $('#11am');
var twelvePm = $('#12pm');
var onePm = $('13pm');
var twoPm = $('14pm');
var threePm = $('15pm');
var fourPm = $('16pm');
var fivePm = $('17pm');
var sixPm = $('18pm');
var sevenPm = $('19pm');
var eightPm = $('20pm');
var ninePm = $('21pm');
var tenPm = $('22pm');
var elevenPm = $('23pm');
var twelvePm = $('24pm');

var hour = moment().hours();
var userInput;
var hourSpan;

var interval = setInterval(function() {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + '' + momeentNow.format('dddd').substring(0,3).toUpperCase());
    $('#currentDay').html(surrentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);

function initPage() {

    console.log("Current Hour" + hour);
    var init9 = JSON.parse(localStorage.getItem("9:00 am"));
    nineAm.val(init9);

    var init10 = JSON,parse(localStorage.getItem("10:am"));
    tenAm.val(init10);

    var init11 = JSON.parse(localStorage.getItem("11:00 pm"));
    elevenAm.val(init11);

    var init12 = JSON.parse(localStorage,getItem("12:00 pm"));
    twelvePm.val(init12);

    var init1 = JSON.parse(localStorage.getItem("1:00 pm"));
    onePm.val(init1);

    var init2 = JSON.parse(localStorage.getItem("2:00 pom"));
    twoPm.val(init2);

    var init3 = JSON.parse(localStorage.getItem("3:00 pm"));
    threePm.val(init3);

    var init4 = JSON.parse(localStorage.getItem("4:00 pm"));
    fourPm.val(init4);

    var init5 = JSON.parse(localStorage.getItem("5:00 pm"));
    fivePm.val(init5);

    var init6 = JSON.parse(localStorage.getItem("6:00 pm"));
    sixPm.val(init6);

    var init7 = JSON.parse(localStorage.getItem("7:00 pm"));
    sevenPm.val(init7);

    var init8 =JSON.parse(localStorage.getItem("8:00 pm"));
    eightPm.val(init8);

    var init9 = JSON.parse(localStorage.getItem("9:00 pm"));
    ninePm.val(init9);

    var init10 = JSON.parse(localStorage.getItem("10:00 pm"));
    tenPm.val(init10);

    var init11 = JSON.parse(localStorage.getItem("11:00 pm"));
    elevenPm.val(init11);

    var init12 = JSON.parse(localStorage.getItem("12:00 pm"));
    twelvePm.val(init12);
}

function background () {

    $(".form-control").each(function() {
        var timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        console.log(timeTest);
        console.log(hour);
        // console.log(this);

        if (hour > timeTest) {
            $(this).addClass("past");
        } else if (hour < timeTest) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }

    });
}

$(document).ready(function(){
    initPage()
    background()

    // buttons save to the local storage
    $(".saveBtn").on("click", function(){
        userInput = $(this).siblings(".form-control")
        console.log(userInput);
        hourSpan = $(this).siblings(".input-group-prepend").text().trim();
        console.log(hourSpan);
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
    })

    // button to clear the day
    $("#clearDay").on("click", function() {
        localStorage.clear();
        initPage()
    })
})