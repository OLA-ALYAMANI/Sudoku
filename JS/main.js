// Track our timer
var active = false
// the main function
function start_time(){
      if(active){
            var timer = document.getElementsByClassName(".Timer").innerHTML
            // split the time use (:) in the array
            var arr = timer.split(":")
            // get hour
            var hour = arr[0]
            // get minutes
            var min = arr[1]
            //  get seconds
            var sec = arr[2]

            if(min == 59){
                  if(sec == 59){
                        hour++
                        min = 0
                        // for the number of hour less then 10
                        if(hour < 10)
                              hour = "0" + hour
                        }
                        else{
                              min++
                        }
                        // for the number of minutes less then 10
                        if(min < 10)
                              min = "0" + min
                              sec = 0
                        }
                        else{
                              sec++
                        if(sec < 10)
                              sec = "0" + sec
                  }
            // update html
            document.getElementsByClassName(".Timer").innerHTML = hour + ":" + min + ":" + sec
            setTimeout(start_time(), 1000)
      }
}
// fuction for change states - if click play or pause
      function changeState(){
            if(active == false){
                  document.getElementsByID("#pause")
            }
            else{
                  active = true
                        start_time()
                  document.getElementsByID("#play")
            }
      }

// show and hide Pags
$(".game_Pag").hide();
$("a").on("click", function(){
      $(".game_Pag").hide();
      $(".Front_Pag").show();
});

$("#Go").on("click", function(){
      start_time()
      $(".game_Pag").show();
      $(".Front_Pag").hide();
});

$("#instruc_game").hide();
$("#About_Game").on("click", function(){
      $("#instruc_game").show();
});


// var Sudoku=[[1,2,3,0],[4,0,2,0],[0,1,4,0],[0,0,0,2]]

// var Sudoku_solve=[[1,2,3,4],[3,4,2,1],[2,1,4,3],[4,3,1,2]]

var Boxs
var row = $(".Val_Num")
var clou = $(".colm")
var numbutton = $(".TakNum").children()

// select the one of empty box
row.click(function(e){
      if($(this).text()==""){
            $(this).addClass("select")
            Boxs = $(this) 
      }
})

// set the number to empty box
numbutton.click(function(){
      if(Boxs){
            Boxs.val($(this).text())
      }
      for (var i = 1; i <= 4; i++)
      var check = Boxs[0]
      if(check == row[i] && check == clou[i]){
            return false
      }
})
// Boxs.attr('id').match(/\d+$/)
// console.log($(this).attr("id"))
