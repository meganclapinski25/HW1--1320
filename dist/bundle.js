/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Ball.js":
/*!*********************!*\
  !*** ./src/Ball.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.js\");\n\n\nclass Ball extends _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n    constructor( x = 0, y = 0, dx =2, dy = -1, radius = 10, color = 'red'){\n        super(x,y,radius *2, radius *2, color)\n        this.radius = radius;\n        this.dx= dx; \n        this.dy = dy;\n    }moveBy(dx, dy) {\n      this.x += dx;\n      this.y += dy;\n  }\n  \n    render(ctx) {\n      ctx.beginPath();\n      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\n      ctx.fillStyle = this.color;\n      ctx.fill();\n      ctx.closePath();\n    }\n } \n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ball);\n\n//# sourceURL=webpack://breakout/./src/Ball.js?");

/***/ }),

/***/ "./src/Brick.js":
/*!**********************!*\
  !*** ./src/Brick.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.js\");\n\n\nclass Brick extends _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(x, y, width, height, color = 'purple', status = 1) {\n        super(x, y, width, height, color);\n        this.status = status;\n    }\n\n    render(ctx) {\n        \n            ctx.beginPath();\n            ctx.rect(this.x, this.y, this.width, this.height);\n            ctx.fillStyle = \"#1a7011\";  // Set your desired brick color\n            ctx.fill();\n            ctx.closePath();\n        \n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Brick);\n\n//# sourceURL=webpack://breakout/./src/Brick.js?");

/***/ }),

/***/ "./src/Bricks.js":
/*!***********************!*\
  !*** ./src/Bricks.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Brick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brick */ \"./src/Brick.js\");\n\n\nclass Bricks {\n  constructor({ cols, rows, width, height, padding, offsetLeft, offsetTop }) {\n    this.rows = rows;\n    this.cols = cols;\n    this.width = width;\n    this.height = height;\n    this.padding = padding;\n    this.offsetLeft = offsetLeft;\n    this.offsetTop = offsetTop;\n    this.bricks = [];\n    this.setup();\n  }\n  \n  setup() {\n    for (let c = 0; c < this.cols; c++) {\n      this.bricks[c] = [];\n      for (let r = 0; r < this.rows; r++) {\n        const brickX = c * (this.width + this.padding) + this.offsetLeft;\n        const brickY = r * (this.height + this.padding) + this.offsetTop;\n        this.bricks[c][r] = new _Brick__WEBPACK_IMPORTED_MODULE_0__[\"default\"](brickX, brickY, this.width, this.height);\n      }\n    }\n  }\n  \n  render(ctx) {\n    for (let c = 0; c < this.cols; c++) {\n      for (let r = 0; r < this.rows; r++) {\n        const brick = this.bricks[c][r];\n        if (brick.status === 1) {\n          brick.render(ctx);\n        }\n      }\n    }\n  }\n}\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bricks);\n\n//# sourceURL=webpack://breakout/./src/Bricks.js?");

/***/ }),

/***/ "./src/GameLabel.js":
/*!**************************!*\
  !*** ./src/GameLabel.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.js\");\n\nclass GameLabel extends _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(text, x, y, color = \"black\", font = \"16px Arial\") {\n      super(x, y, 0, 0, color);\n      this.text = text;\n      this.font = font;\n      this.value = 0;\n    }\n  \n  \n    render(ctx) {\n      ctx.font = this.font;\n      ctx.fillStyle = this.color;\n      ctx.fillText(`${this.text}: ${this.value}`, this.x, this.y);\n    }\n  }\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameLabel);\n\n//# sourceURL=webpack://breakout/./src/GameLabel.js?");

/***/ }),

