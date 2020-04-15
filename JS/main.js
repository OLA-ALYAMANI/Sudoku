
var clock = $(".Timer")
$("#Go").click(function () {
      if (clock === "0:0:0") {
            start_time()
      }
})
// Track our timer
var active = false
// the main function
function start_time() {
      if (active) {
            var timer = document.getElementsByClassName(".Timer").innerHTML
            // split the time use (:) in the array
            var arr = timer.split(":")
            // get hour
            var hour = arr[0]
            // get minutes
            var min = arr[1]
            //  get seconds
            var sec = arr[2]

            if (min == 59) {
                  if (sec == 59) {
                        hour++
                        min = 0
                        // for the number of hour less then 10
                        if (hour < 10)
                              hour = "0" + hour
                  }
                  else {
                        min++
                  }
                  // for the number of minutes less then 10
                  if (min < 10)
                        min = "0" + min
                  sec = 0
            }
            else {
                  sec++
                  if (sec < 10)
                        sec = "0" + sec
            }
            // update html
            document.getElementsByClassName(".Timer").innerHTML = hour + ":" + min + ":" + sec
            setTimeout(start_time(), 1000)
      }
}
// fuction for change states - if click play or pause
function changeState() {
      if (active == false) {
            document.getElementsByID("#pause").innerHTML
      }
      else {
            active = true
            start_time()
            document.getElementsByID("#play").innerHTML
      }
}

// show and hide Pags
// show home page
$(".game_Pag").hide();
$("a").on("click", function () {
      $(".game_Pag").hide();
      $(".Front_Pag").show();
});

// show game page
$("#Go").on("click", function () {
      start_time()
      $(".game_Pag").show();
      $(".Front_Pag").hide();
});

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
var clou = $(".colm")
// The number
var numbutton = $(".TakNum").children()


// select the one of empty squares
row.click(function (e) {
      if ($(this).text() == "") {
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


function randomNumberinBox() {
      for (var i = 1; i <= 2; i++) {
            var row = Math.floor(Math.random() * 2);
            var col = Math.floor(Math.random() * 2);
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
      for (var i = 1; i <= 2; i++) {
            var check = Boxs[i]
            if (check[i] !== row[i] || check[i] !== clou[i]) {
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
      if (row[i] != " " && clou[j] != " ") {
            alert("You complet the game")
      }
      else {
            alert("There empty box")
      }
})