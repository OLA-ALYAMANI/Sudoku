// show and hide Pag
$(".game_Pag").hide();
$("a").on("click", function(){
      $(".game_Pag").hide();
      $(".Front_Pag").show();
});

$("#Go").on("click", function(){
      $(".game_Pag").show();
      $(".Front_Pag").hide();
});

//
$("#instruc_game").hide();
$("#About_Game").on("click", function(){
      $("#instruc_game").show();
});

// $(".call_num").on("click", function(){
//        $(this).css({"border": "rgb(226, 139, 39) 3px solid"});
//  });

// $(".Val_Num").on("click", function(){
//       $(this).stop(1000);
// });
// let time = 0
// let TimeStart = document.querySelector("#time_start")
// function GetTime(){
// let data = new Date()
// let min = data.getMinutes()
// let sec = data.getSeconds()

// TimeStart.textContent = min + " : " + sec
// }
// setInterval(GetTime, 1000)

var result = [];

function add_Value(resl){
      console.log(resl);
      for(let r=0; r<4; r++){
            let values = document.querySelector("#But_item-"+r).onckilck()
            for(let c=0; c<4; c++){ 
                  var input = document.querySelector("#" + [r][c])
                  $(input).on("click", function(){
                        if(input.value === " ") { 
                              input.css({"border": "rgb(226, 139, 39) 3px solid"})
                              $(value).click(function()
                              {
                                    document.getElementById("#"+[r][c]).value = $("#But_item-" + r).val();
                              });
                        }
                              else if("#"+[r][c] !== " "){
                                    alert("This not empty box");
                                    $(values).html("#"+[r][c]);
                              }
                        
                  })
            }
      }
}

// function loadUser(){
//       for(let r=0; r<4; r++){
//             for(let c=0; c<4; c++){
//                   let callVal;
//                   let n = "#" + r + c;
//                   if($(n).find("#But_item-"+r)){
//                         callVal = $(n).find("#But_item-"+[r]).val();
//                   }
//             }
//       }
// }