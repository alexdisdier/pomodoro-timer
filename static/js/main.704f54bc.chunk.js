(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(33)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(3),r=n.n(c),i=(n(15),n(4)),l=n(5),o=n(8),d=n(6),m=n(7),u=n(1);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var b=function(e){return s.a.createElement("svg",p({version:1.1,id:"Capa_1",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 268.765 268.765",style:{enableBackground:"new 0 0 268.765 268.765"},xmlSpace:"preserve"},e),s.a.createElement("path",{style:{fillRule:"evenodd",clipRule:"evenodd"},d:"M267.92,119.461c-0.425-3.778-4.83-6.617-8.639-6.617 c-12.315,0-23.243-7.231-27.826-18.414c-4.682-11.454-1.663-24.812,7.515-33.231c2.889-2.641,3.24-7.062,0.817-10.133 c-6.303-8.004-13.467-15.234-21.289-21.5c-3.063-2.458-7.557-2.116-10.213,0.825c-8.01,8.871-22.398,12.168-33.516,7.529 c-11.57-4.867-18.866-16.591-18.152-29.176c0.235-3.953-2.654-7.39-6.595-7.849c-10.038-1.161-20.164-1.197-30.232-0.08 c-3.896,0.43-6.785,3.786-6.654,7.689c0.438,12.461-6.946,23.98-18.401,28.672c-10.985,4.487-25.272,1.218-33.266-7.574 c-2.642-2.896-7.063-3.252-10.141-0.853c-8.054,6.319-15.379,13.555-21.74,21.493c-2.481,3.086-2.116,7.559,0.802,10.214 c9.353,8.47,12.373,21.944,7.514,33.53c-4.639,11.046-16.109,18.165-29.24,18.165c-4.261-0.137-7.296,2.723-7.762,6.597 c-1.182,10.096-1.196,20.383-0.058,30.561c0.422,3.794,4.961,6.608,8.812,6.608c11.702-0.299,22.937,6.946,27.65,18.415 c4.698,11.454,1.678,24.804-7.514,33.23c-2.875,2.641-3.24,7.055-0.817,10.126c6.244,7.953,13.409,15.19,21.259,21.508 c3.079,2.481,7.559,2.131,10.228-0.81c8.04-8.893,22.427-12.184,33.501-7.536c11.599,4.852,18.895,16.575,18.181,29.167 c-0.233,3.955,2.67,7.398,6.595,7.85c5.135,0.599,10.301,0.898,15.481,0.898c4.917,0,9.835-0.27,14.752-0.817 c3.897-0.43,6.784-3.786,6.653-7.696c-0.451-12.454,6.946-23.973,18.386-28.657c11.059-4.517,25.286-1.211,33.281,7.572 c2.657,2.89,7.047,3.239,10.142,0.848c8.039-6.304,15.349-13.534,21.74-21.494c2.48-3.079,2.13-7.559-0.803-10.213 c-9.353-8.47-12.388-21.946-7.529-33.524c4.568-10.899,15.612-18.217,27.491-18.217l1.662,0.043 c3.853,0.313,7.398-2.655,7.865-6.588C269.044,139.917,269.058,129.639,267.92,119.461z M134.595,179.491 c-24.718,0-44.824-20.106-44.824-44.824c0-24.717,20.106-44.824,44.824-44.824c24.717,0,44.823,20.107,44.823,44.824 C179.418,159.385,159.312,179.491,134.595,179.491z"}))},f=(n.p,n(17),n(19),function(e){return s.a.createElement("div",{className:"circle"},s.a.createElement("div",{className:"circle-content"},s.a.createElement("span",{className:"text"},e.timerType," is on"),s.a.createElement("span",{className:"time"},e.displayTimer())))}),y=(n(21),function(e){for(var t=[],n=0;n<e.cycles;n++)t.push(s.a.createElement("div",{key:n,className:"circle-cycle"}));return s.a.createElement("div",null,s.a.createElement("div",{className:"circle-cycle-container"},t),s.a.createElement("div",{className:"cycle-slogan"},"Stay Focused"))}),v=(n(23),n(25),function(e){return s.a.createElement("div",{className:"settings-children session"},s.a.createElement("span",{id:"session-label"},"Stay focused"),s.a.createElement("div",{className:"settings-manip"},s.a.createElement("button",{id:"session-increment",onClick:e.incSessionHandler},"+"),s.a.createElement("span",{id:"session-length"},e.sessionLen),s.a.createElement("button",{id:"session-decrement",onClick:e.decSessionHandler},"-")))}),k=(n(27),function(e){return s.a.createElement("div",{className:"settings-children break"},s.a.createElement("span",{id:"break-label"},"Take a break"),s.a.createElement("div",{className:"settings-manip"},s.a.createElement("button",{id:"break-increment",onClick:e.incBreakHandler},"+"),s.a.createElement("span",{id:"break-length"},e.breakLen),s.a.createElement("button",{id:"break-decrement",onClick:e.decBreakHandler},"-")))}),H=(n(29),function(e){return s.a.createElement("div",{className:"settings-children cycle"},s.a.createElement("span",{id:"cycles-label"},"Cycles"),s.a.createElement("div",{className:"settings-manip"},s.a.createElement("button",{id:"cycles-increment",onClick:e.incCycleHandler},"+"),s.a.createElement("span",{id:"cycles-length"},e.cycles),s.a.createElement("button",{id:"cycles-decrement",onClick:e.decCycleHandler},"-")))}),g=function(e){return s.a.createElement("div",{id:"settings"},s.a.createElement(v,{sessionLen:e.sessionLen,incSessionHandler:e.incSessionHandler,decSessionHandler:e.decSessionHandler}),s.a.createElement(k,{breakLen:e.breakLen,incBreakHandler:e.incBreakHandler,decBreakHandler:e.decBreakHandler}),s.a.createElement(H,{cycles:e.cycles,incCycleHandler:e.incCycleHandler,decCycleHandler:e.decCycleHandler}),s.a.createElement("button",{className:"reset-btn",onClick:e.resetHandler},"Reset Default"))};function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var S=s.a.createElement("path",{d:"M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40 c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20 c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z"}),L=function(e){return s.a.createElement("svg",h({version:1.1,id:"Capa_1",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 41.999 41.999",style:{enableBackground:"new 0 0 41.999 41.999"},xmlSpace:"preserve"},e),S)};n.p;function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var O=s.a.createElement("path",{d:"M14.5,0c-0.552,0-1,0.447-1,1v40c0,0.553,0.448,1,1,1s1-0.447,1-1V1C15.5,0.447,15.052,0,14.5,0z"}),w=s.a.createElement("path",{d:"M27.5,0c-0.552,0-1,0.447-1,1v40c0,0.553,0.448,1,1,1s1-0.447,1-1V1C28.5,0.447,28.052,0,27.5,0z"}),C=function(e){return s.a.createElement("svg",E({version:1.1,id:"Capa_1",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 42 42",style:{enableBackground:"new 0 0 42 42"},xmlSpace:"preserve"},e),O,w)},j=(n.p,n(31),function(e){return s.a.createElement("div",{className:"circle-play"},s.a.createElement("div",{className:"circle-play-content",onClick:e.timerStartClicked},e.timerStart?s.a.createElement(C,{className:"play-icon",alt:"play icon"}):s.a.createElement(L,{className:"play-icon",alt:"play icon"})))}),x=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(d.a)(t).call(this,e))).incBreakHandler=function(){var e=n.state.breakLen;e<60&&n.setState({breakLen:e+1})},n.decBreakHandler=function(){var e=n.state.breakLen;e>1&&n.setState({breakLen:e-1})},n.incSessionHandler=function(){var e=n.state.sessionLen;e<60&&n.setState({sessionLen:e+1})},n.decSessionHandler=function(){var e=n.state.sessionLen;e>1&&n.setState({sessionLen:e-1})},n.incCycleHandler=function(){var e=n.state.cycles;e<5&&n.setState({cycles:e+1})},n.decCycleHandler=function(){var e=n.state.cycles;e>0&&n.setState({cycles:e-1})},n.resetHandler=function(){n.setState({breakLen:5,sessionLen:25,minutesLeft:null,secondsLeft:null,intervalId:null,timerTxt:"",cycles:3,timerStart:!1})},n.toggleSettingsHandler=function(){var e=n.state.showSettings;n.setState({showSettings:!e})},n.timerStartHandler=function(){var e=n.state.timerStart;n.setState({timerStart:!e}),e?(console.log("timer paused"),n.stop()):(console.log("timer started"),n.start())},n.tick=function(){console.log("ticking");var e=n.state.minutesLeft,t=n.state.secondsLeft;n.state.secondsLeft>0?n.setState({secondsLeft:t-1}):0===n.state.secondsLeft&&n.setState({minutesLeft:e-1,secondsLeft:59})},n.start=function(){null!==n.state.sessionLen&&null===n.state.minutesLeft&&null===n.state.secondsLeft?n.setState({intervalId:setInterval(n.tick,1e3),timerSeconds:60*n.state.sessionLen,minutesLeft:n.state.sessionLen-1,secondsLeft:59}):n.setState({intervalId:setInterval(n.tick,1e3)})},n.stop=function(){clearInterval(n.state.intervalId)},n.displayTimer=function(){var e,t;return null!==n.state.minutesLeft?(e=parseInt(n.state.minutesLeft),t=parseInt(n.state.secondsLeft),n.state.minutesLeft<10&&(e="0"+parseInt(n.state.minutesLeft)),n.state.secondsLeft<10&&(t="0"+parseInt(n.state.secondsLeft))):n.state.sessionLen<10?(e="0"+parseInt(n.state.sessionLen),t="00"):(e=parseInt(n.state.sessionLen),t="00"),e+":"+t},n.state={breakLen:5,sessionLen:25,minutesLeft:null,secondsLeft:null,intervalId:null,timerType:"session",timerSeconds:"",timerTxt:"",cycles:3,timerStart:!1,showSettings:!1},n.incBreakHandler=n.incBreakHandler.bind(Object(u.a)(Object(u.a)(n))),n.decBreakHandler=n.decBreakHandler.bind(Object(u.a)(Object(u.a)(n))),n.incSessionHandler=n.incSessionHandler.bind(Object(u.a)(Object(u.a)(n))),n.decSessionHandler=n.decSessionHandler.bind(Object(u.a)(Object(u.a)(n))),n.incCycleHandler=n.incCycleHandler.bind(Object(u.a)(Object(u.a)(n))),n.decCycleHandler=n.decCycleHandler.bind(Object(u.a)(Object(u.a)(n))),n.resetHandler=n.resetHandler.bind(Object(u.a)(Object(u.a)(n))),n.toggleSettingsHandler=n.toggleSettingsHandler.bind(Object(u.a)(Object(u.a)(n))),n.timerStartHandler=n.timerStartHandler.bind(Object(u.a)(Object(u.a)(n))),n.tick=n.tick.bind(Object(u.a)(Object(u.a)(n))),n.start=n.start.bind(Object(u.a)(Object(u.a)(n))),n.stop=n.stop.bind(Object(u.a)(Object(u.a)(n))),n.displayTimer=n.displayTimer.bind(Object(u.a)(Object(u.a)(n))),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=null;return this.state.showSettings&&(e=s.a.createElement(g,{toggleSettingsHandler:this.toggleSettingsHandler,breakLen:this.state.breakLen,incBreakHandler:this.incBreakHandler,decBreakHandler:this.decBreakHandler,sessionLen:this.state.sessionLen,incSessionHandler:this.incSessionHandler,decSessionHandler:this.decSessionHandler,cycles:this.state.cycles,incCycleHandler:this.incCycleHandler,decCycleHandler:this.decCycleHandler,resetHandler:this.resetHandler})),s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"Pomodoro-container"},s.a.createElement("button",{id:"toggle-settings",onClick:this.toggleSettingsHandler},this.state.showSettings?"x":s.a.createElement(b,{className:"settings-icon",alt:"settings icon"})),s.a.createElement(f,{timerType:this.state.timerType,breakLen:this.state.breakLen,sessionLen:this.state.sessionLen,minutesLeft:this.state.minutesLeft,secondsLeft:this.state.secondsLeft,displayTimer:this.displayTimer}),s.a.createElement(y,{timerType:this.state.timerType,cycles:this.state.cycles}),e,s.a.createElement(j,{timerStartClicked:this.timerStartHandler,timerStart:this.state.timerStart})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.704f54bc.chunk.js.map