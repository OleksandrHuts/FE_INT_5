"use strict";

function addRect() {
  var width = document.querySelector('#width').value;
  var height = document.querySelector('#height').value;
  var top = document.querySelector('#top').value;
  var left = document.querySelector('#left').value;
  var color = document.querySelector('#color').value;
  var rect = new Rectangle(width, height, color, top, left);
  rect.draw();
}

var rect1 = new Rectangle(150, 230, 'lightblue', 50, 45); // const rect2 = new Rectangle(250, 130, 'tomato', 150, 145);

rect1.draw(); // rect2.draw();