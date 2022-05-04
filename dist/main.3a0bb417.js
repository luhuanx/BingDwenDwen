// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n/*\u4F60\u597D\uFF0C\u6211\u662F\u4E00\u540D\u524D\u7AEF\u65B0\u4EBA\n* \u63A5\u4E0B\u6765\u6211\u8981\u6F14\u793A\u6211\u7684\u524D\u7AEF\u529F\u5E95\n* \u7ED9\u4F60\u753B\u4E00\u4E2A\u51B0\u58A9\u58A9\n**/\n.bingDwenDwenContainer {\n    position: relative;\n    z-index: 2;\n    width: 400px;\n    height: 456px;\n    left: 150px;\n    top: 10px;\n    border: 10px solid black;\n    background: white;\n    border-radius: 240px 240px 194px 194px;\n  }\n  \n  .ear {\n    width: 71px;\n    height: 90px;\n    background-color: black;\n    border-radius: 50%;\n    position: relative;\n    z-index: 1;\n    top: 10px;\n    box-shadow: 329px 0 0 0 black;\n  }\n  \n  .leftHand {\n    top: 250px;\n    left: -75px;\n    width: 72px;\n    height: 72px;\n    border-radius: 50%;\n    background-color: black;\n    position: absolute;\n  }\n  \n  .leftHand::before {\n    content: \"\";\n    left: 5px;\n    top: -53px;\n    width: 0;\n    height: 0;\n    border: 35px solid;\n    border-color: transparent black black transparent;\n    position: absolute;\n  }\n  \n  .rightHand {\n    top: 120px;\n    left: 390px;\n    width: 64px;\n    height: 126px;\n    transform: rotate(40deg);\n    background-color: black;\n    border-radius: 40px 49px 0 89px;\n    position: absolute;\n  }\n  \n  .rightHand::before {\n    content: \"\";\n    left: 30px;\n    top: 30px;\n    width: 14px;\n    height: 25px;\n    border-radius: 8px 8px 0 16px;\n    transform: rotate(19deg);\n    background-color: red;\n    position: absolute;\n  }\n  \n  .rightHand::after {\n    content: \"\";\n    left: 23px;\n    top: 34px;\n    width: 14px;\n    height: 25px;\n    border-radius: 8px 8px 16px 0;\n    transform: rotate(-71deg);\n    background-color: red;\n    position: absolute;\n  }\n  \n  .feet {\n    width: 82px;\n    height: 75px;\n    background-color: black;\n    top: 435px;\n    left: 95px;\n    border-bottom: 25px solid black;\n    border-radius: 20px 50% 10px 30px;\n    position: absolute;\n  }\n  \n  .feet::before {\n    content: \"\";\n    width: 82px;\n    height: 75px;\n    background-color: black;\n    left: 130px;\n    border-bottom: 25px solid black;\n    border-radius: 50% 20px 30px 10px;\n    position: absolute;\n  }\n  \n  .face {\n    width: 287px;\n    height: 230px;\n    border-top-left-radius: 50% 60%;\n    border-top-right-radius: 50% 60%;\n    border-bottom-left-radius: 41% 42%;\n    border-bottom-right-radius: 41% 42%;\n    border: 5px solid #006bb0;\n    box-shadow: 0 0 0 5px yellow, 0 0 0 10px black, 0 0 0 15px green,\n      0 0 0 20px red;\n    left: 52px;\n    top: 50px;\n    position: absolute;\n  }\n  \n  .eyes {\n    width: 70px;\n    height: 100px;\n    background-color: black;\n    left: 100px;\n    top: 100px;\n    border-radius: 50%;\n    transform: rotate(35deg);\n    position: absolute;\n  }\n  \n  .eyes::before {\n    content: \"\";\n    width: 70px;\n    height: 100px;\n    background-color: black;\n    left: 110px;\n    top: -75px;\n    border-radius: 50%;\n    transform: rotate(-70deg);\n    position: absolute;\n  }\n  \n  .nose {\n    width: 25px;\n    height: 16px;\n    background-color: black;\n    position: absolute;\n    top: 160px;\n    left: 189px;\n    border-radius: 5px 5px 50% 50%;\n  }\n  \n  .mouth {\n    width: 30px;\n    height: 5px;\n    border: 3px solid black;\n    background-color: red;\n    position: absolute;\n    top: 185px;\n    left: 184px;\n    border-radius: 0 0 50% 50%;\n  }\n  \n  .iris {\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    background-color: black;\n    border: 5px solid white;\n    position: absolute;\n    left: 125px;\n    top: 130px;\n    box-shadow: 0 0 0 0 gray;\n  }\n  \n  .iris::before {\n    content: \"\";\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    background-color: black;\n    border: 5px solid white;\n    position: absolute;\n    left: 115px;\n    top: -5px;\n    box-shadow: 0 0 0 -5px cyan;\n  }\n  \n  .highlight {\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n    background-color: white;\n    left: 135px;\n    top: 140px;\n    position: absolute;\n    box-shadow: 120px 0 0 0 white;\n  }\n";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  n: 1,
  time: 100,
  string2: '',
  ui: {
    html: document.querySelector("#html"),
    style: document.querySelector("#style")
  },
  init: function init() {
    player.ui.html.innerHTML = _css.default.substring(0, player.n);
    player.ui.style.innerText = _css.default.substring(0, player.n);
    player.play();
    player.bindEvents();
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    if (_css.default[player.n] === "\n") {
      player.string2 += "<br>";
    } else if (_css.default[player.n] === " ") {
      player.string2 += "&nbsp";
    } else {
      player.string2 += _css.default[player.n];
    }

    player.ui.html.innerHTML = player.string2;
    player.ui.style.innerHTML = _css.default.substring(0, player.n);
    window.scrollTo(0, 99999);
    player.ui.html.scrollTo(0, 99999);
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.3a0bb417.js.map