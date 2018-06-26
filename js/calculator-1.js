$(document).ready(function(){
  $("#btn").click(function(){
    var inpt = $("#expr").val();
    $("#expr").val(eval(inpt));
  })
  $("#clear").click(function(){
    var inpt = $("#expr").val("");
  })
})
