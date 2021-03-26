var currentHour = moment().format('h');
var saveBtns = $('.saveBtn')
var hourArr = $('.time-block')

// function to save text in box to local storage 

saveBtns.on('click', function (event) {
    var taskText = $(this).siblings('.description').val();
    console.log(taskText)
    var parentID = $(this).parent("div").attr('id');
    localStorage.setItem(parentID, taskText);
    displayTasks();
});

function displayTasks() {
    for (var i = 9; i <= 17; i += 1) {
        var storedStr = localStorage.getItem("hour-" + [i]);
        console.log(storedStr)
        $("#hour-" + [i] + " > textarea").val(storedStr);
        console.log($("#hour-" + [i] + " > textarea"))
    }
}





// function for displaying current time on jumbotron
function displayTime() {
    var headCurrentTime = moment().format('LLL');
    $('#currentDay').text(headCurrentTime);
};

setInterval(displayTime, 1000)
displayTime();

// ######### page color change function ##########

function colorChange() {
    // var currentHour = moment().format("HH");
    var currentHour = moment().hour();

    for (var i = 9; i <= 17; i++) {
        if (currentHour > [i]) {
            $("#hour-" + [i]).addClass("past");
        } else if (currentHour == [i]) {
            $("#hour-" + [i]).addClass("present");
        } else if (currentHour < [i]) {
            $("#hour-" + [i]).addClass("future");
        }
    }
}
colorChange();
displayTasks();





































