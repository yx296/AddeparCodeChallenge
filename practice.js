// Addepar asks you to build a website with 7 boxes shaped like a c, which should turn green on click, 
// and then when all are clicked, should turn red in reverse clicking order

document.addEventListener('DOMContentLoaded', function() {
  var boxHolder = document.querySelector(".boxHolder");
  var boxesNodeList = document.querySelectorAll(".box");
  var isUnwinding = false;
  
  boxHolder.addEventListener('click', changeGreen);

  var boxes = [];

  function changeGreen(e) { 
    if (isUnwinding) {
      return;
    } 

    if (e.target !== e.currentTarget) {
      var box = e.target;

      if (!box.classList.contains('green')) { 
        box.classList.remove('red');
        box.classList.add('green');
        boxes.push(e.target);
      }
    }

    if (boxes.length === boxesNodeList.length) { 
      isUnwinding = true;
      setTimeout(function() {
        reverseTurnRed();
      }, 1000);
    }
    e.stopPropagation();
  }

  function reverseTurnRed() {
    boxes.reverse();
    boxes.forEach(function(box, index) {
      setTimeout(function() {
        box.classList.remove('green');
        box.classList.add('red');
        if (index === boxes.length - 1) {
          boxes = [];
          isUnwinding = false;
        }
      }, index * 500)
    });
  }
});
