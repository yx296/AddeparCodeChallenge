// Addepar asks you to build a website with 7 boxes shaped like a c, which should turn green on click, 
// and then when all are clicked, should turn red in reverse clicking order

$(document).ready(function() {

  var boxHolder = $(".boxHolder");
  var boxesNodeList = $(".box");
  var isUnwinding = false;
  var timer;
  
  boxHolder.on('click', "div.box", changeGreen);

  var boxes = [];

  function changeGreen(e) { 
    if (isUnwinding) return;

    var $box = $(e.target);

    if (!$box.hasClass('green')) { 
      $box.removeClass('red');
      $box.addClass('green');
      boxes.push($box);
    }

    if (boxes.length === boxesNodeList.length) { 
      turnBoxesRed()
    }
  }


  function turnBoxesRed() {
    isUnwinding = true;
    setTimeout(function() {
      timer = setInterval(turnBoxRed, 300)
    }, 500);
  }

  function turnBoxRed () {
    var box = boxes.pop();
    box.removeClass('green');
    box.addClass('red');
    if (!boxes.length) {
      clearInterval(timer);
      isUnwinding = false;
    }
  }

});
