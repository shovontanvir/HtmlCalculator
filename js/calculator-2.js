$(document).ready(function() {

  var result, currNum, isFirst, currAct;

  initialize();

  function initialize()
  {
    $("#display").html("");
    result = 0;
    currNum = 0;
    isFirst = true;
    currAct = "eq";

    $("#res").html(result);
  }

  function getNum(){

    $("#display").html() == "" ? currNum = 0 : currNum = parseFloat($("#display").html());


  }


  function add(){
    result += currNum;
  }

  function sub(){
    result -= currNum;
  }

  function mul(){
    result *= currNum;
  }

  function div(){
    result /= currNum;
  }

  function equal(){
    //isFirst = true;
    //currNum = result;
    $("#expr").val(result);
  }

  function action(){
    switch (currAct) {
      case "add":
        add();
        break;

      case "sub":
        sub();
        break;

      case "mul":
        mul();
        break;

      case "div":
        div();
        break;

      case "eq":
        equal();
        break;

    }

    $("#res").html(result);
  }

  $(".action").click(function(){
    getNum();

    if(isFirst){
      result = currNum;
      isFirst = false;
      action();
    }
    else{
      action();
    }

    currAct = $(this).attr('name');
    $("#display").html("");
  })


  $(".bttn").click(function(){
    $("#display").append($(this).attr('value'));
  })

  $("#clr").click(function(){
    initialize();
  })

  //$("#display").append("aaa");
});
