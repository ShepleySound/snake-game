(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(81),s=n.n(r),o=n(645),a=n.n(o),i=n(667),c=n.n(i),d=new URL(n(355),n.b),l=a()(s()),h=c()(d);l.push([e.id,"html {\n  box-sizing: border-box;\n}\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\n@font-face {\n  font-family: 'PressStart';\n  src: url("+h+") format('truetype');\n  font-style: normal;\n}\n\nhtml {\n  height: 100vh;\n}\n\nbody {\n  font-family: 'PressStart';\n  background-color: var(--main-background);\n  color: var(--text-color);\n  text-align: center;\n  height: 100%;\n  margin: 0;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  grid-template: 75px 50px 75vmin fr 1fr / 1fr;\n  grid-template-areas:\n    'title'\n    'score'\n    'gs'\n    'pause';\n}\n\nh1 {\n  color: var(--text-color);\n  grid-area: title;\n}\n\n.score {\n  grid-area: score;\n  color: var(--text-color);\n  font-size: 1.1rem;\n}\n\n.game-screen {\n  background-color: var(--grid-background);\n  display: grid;\n  border: 1px solid var(--areaBorder-color);\n  grid-area: gs;\n  height: 75vmin;\n  width: 75vmin;\n  align-self: start;\n  position: relative;\n  color: var(--shadow-color);\n}\n\n.square {\n  border: 1px solid var(--squareBorder-color);\n  /* transition: background-color 100ms; */\n}\n\n.square[data-val='1'] {\n  background-color: var(--snakeHead-color);\n  border-color: var(--snakeHead-borderColor);\n  box-shadow: var(--snakeHead-glow);\n  transition: none;\n}\n\n.square[data-val='2'] {\n  background-color: var(--snakeBody-color);\n  border-color: var(--snakeBody-borderColor);\n  box-shadow: var(--snakeBody-glow);\n\n  transition: none;\n}\n\n.square[data-val='4'] {\n  background-color: var(--food-color);\n  animation: glow 4s ease-in 0s infinite;\n  /* box-shadow: 0px 0px 2px #ffffff; */\n}\n\nselect {\n  background-color: var(--input-color);\n  color: var(--text-color);\n  font-family: 'PressStart';\n  font-size: 1rem;\n  padding: 8px;\n  margin: 12px;\n}\n\n@keyframes glow {\n  0%,\n  100% {\n    box-shadow: 0px 0px 10px var(--foodGlow-color);\n  }\n  50% {\n    box-shadow: 0px 0px 2px var(--food-color);\n  }\n}\n\n.dpad {\n  display: grid;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  grid-template: 1fr 2fr 1fr / 1fr 1fr;\n  grid-template-areas:\n    'up up'\n    'left right'\n    'down down';\n  gap: 1px;\n}\n\n.dpad-button {\n  background-color: #ffffff0a;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  user-select: none;\n}\n\n.dpad-button:hover {\n  background-color: #ffffff0f;\n}\n\n.dpad-button:active {\n  box-shadow: inset 0px 0px 6px #ffffff11;\n}\n\n.dpad-arrow {\n  opacity: 20%;\n  pointer-events: none;\n}\n\n.dpad-up {\n  grid-area: up;\n}\n\n.dpad-down {\n  grid-area: down;\n}\n\n.dpad-left {\n  grid-area: left;\n}\n\n.dpad-right {\n  grid-area: right;\n}\n\n.overlay {\n  font-size: calc(1.5rem + 1vw);\n  background-color: #00000088;\n  position: absolute;\n  height: 100vh;\n  width: 100vw;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  display: none;\n}\n\n.overlay-head,\n.overlay-hiscore {\n  margin: 18px;\n}\n\n.overlay-text,\n.option {\n  color: var(--text-color);\n}\n\n.entername-congrats,\n.entername-prompt,\n.entername-input {\n  font-family: 'PressStart';\n  font-size: calc(1.5rem + 1vw);\n  text-align: center;\n  margin: 12px;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  width: 80%;\n}\n\n.entername-input {\n  background-color: var(--input-color);\n  color: var(--text-color);\n  width: 60%;\n  padding: 12px;\n}\n\n.hiscore-container {\n  display: grid;\n  width: clamp(400px, 100%, 600px);\n  gap: 12px;\n  grid-auto-rows: 1fr;\n  grid-template-columns: 2fr 1fr;\n  align-items: center;\n  justify-items: end;\n  /* background-color: #181818; */\n  padding: 18px;\n}\n\n.options-container {\n  display: flex;\n}\n\n.option {\n  border: none;\n  font-size: 1rem;\n  font-family: 'PressStart';\n  padding: 12px;\n  margin: 36px 12px 36px 12px;\n  background-color: var(--button-color);\n}\n\n.option:hover {\n  background-color: var(--button-hover);\n}\n\n.option.pause-button {\n  grid-area: pause;\n  align-self: start;\n  margin-top: 12px;\n}\n\n.continue-button {\n  display: none;\n}\n\n.hiscore-name {\n  justify-self: start;\n}\n\n@media (orientation: portrait) {\n  body {\n    grid-template: 50px 25px 86vmin 1fr / 1fr;\n    grid-template-areas:\n      'title'\n      'score'\n      'gs'\n      'pause';\n  }\n  h1 {\n    font-size: 1.5rem;\n  }\n  .score {\n    font-size: 0.8rem;\n  }\n  .game-screen {\n    height: 86vmin;\n    width: 86vmin;\n  }\n}\n/* \n.hiscore-score {\n  width: min-content;\n} */\n",""]);const u=l},708:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),s=n.n(r),o=n(645),a=n.n(o)()(s());a.push([e.id,":root.darkMode {\n  --main-background: #121212;\n  --grid-background: #121212;\n  --areaBorder-color: #aaaaaa;\n  --squareBorder-color: #48484810;\n  --text-color: #cccccc;\n  --button-color: #242424;\n  --button-hover: #282828;\n  --input-color: #242424;\n\n  --snakeHead-color: #6c7ba3;\n  --snakeHead-borderColor: #b9d3d6;\n  --snakeBody-color: #79a1a0;\n  --snakeBody-BorderColor: #c9dada;\n  --food-color: #da6d3b;\n}\n\n:root.crimsonGold {\n  --main-background: #522525;\n  --grid-background: #581f1f;\n  --areaBorder-color: #613535;\n  --shadow-color: #814e4e;\n  --squareBorder-color: #48484810;\n  --text-color: #d6c1b5;\n  --button-color: #9b7021;\n  --button-hover: #aa6627;\n  --input-color: #8f5e47;\n  --snakeHead-color: #dfbf30;\n  --snakeHead-borderColor: #c9b64dc5;\n  --snakeBody-color: #d8b963;\n  --snakeBody-borderColor: #dbaf6ed3;\n  --food-color: #dbab43;\n  --foodGlow-color: #cccccc;\n\n  --snakeHead-glow: none;\n}\n\n:root.inTheDark {\n  --main-background: #000000;\n  --grid-background: #000000;\n  --areaBorder-color: #121212;\n  --shadow-color: #121212;\n  --squareBorder-color: #12121220;\n  --text-color: #aaaaae;\n  --button-color: #121212;\n  --button-hover: #131313;\n  --input-color: #121212;\n  --snakeHead-color: #020202;\n  --snakeHead-borderColor: transparent;\n  --snakeBody-color: #040404;\n  --snakeBody-borderColor: transparent;\n  --food-color: #000000;\n  --foodGlow-color: #cccccc;\n\n  --snakeHead-glow: 0px 0px 3px #cccccc;\n  --snakeBody-glow: 0px 0px 2px #cccccc;\n}\n",""]);const i=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,s,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},a=[],i=0;i<e.length;i++){var c=e[i],d=r.base?c[0]+r.base:c[0],l=o[d]||0,h="".concat(d," ").concat(l);o[d]=l+1;var u=n(h),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var p=s(m,r);r.byIndex=i,t.splice(i,0,{identifier:h,updater:p,references:1})}a.push(h)}return a}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var o=r(e=e||[],s=s||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var i=n(o[a]);t[i].references--}for(var c=r(e,s),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},777:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,s&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},355:(e,t,n)=>{e.exports=n.p+"21503c6a5385ab41dde9.ttf"},151:(e,t,n)=>{e.exports=n.p+"5e62d9556b6b2cbd1fdf.svg"},562:(e,t,n)=>{e.exports=n.p+"58574bec62d67625b53a.svg"},260:(e,t,n)=>{e.exports=n.p+"f7616536e5f817ecc33c.svg"},411:(e,t,n)=>{e.exports=n.p+"aa002585ebd8a955ddb6.svg"}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(379),t=n.n(e),r=n(795),s=n.n(r),o=n(777),a=n.n(o),i=n(565),c=n.n(i),d=n(216),l=n.n(d),h=n(589),u=n.n(h),m=n(426),p={};p.styleTagTransform=u(),p.setAttributes=c(),p.insert=a().bind(null,"head"),p.domAPI=s(),p.insertStyleElement=l(),t()(m.Z,p),m.Z&&m.Z.locals&&m.Z.locals;var g=n(708),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=l(),t()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals;const y=new class{constructor(e){const t=[];for(let n=1;n<=e;n++){const r=[];t[n]=r;for(let t=1;t<=e;t++)r[t]=0}this.size=e,this.gridStore=t}}(50),v=class{static desiredDirection="right";static direction="right";static up(e){e.x-=1}static down(e){e.x+=1}static left(e){e.y-=1}static right(e){e.y+=1}static getDesired(){return this.desiredDirection}static setDesired(e){this.desiredDirection=e}static getDirection(){return this.direction}static setDirection(e){this.direction=e}},S={get:e=>JSON.parse(localStorage.getItem(e)),set(e,t){localStorage.setItem(e,JSON.stringify(t))}},b=[{name:"Player 1",score:500},{name:"Player 2",score:400},{name:"Player 3",score:300},{name:"Player 4",score:200},{name:"Player 5",score:100}],x="up",w="down",k="left",E="right",q="Space",L=new class{constructor(){this.hiscoreElement=document.querySelector(".hiscore-container"),this.hiScoreList=S.get("hiscores")||b,document.querySelector("#reset-scores").addEventListener("click",(()=>{const[...e]=b;this.setScoreList(e)}))}addScore(e,t){this.hiScoreList.push({name:e,score:t})}isHighScore(e){return this.sortScores(),this.hiScoreList.length<5||this.hiScoreList.findIndex((({score:t})=>t<e))>=0}updateScore(e,t){this.sortScores();const n=this.hiScoreList.findIndex((({score:e})=>e<t));n>=0&&this.hiScoreList.splice(n,1,{name:e,score:t})}sortScores(){this.hiScoreList.sort(((e,t)=>t.score-e.score))}redrawScores(){this.sortScores(),this.hiscoreElement.innerHTML="",this.hiScoreList.forEach((e=>{const t=document.createElement("div");t.classList.add("hiscore-name"),t.innerText=e.name;const n=document.createElement("div");n.classList.add("hiscore-score"),n.innerText=e.score,n.dataset.score=e.score,this.hiscoreElement.append(t,n)})),S.set("hiscores",this.hiScoreList)}setScoreList(e){this.hiScoreList=e,this.redrawScores()}getScoreByName(e){return this.getCurrentHiscores().filter((t=>t.name===e))}getCurrentHiscores(){const e=document.querySelectorAll(".hiscore-name"),t=document.querySelectorAll(".hiscore-score"),n=[];return e.forEach(((e,r)=>{n.push({name:e.innerText,score:parseInt(t[r].dataset.score)})})),n}};var D=n(411),P=n(151),T=n(562),I=n(260);const z=document.querySelector(".score-value"),B=document.querySelector(".game-screen"),G=document.querySelectorAll(".dpad-button"),N=e=>{const t=document.createElement("embed");return t.classList.add("dpad-arrow"),t.src=e,t};G.forEach((e=>{switch(e.dataset.value){case x:e.append(N(D));break;case w:e.append(N(P));break;case k:e.append(N(T));break;case E:e.append(N(I))}}));const H=new class{constructor(e,t){this.snakeSize=3,this.snakeSpeed=75,this.movesSinceFood=0,this.pos=[{x:1,y:1}],this.food=[],this.grid=e,this.screen=t,this.setGridElement(this.pos[0].x,this.pos[0].y,1),this.isPaused=!1,this.score=0,this.isGameOver=!1,this.updatingSpeed=!1,this.currentName="",this.screen.setScoreText(this.score),this.inSettings=!1}eatFood(e){this.snakeSize+=1;const t=this.food.indexOf(e);this.food.splice(t,1),this.movesSinceFood=0,this.score+=100,this.screen.setScoreText(this.score),this.score%500==0&&(this.updatingSpeed=!0,this.snakeSpeed-=2)}isFoodEmpty(){return!this.food.length}getHeadPos(){return this.pos[0]}setHeadPos(e){this.pos[0]=e}getGridElementValue(e,t){return this.grid.gridStore[e][t]}setGridElement(e,t,n){this.grid.gridStore[e][t]=n,this.screen.setSquareValue(e,t,n)}clearGrid(){for(let e=1;e<=this.grid.size;e++)for(let t=1;t<=this.grid.size;t++)this.setGridElement(e,t,0)}moveSnake(e){if(4===this.getGridElementValue(e.x,e.y)&&this.eatFood(e),this.setGridElement(this.pos[0].x,this.pos[0].y,2),this.pos.unshift(e),this.setGridElement(e.x,e.y,1),this.pos.length>this.snakeSize){const e=this.pos.pop();this.setGridElement(e.x,e.y,0)}}isValidMove(e){return!this.pos.some((t=>t.x===e.x&&t.y===e.y))&&!(e.x<1||e.x>this.grid.size||e.y<1||e.y>this.grid.size)}createFood(e){this.setGridElement(e.x,e.y,4),this.food.push(e)}randomPosition(){return{x:Math.floor(Math.random()*this.grid.size)+1,y:Math.floor(Math.random()*this.grid.size)+1}}generateFood(){const e=this.randomPosition();this.getGridElementValue(e.x,e.y)?this.generateFood():this.createFood(e)}reset(){this.snakeSize=3,this.snakeSpeed=75,this.movesSinceFood=0,this.pos=[{x:1,y:1}],this.food=[],this.score=0,this.screen.setScoreText(this.score),this.isPaused=!1,this.isGameOver=!1,this.setGridElement(this.pos[0].x,this.pos[0].y,1),this.clearGrid()}}(y,new class{constructor(e,t,n,r){this.grid=e,this.gridSize=t,this.screenElement=n,this.screenElement.style.gridTemplate=`repeat(${this.gridSize}, 1fr) / repeat(${this.gridSize}, 1fr)`,this.scoreElement=r,this.grid.forEach(((e,t)=>{e.forEach(((e,n)=>{const r=document.createElement("div");r.dataset.x=`${t}`,r.dataset.y=`${n}`,r.dataset.val=`${e}`,r.classList.add("square"),this.screenElement.append(r)}))}))}gridSquare(e,t){return this.screenElement.querySelector(`[data-x="${e}"][data-y="${t}"]`)}setSquareValue(e,t,n){this.gridSquare(e,t).dataset.val=n}setScoreText(e){this.scoreElement.innerText=e,this.screenElement.style.boxShadow=`0px 0px ${e/100}px`}}(y.gridStore,y.size,B,z));new class{constructor(e,t){this.gameState=e,this.interval=t,this.state=0,this.enteringName=!1,this.nameInput=document.querySelector(".entername-input"),this.start(),this.keydownListener(),this.dpadListener(),this.boundResetListener=this.resetListener.bind(this),window.addEventListener("keydown",(e=>{"Enter"===e.code&&this.enteringName&&this.submitName(this.nameInput.value)})),document.querySelector("#submit-name").addEventListener("click",(()=>{this.submitName(this.nameInput.value)})),this.nameInput.addEventListener("blur",(e=>{this.nameInput.focus()})),document.querySelector("#resume").addEventListener("click",this.gameResume.bind(this)),document.querySelector("#restart").addEventListener("click",this.gameReset.bind(this)),document.querySelector("#pause").addEventListener("click",this.gamePause.bind(this))}start(){this.timerId=window.setInterval((()=>{this.moveSnake()}),this.gameState.snakeSpeed),this.state=1}updateSpeed(){clearInterval(this.timerId),this.timerId=window.setInterval((()=>{this.moveSnake()}),this.gameState.snakeSpeed),this.gameState.updatingSpeed=!1}pause(){1!=this.state&&3!=this.state||(clearInterval(this.timerId),this.state=2)}stop(){clearInterval(this.timerId),this.state=0}moveSnake(){v.setDirection(v.getDesired());const e={x:this.gameState.pos[0].x,y:this.gameState.pos[0].y};if(!this.gameState.isPaused)switch(v.getDirection()){case x:v.up(e);break;case w:v.down(e);break;case k:v.left(e);break;case E:v.right(e)}this.gameState.isValidMove(e)||this.gameState.isPaused||this.gameOver(),this.gameState.isValidMove(e)&&(this.gameState.moveSnake(e),this.gameState.movesSinceFood+=1,this.gameState.updatingSpeed&&this.updateSpeed()),this.gameState.movesSinceFood>=400&&(this.gameState.movesSinceFood=0,this.gameState.generateFood()),this.gameState.isFoodEmpty()&&this.gameState.generateFood()}keydownListener(){window.addEventListener("keydown",(e=>{if(!this.gameState.isPaused){const t={x:this.gameState.pos[0].x,y:this.gameState.pos[0].y};v.getDirection()!==x&&v.getDirection()!==w&&("ArrowUp"===e.code&&(v.up(t),v.setDesired(x)),"ArrowDown"===e.code&&(v.down(t),v.setDesired(w))),v.getDirection()!==k&&v.getDirection()!==E&&("ArrowLeft"===e.code&&(v.left(t),v.setDesired(k)),"ArrowRight"===e.code&&(v.right(t),v.setDesired(E)))}e.code===q&&(e.preventDefault,this.gameState.isGameOver||this.gameState.isPaused?this.gameState.inSettings||this.gameResume():this.gamePause())}))}handleDpad(e){const t=e.target;if(e.preventDefault(),!this.gameState.isPaused){const e={x:this.gameState.pos[0].x,y:this.gameState.pos[0].y};v.getDirection()!==x&&v.getDirection()!==w&&(t.dataset.value===x&&(v.up(e),v.setDesired(x)),t.dataset.value===w&&(v.down(e),v.setDesired(w))),v.getDirection()!==k&&v.getDirection()!==E&&(t.dataset.value===k&&(v.left(e),v.setDesired(k)),t.dataset.value===E&&(v.right(e),v.setDesired(E)))}}dpadListener(){document.querySelectorAll(".dpad-button").forEach((e=>{e.addEventListener("touchstart",this.handleDpad.bind(this)),e.addEventListener("click",this.handleDpad.bind(this))}))}gamePause(){2!==this.state&&0!==this.state&&(this.pause(),L.redrawScores(),this.gameState.isPaused=!0,document.querySelector("#state-overlay").style.display="flex",document.querySelector("#state-overlay .overlay-head").innerText="PAUSED",document.querySelector("#resume").style.display="flex")}gameResume(){2===this.state&&(this.gameState.isPaused=!1,document.querySelector("#state-overlay").style.display="none",document.querySelector("#state-overlay .overlay-head").innerText="",document.querySelector("#resume").style.display="none",this.start())}gameReset(){v.setDesired(E),document.querySelector("#state-overlay").style.display="none",document.querySelector("#state-overlay .overlay-head").innerText="",document.querySelector("#restart").style.display="none",this.gameState.reset(),this.start()}submitName(e){""!==e&&e.length<=8&&(this.gameState.currentName=e,this.enteringName=!1,L.hiScoreList.length<5?L.addScore(this.gameState.currentName,this.gameState.score):L.updateScore(this.gameState.currentName,this.gameState.score),this.gameState.currentName="",document.querySelector("#entername-overlay").style.display="none",this.gameOverOverlay())}resetListener(e){e.code===q&&this.gameState.isGameOver&&!this.gameState.inSettings&&(this.gameReset(),window.removeEventListener("keydown",this.resetListener))}gameOverOverlay(){this.gameState.isGameOver=!0,L.redrawScores(),document.querySelector("#state-overlay").style.display="flex",document.querySelector("#state-overlay .overlay-head").innerText="GAME OVER",document.querySelector("#restart").style.display="flex",window.addEventListener("keydown",this.boundResetListener)}gameOver(){this.stop(),""===this.gameState.currentName&&L.isHighScore(this.gameState.score)||this.gameOverOverlay(),""===this.gameState.currentName&&L.isHighScore(this.gameState.score)&&(document.querySelector("#entername-overlay").style.display="flex",this.enteringName=!0,this.nameInput.focus())}}(H,H.snakeSpeed),new class{constructor(e){this.gameState=e,this.body=document.querySelector("body"),this.theme=S.get("theme")||"darkMode",document.querySelector("#settings").addEventListener("click",this.gameSettings.bind(this)),document.querySelector("#back").addEventListener("click",this.settingsBack.bind(this)),document.querySelector("#themes-list").addEventListener("change",(e=>{this.setTheme(e.target.value)})),this.setTheme(this.theme)}gameSettings(){this.gameState.inSettings=!0,document.querySelector("#state-overlay").style.display="none",document.querySelector("#settings-overlay").style.display="flex"}settingsBack(){this.gameState.inSettings=!1,document.querySelector("#settings-overlay").style.display="none",document.querySelector("#state-overlay").style.display="flex"}setTheme(e){document.documentElement.className=e,S.set("theme",e),document.querySelector("#themes-list").value=e}}(H)})()})();