// Addepar asks you to build a website with 7 boxes shaped like a c, which should turn green on click, 
// and then when all are clicked, should turn red in reverse clicking order

document.addEventListener('DOMContentLoaded', function() {
  var boxHolder = document.querySelector(".boxHolder");
  var count = 0;
  
  boxHolder.addEventListener('click', changeGreen);

  var boxes = [];

  function changeGreen(e) {
    if (e.target !== e.currentTarget) {
      var box = e.target;
      if (box.style.backgroundColor !== 'green') { 
        box.style.backgroundColor = 'green';
        count++;
        boxes.push(e.target);
      }
    }

    if (count === 7) {
      count = 0;
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
        box.style.backgroundColor = 'red';
      }, index * 500)
    });
    setTimeout(function() {
      boxes = [];
    }, 0)
  }
});