/***/ "./src/Sprite.js":
/*!***********************!*\
  !*** ./src/Sprite.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Sprite {\n    constructor(x = 0, y = 0, width = 10, height = 10, color='red') {\n      this.x = x\n      this.y = y\n      this.width = width\n      this.height = height\n      this.color = color\n    }\n  \n    moveTo(x, y) {\n      this.x = x\n      this.y = y\n    }\n  \n    moveBy(dx, dy) {\n      this.x += dx\n      this.y += dy\n    }\n  \n    render(ctx) {\n      ctx.beginPath()\n      ctx.rect(this.x, this.y, this.width, this.height)\n      ctx.fillStyle = this.color\n      ctx.fill()\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sprite);\n\n//# sourceURL=webpack://breakout/./src/Sprite.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.js\");\n/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ball */ \"./src/Ball.js\");\n/* harmony import */ var _Bricks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bricks */ \"./src/Bricks.js\");\n/* harmony import */ var _GameLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameLabel */ \"./src/GameLabel.js\");\n\n\n\n\n\n\nconst canvas = document.getElementById(\"myCanvas\");\n      const ctx = canvas.getContext(\"2d\");\n      let x = canvas.width / 2;\n      let y = canvas.height - 30;\n      let dx = 2;\n      let dy = -2;\n      var ballRadius = 10;\n      const paddleHeight = 10;\n      const paddleWidth = 75;\n      let rightPressed = false;\n      let leftPressed = false;\n      let paddleXStart = (canvas.width- paddleWidth) / 2; \n      const paddleYStart = (canvas.height - paddleHeight);\n      const brickRowCount = 3;\n      const brickColumnCount = 5;\n      const brickWidth = 80;  // Adjust the width of the bricks\n      const brickHeight = 20;  // Adjust the height of the bricks\n      const brickPadding = 5;  // Adjust the padding between bricks\n      const brickOffsetTop =30;\n      const brickOffsetLeft = 180;\n        var score = 0;\n        var lives = 3;\n       \n       \n     let ball = new _Ball__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvas.width / 2, canvas.height / 2, 2, -2, ballRadius, \"orange\");\n\n\n      \n      \n     const bricks = new _Bricks__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        cols: brickColumnCount,\n        rows: brickRowCount,\n        width: brickWidth,\n        height: brickHeight,\n        padding: brickPadding,\n        offsetLeft: brickOffsetLeft,\n        offsetTop: brickOffsetTop\n      });\n\n\n      const scoreLabel = new _GameLabel__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('Score ', 8, 20,  \"blue\");\n      const livesLabel = new _GameLabel__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('Lives', canvas.width - 80, 20);\n      livesLabel.value =3;\n\n\n\n\n\n\n     \n\n     \n     const paddle = new _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](paddleXStart, paddleYStart,paddleWidth, paddleHeight, \"blue\");\n     \n     \n    \n     document.addEventListener(\"keydown\", keyDownHandler, false);\n     document.addEventListener(\"keyup\", keyUpHandler, false);\n    document.addEventListener(\"mousemove\", mouseMoveHandler, false);\n    function mouseMoveHandler(e){\n        const relativeX = e.clientX - canvas.offsetLeft;\n        if (relativeX > 0 && relativeX < canvas.width){\n            paddleXStart = relativeX - paddleWidth/2;\n        }\n\n    }\n    function keyDownHandler(e) {\n            if (e.key === \"Right\" || e.key === \"ArrowRight\") {\n                rightPressed = true;\n            } else if (e.key === \"Left\" || e.key === \"ArrowLeft\") {\n                leftPressed = true;\n            }\n    }\n    function keyUpHandler(e) {\n            if (e.key === \"Right\" || e.key === \"ArrowRight\") {\n                rightPressed = false;\n            } else if (e.key === \"Left\" || e.key === \"ArrowLeft\") {\n                leftPressed = false;\n            }\n    }\n    function collisionDetection() {\n      \n        for (let c = 0; c < bricks.cols; c+=1) {\n            for (let r = 0; r < bricks.rows; r+=1) {\n                const brick = bricks.bricks[c][r];\n                if (brick.status === 1) {\n                    if (ball.x > brick.x && \n                        ball.x < brick.x + brickWidth && \n                        ball.y > brick.y && ball.y < brick.y + brickHeight) {\n                        ball.dy = -ball.dy;\n                        brick.status = 0;\n\n                        scoreLabel.value +=1\n\n\n                        if(scoreLabel.value === brickRowCount * brickColumnCount){\n                            alert(\"YOU WIN CONGRATULATIONS!\");\n                            document.location.reload();\n                        }\n                    }\n                }\n            }   \n        }\n    }\n    \n    function movePaddle() {\n        if (rightPressed && paddleXStart < canvas.width - paddle.width) {\n            paddleXStart += 7;\n        } else if (leftPressed && paddleXStart > 0) {\n            paddleXStart -= 7;\n        }\n        \n        paddle.x = paddleXStart;\n    }\n       \n\n    \n\n    \n       function draw() {\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\n            bricks.render(ctx);\n            ball.render(ctx);\n            paddle.render(ctx);\n            scoreLabel.render(ctx);\n            livesLabel.render(ctx);\n            ball.moveBy(dx, dy); \n            \n            movePaddle();\n            \n            collisionDetection();\n            x+=dx;\n            y+=dy;\n            \n            \n            scoreLabel.render(ctx);\n            livesLabel.render(ctx);\n\n            \n\n            \n            if (ball.x + dx > canvas.width - ballRadius || ball.x + dx < ballRadius) {\n                dx = -dx;\n            }\n            if (ball.y + dy < ballRadius) {\n               dy = -dy;\n            }\n            else if (ball.y + dy > canvas.height - ballRadius) {\n                if (ball.x > paddleXStart && ball.x < paddleXStart + paddleWidth) {\n                    if (ball.y > canvas.height - paddleHeight) {\n                        dy = -dy;\n                        \n                    }\n                    \n                } else {\n                    livesLabel.value -=1;\n                if(livesLabel.value < 1){\n                    alert(\"GAME OVER\");\n                    document.location.reload();\n                    clearInterval(interval); // Needed for Chrome to end game\n                }else{\n                  x = canvas.width / 2;\n                  y = canvas.height - 30;\n                  paddleXStart = (canvas.width - paddleWidth) / 2;\n                  dx = 2;\n                  dy = -2;\n                }\n            }\n        }\n            \n            if(rightPressed && paddleXStart < canvas.width-paddleWidth) {\n                paddleXStart += 7;\n            }\n            else if(leftPressed && paddleXStart > 0) {\n                paddleXStart -= 7;\n            }\n            \n            \n            requestAnimationFrame(draw);\n        }\n        \n        draw();\n\n//# sourceURL=webpack://breakout/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;