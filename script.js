// create variables for connecting html file
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

// function to save text in box to local storage 
// btn1.addEventListener('click', function (event) {
//     event.preventDefault();

//     var taskText = txt1.value;

//     if (taskText === "") {
//         return;
//     }

//     storeTasks();
//     renderTasks();
// });

// // // store tasks in localstorage
// function storeTasks() {
//     localStorage.setItem("txt1", txt1);
// }

// function renderTasks() {
//     txt1.txtContent = localStorage.getItem("txt1")
// }

// ----------- Working for 1 text box saving ----------------------------
if (window.localStorage["taskText"]) {
    txt1.value = window.localStorage["taskText"];
}
txt1.addEventListener("keyup", function () {
    window.localStorage["taskText"] = txt1.value;
});


// ----------------------------------------------------------------------

// function for displaying current time on jumbotron
function displayTime() {
    var headCurrentTime = moment().format('LLL');
    var currentDay = document.getElementById('currentDay');
    currentDay.textContent = headCurrentTime;
};
displayTime();

// page color change function

// function colorChange() {
//     // if statement matching 
//     console.log(currentHour)
// }
// colorChange();


