"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Rectangle =
/*#__PURE__*/
function () {
  function Rectangle(width, height, color, left, top) {
    _classCallCheck(this, Rectangle);

    this.width = width;
    this.height = height;
    this.colorVal = color;
    this.left = left;
    this.top = top;
  }

  _createClass(Rectangle, [{
    key: "draw",
    value: function draw() {
      document.body.insertAdjacentHTML('afterbegin', "\n            <div style=\"width: ".concat(this.width, "px; height: ").concat(this.height, "px; background-color: ").concat(this.colorVal, ";\n            position: absolute; top: ").concat(this.top, "px; left: ").concat(this.left, "px\"></div>"));
    }
  }, {
    key: "square",
    get: function get() {
      return this.width * this.height;
    }
  }, {
    key: "color",
    get: function get() {
      return this.color;
    },
    set: function set(newColor) {
      this.colorVal = newColor;
    }
  }]);

  return Rectangle;
}();