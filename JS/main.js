
// show and hide Pags
// show home page
$(".game_Pag").hide();
$("a").on("click", function () {
      $(".game_Pag").hide();
      $(".Front_Pag").show();
});

// show game page
$("#Go").on("click", function () {
      $(".Front_Pag").hide();
      $(".game_Pag").show();
      start_time()
});


var timerVar = setInterval(start_time, 1000);
var totalSeconds = 0
// the main function
function start_time() {
      ++totalSeconds;
      var hour = Math.floor(totalSeconds / 3600);
      var minute = Math.floor((totalSeconds - hour * 3600) / 60);
      var seconds = totalSeconds - (hour * 3600 + minute * 60);
      if (hour < 10)
            hour = "0" + hour;
      if (minute < 10)
            minute = "0" + minute;
      if (seconds < 10)
            seconds = "0" + seconds;
      document.getElementById("Timer").innerHTML = hour + ":" + minute + ":" + seconds;
}

document.getElementById("pause").addEventListener("click", function () {
      clearInterval(timerVar);
      delete timerVar;
})

document.getElementById("play").addEventListener("click", function () {
      timerVar = setInterval(start_time, 1000);
})
// Track our timer
// var active = false
// if (active) {
//       var timer = document.getElementById("Timer").innerHTML;
//       console.log(timer)
//       // split the time use (:) in the array
//       var arr = timer.split(":");
//       // get hour
//       var hour = arr[0]
//       // get minutes
//       var min = arr[1]
//       //  get seconds
//       var sec = arr[2]

//       if (sec == 59) {
//             if (min == 59) {
//                   hour++;
//                   min = 0;
//                   // for the number of hour less then 10
//                   if (hour < 10) hour = "0" + hour;
//             }
//             else { min++; }
//             // for the number of minutes less then 10
//             if (min < 10) min = "0" + min;
//             sec = 0;
//       }
//       else {
//             sec++;
//             if (sec < 10) sec = "0" + sec;
//       }
//       // update html
//       document.getElementById("Timer").innerHTML = hour + ":" + min + ":" + sec
//       // setTimeout(start_time(), 4000)
// }
// fuction for change states - if click play or pause
// function changeState() {
//       if (active == false) {
//             active = true;
//             start_time();
//             console.log("Time has been starting");
//             document.getElementsByID("#Go").innerHTML = "Play"
//       }
//       else {
//             active = false
//             console.log("The time id pause")
//             document.getElementsByID("#pause").innerHTML = "Pause"
//       }
// }





// Show information game
$("#instruc_game").hide();
$("#About_Game").on("click", function () {
      $("#instruc_game").show();
});


// var Sudoku=[[1,2,3,0],[4,0,2,0],[0,1,4,0],[0,0,0,2]]

// var Sudoku_solve=[[1,2,3,4],[3,4,2,1],[2,1,4,3],[4,3,1,2]]



// Play the game

var Boxs = []
//row squares
var row = $(".Val_Num")
//colum squares
var col = $(".colm")
// The number
var numbutton = $(".TakNum").children()


// select the one of empty squares

row.click(function (e) {
      if ($(this).text() == "") {
            // select the one of empty box
            $(this).addClass("select")
            Boxs = $(this)
      }
})


// set the number to empty squares
numbutton.click(function () {
      if (Boxs) {
            // the number will save insde Boxs
            Boxs.push($(this).text())
            Boxs.val($(this).text())
      }
})


function randNumberinBox() {
      var rand = []
      for (var i = 1; i <= 4; i++) {
            var row = Math.floor(Math.random() * 4);
            var col = Math.floor(Math.random() * 4);
            var accept = true;
            for (var j = 0; j < rand.length; j++) {
                  // if number exist or there is a number already located in then ignore and try again
                  if (rand[j][0] == i | (rand[j][1] == row & rand[j][1] == col)) {
                        accept = false;
                        // try to get a new position for this number
                        i--;
                        break;
                  }
            }
            if (accept) {
                  rand.push([i, row, col]);
            }
      }
}

$("#checks").click(function () {
      for (var i = 1; i <= 4; i++) {
            var check = Boxs[i]
            if (check[i] !== row[i] || check[i] !== col[i]) {
                  $(this).addClass(".call_val")
                  console.log("complet")
                  // alert("complet")
                  // break
            }
            else {
                  console.log("stop")
                  // alert("no")
                  // break
            }
      }
})


$("#finsh").click(function () {
      if (row[i] != " " && col[j] != " ") {
            alert("You complet the game")
      }
      else {
            alert("There empty box")
      }
})
