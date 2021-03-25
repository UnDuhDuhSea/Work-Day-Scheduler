var hour9 = document.getElementById('hour-9').children[1].text;
console.log(hour9)
var btn1 = document.getElementById('btn1')
var txt1 = document.getElementById('txt1');
var hour10 = document.getElementById('hour-10')
var hour11 = document.getElementById('hour-11')
var hour12 = document.getElementById('hour-12')
var hour13 = document.getElementById('hour-13')
var hour14 = document.getElementById('hour-14')
var hour15 = document.getElementById('hour-15')
var hour16 = document.getElementById('hour-16')
var hour17 = document.getElementById('hour-17')
var past = document.querySelector('.past')
var present = document.querySelector('.present')
var future = document.querySelector('.future')
var saveBtn = document.querySelectorAll('.saveBtn');
var currentHour = moment().format('h');
console.log(currentHour)
// jquery
var saveBtns = $('.saveBtn')
// function to save text in box to local storage 
saveBtns.on('click', function (event) {
    var taskText = $(this).siblings('.description').val();
    console.log(taskText)
    var parentID = $(this).parent().attr('id');
    localStorage.setItem(parentID, taskText);

    storeTasks();
    renderTasks();
});



// ----------- Working for 1 text box saving ----------------------------
// if (window.localStorage["taskText"]) {
//     txt1.value = window.localStorage["taskText"];
// }
// txt1.addEventListener("keyup", function () {
//     window.localStorage["taskText"] = txt1.value;
// });


// ----------------------------------------------------------------------

// function for displaying current time on jumbotron
function displayTime() {
    var headCurrentTime = moment().format('LLL');
    var currentDay = document.getElementById('currentDay');
    currentDay.textContent = headCurrentTime;
};

setInterval(displayTime, 1000)
displayTime();

// ######### page color change function ##########

// function colorChange() {
//     // if statement matching 
//     console.log(currentHour)
// }
// colorChange();


// ############################################
// Steve Idea
// function renderSchedule() {
//     var storageKey = hour10.attributes('id');
//     var value = localStorage.getItem(storageKey)
//     hour10.fine(".description").val(value);
// }

// // // store tasks in localstorage
// function storeTasks(taskText) {
//     localStorage.setItem("txt1", taskText);
//     alert(taskText)
// }

// function renderTasks() {
//     txt1.txtContent = localStorage.getItem("txt1")
//     alert('renderTasks')
// }
// ###################################################