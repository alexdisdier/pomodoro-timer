(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,s){e.exports=s.p+"static/media/cool-alarm.8c0b93aa.mp3"},function(e,t,s){e.exports=s(37)},,,,,,function(e,t,s){},,function(e,t,s){},,function(e,t,s){},,function(e,t,s){},,function(e,t,s){},,function(e,t,s){},,function(e,t,s){},,function(e,t,s){},,function(e,t,s){},,function(e,t,s){},,function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),c=s(9),r=s.n(c),i=(s(17),s(2)),l=s(3),o=s(6),d=s(4),m=s(5),y=s(1),p=s(7),u=s.n(p);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}var b=function(e){return n.a.createElement("svg",v({version:1.1,id:"Capa_1",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 268.765 268.765",style:{enableBackground:"new 0 0 268.765 268.765"},xmlSpace:"preserve"},e),n.a.createElement("path",{style:{fillRule:"evenodd",clipRule:"evenodd"},d:"M267.92,119.461c-0.425-3.778-4.83-6.617-8.639-6.617 c-12.315,0-23.243-7.231-27.826-18.414c-4.682-11.454-1.663-24.812,7.515-33.231c2.889-2.641,3.24-7.062,0.817-10.133 c-6.303-8.004-13.467-15.234-21.289-21.5c-3.063-2.458-7.557-2.116-10.213,0.825c-8.01,8.871-22.398,12.168-33.516,7.529 c-11.57-4.867-18.866-16.591-18.152-29.176c0.235-3.953-2.654-7.39-6.595-7.849c-10.038-1.161-20.164-1.197-30.232-0.08 c-3.896,0.43-6.785,3.786-6.654,7.689c0.438,12.461-6.946,23.98-18.401,28.672c-10.985,4.487-25.272,1.218-33.266-7.574 c-2.642-2.896-7.063-3.252-10.141-0.853c-8.054,6.319-15.379,13.555-21.74,21.493c-2.481,3.086-2.116,7.559,0.802,10.214 c9.353,8.47,12.373,21.944,7.514,33.53c-4.639,11.046-16.109,18.165-29.24,18.165c-4.261-0.137-7.296,2.723-7.762,6.597 c-1.182,10.096-1.196,20.383-0.058,30.561c0.422,3.794,4.961,6.608,8.812,6.608c11.702-0.299,22.937,6.946,27.65,18.415 c4.698,11.454,1.678,24.804-7.514,33.23c-2.875,2.641-3.24,7.055-0.817,10.126c6.244,7.953,13.409,15.19,21.259,21.508 c3.079,2.481,7.559,2.131,10.228-0.81c8.04-8.893,22.427-12.184,33.501-7.536c11.599,4.852,18.895,16.575,18.181,29.167 c-0.233,3.955,2.67,7.398,6.595,7.85c5.135,0.599,10.301,0.898,15.481,0.898c4.917,0,9.835-0.27,14.752-0.817 c3.897-0.43,6.784-3.786,6.653-7.696c-0.451-12.454,6.946-23.973,18.386-28.657c11.059-4.517,25.286-1.211,33.281,7.572 c2.657,2.89,7.047,3.239,10.142,0.848c8.039-6.304,15.349-13.534,21.74-21.494c2.48-3.079,2.13-7.559-0.803-10.213 c-9.353-8.47-12.388-21.946-7.529-33.524c4.568-10.899,15.612-18.217,27.491-18.217l1.662,0.043 c3.853,0.313,7.398-2.655,7.865-6.588C269.044,139.917,269.058,129.639,267.92,119.461z M134.595,179.491 c-24.718,0-44.824-20.106-44.824-44.824c0-24.717,20.106-44.824,44.824-44.824c24.717,0,44.823,20.107,44.823,44.824 C179.418,159.385,159.312,179.491,134.595,179.491z"}))},h=(s.p,s(10)),g=s.n(h),k=(s(19),s(21),s(23),function(e){function t(e){var s;Object(i.a)(this,t);var a=(s=Object(o.a)(this,Object(d.a)(t).call(this,e))).props,n=a.radius,c=a.stroke;return s.normalizedRadius=n-2*c,s.circumference=2*s.normalizedRadius*Math.PI,s}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this.props,s=t.radius,a=t.stroke,c=t.progress,r=t.timerSession;e=r?60*this.props.sessionLen:60*this.props.breakLen;var i=this.circumference-c/e*this.circumference;return n.a.createElement("svg",{className:"svg-circle",height:2*s,width:2*s},n.a.createElement("circle",{stroke:"#fff",fill:"transparent",cx:s,cy:s,r:this.normalizedRadius,strokeWidth:a}),n.a.createElement("circle",{stroke:r?"#B6371D":"#59C8C6",fill:"transparent",strokeWidth:a,strokeDasharray:this.circumference+" "+this.circumference,style:{strokeDashoffset:i},r:this.normalizedRadius,cx:s,cy:s}))}}]),t}(a.Component)),f=function(e){return n.a.createElement("div",{className:"circle"},n.a.createElement(k,{radius:e.radius,stroke:e.stroke,progress:e.progress,timerSession:e.timerSession,sessionLen:e.sessionLen,breakLen:e.breakLen}),n.a.createElement("div",{className:"circle-content"},n.a.createElement("span",{id:"timer-label",className:"text"},e.timerSession?"session":"break"," is on"),n.a.createElement("span",{id:"time-left",className:"time"},e.displayTimer())))},S=(s(25),function(e){for(var t=[],s=e.cycles-e.intervalCycles,a=0;a<e.cycles;a++)t.push(n.a.createElement("div",{key:a,className:"circle-cycle active"}));return e.timerSession?1===s?t.splice(0,1,n.a.createElement("div",{key:"0",className:"circle-cycle active session-circle-active"})):2===s?t.splice(0,2,n.a.createElement("div",{key:"0",className:"circle-cycle active session-circle-active"}),n.a.createElement("div",{key:"1",className:"circle-cycle active session-circle-active"})):3===s&&t.splice(0,3,n.a.createElement("div",{key:"0",className:"circle-cycle active session-circle-active"}),n.a.createElement("div",{key:"1",className:"circle-cycle active session-circle-active"}),n.a.createElement("div",{key:"3",className:"circle-cycle active session-circle-active"})):e.timerSession||(1===s?t.splice(0,1,n.a.createElement("div",{key:"0",className:"circle-cycle active break-circle-active"})):2===s?t.splice(0,2,n.a.createElement("div",{key:"0",className:"circle-cycle active session-circle-active"}),n.a.createElement("div",{key:"1",className:"circle-cycle active break-circle-active"})):3===s&&t.splice(0,3,n.a.createElement("div",{key:"0",className:"circle-cycle active break-circle-active"}),n.a.createElement("div",{key:"1",className:"circle-cycle active break-circle-active"}),n.a.createElement("div",{key:"3",className:"circle-cycle active break-circle-active"}))),n.a.createElement("div",null,n.a.createElement("div",{className:"circle-cycle-container"},t),n.a.createElement("div",{className:"cycle-slogan"},e.timerSession?"Stay Focused":"Get a coffee"))}),E=(s(27),s(29),function(e){return n.a.createElement("div",{className:"settings-children session"},n.a.createElement("span",{id:"session-label"},"Stay focused"),n.a.createElement("div",{className:"settings-manip"},n.a.createElement("button",{id:"session-increment",onClick:e.incSessionHandler},"+"),n.a.createElement("span",{id:"session-length"},e.sessionLen),n.a.createElement("button",{id:"session-decrement",onClick:e.decSessionHandler},"-")))}),H=(s(31),function(e){return n.a.createElement("div",{className:"settings-children break"},n.a.createElement("span",{id:"break-label"},"Take a break"),n.a.createElement("div",{className:"settings-manip"},n.a.createElement("button",{id:"break-increment",onClick:e.incBreakHandler},"+"),n.a.createElement("span",{id:"break-length"},e.breakLen),n.a.createElement("button",{id:"break-decrement",onClick:e.decBreakHandler},"-")))}),C=(s(33),function(e){return n.a.createElement("div",{className:"settings-children cycle"},n.a.createElement("span",{id:"cycles-label"},"Cycles"),n.a.createElement("div",{className:"settings-manip"},n.a.createElement("button",{id:"cycles-increment",onClick:e.incCycleHandler},"+"),n.a.createElement("span",{id:"cycles-length"},e.cycles),n.a.createElement("button",{id:"cycles-decrement",onClick:e.decCycleHandler},"-")))}),w=function(e){function t(e){var s;return Object(i.a)(this,t),(s=Object(o.a)(this,Object(d.a)(t).call(this,e))).closeSettingsHandler=function(){var e=document.getElementById("settings"),t=document.getElementById("overlay");e.classList.add("slide-settings"),t.classList.remove("bm-overlay")},s.closeSettingsHandler=s.closeSettingsHandler.bind(Object(y.a)(Object(y.a)(s))),s}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"settings",className:this.props.settingsClass},n.a.createElement("button",{id:"close-settings",onClick:this.closeSettingsHandler,"aria-label":"Close Settings"},"X"),n.a.createElement(E,{sessionLen:this.props.sessionLen,incSessionHandler:this.props.incSessionHandler,decSessionHandler:this.props.decSessionHandler}),n.a.createElement(H,{breakLen:this.props.breakLen,incBreakHandler:this.props.incBreakHandler,decBreakHandler:this.props.decBreakHandler}),n.a.createElement(C,{cycles:this.props.cycles,incCycleHandler:this.props.incCycleHandler,decCycleHandler:this.props.decCycleHandler}),n.a.createElement("button",{id:"reset",className:"reset-btn",onClick:this.props.resetHandler},"Reset Default"))}}]),t}(a.Component);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}var O=n.a.createElement("path",{d:"M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40 c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20 c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z"}),L=function(e){return n.a.createElement("svg",j({version:1.1,id:"Capa_1",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 41.999 41.999",style:{enableBackground:"new 0 0 41.999 41.999"},xmlSpace:"preserve"},e),O)};s.p;function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}var N=n.a.createElement("path",{d:"M14.5,0c-0.552,0-1,0.447-1,1v40c0,0.553,0.448,1,1,1s1-0.447,1-1V1C15.5,0.447,15.052,0,14.5,0z"}),B=n.a.createElement("path",{d:"M27.5,0c-0.552,0-1,0.447-1,1v40c0,0.553,0.448,1,1,1s1-0.447,1-1V1C28.5,0.447,28.052,0,27.5,0z"}),x=function(e){return n.a.createElement("svg",T({version:1.1,id:"Capa_1",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 42 42",style:{enableBackground:"new 0 0 42 42"},xmlSpace:"preserve"},e),N,B)},I=(s.p,s(35),function(e){return n.a.createElement("div",{className:"circle-play"},n.a.createElement("div",{id:"start_stop",className:"circle-play-content",onClick:e.timerStartClicked},e.timerStart?n.a.createElement(x,{className:"play-icon",alt:"play icon"}):n.a.createElement(L,{className:"play-icon",alt:"play icon"})))}),R=function(e){function t(e){var s;return Object(i.a)(this,t),(s=Object(o.a)(this,Object(d.a)(t).call(this,e))).incBreakHandler=function(){var e=s.state.breakLen;s.state.timerStart||(e<60&&s.setState({breakLen:e+1,cyclesTimer:s.state.cyclesTimer+60*s.state.cycles}),s.state.timerSession&&e<60&&s.setState({breakLen:e+1,cyclesTimer:s.state.cyclesTimer+60*s.state.cycles,progress:0}))},s.decBreakHandler=function(){var e=s.state.breakLen;s.state.timerStart||(e>1&&s.setState({breakLen:e-1,cyclesTimer:s.state.cyclesTimer-60*s.state.cycles}),s.state.timerSession&&e>1&&s.setState({breakLen:e-1,cyclesTimer:s.state.cyclesTimer-60*s.state.cycles,progress:0}))},s.incSessionHandler=function(){var e=s.state.sessionLen;s.state.timerStart||(e<60&&s.setState({sessionLen:e+1,cyclesTimer:s.state.cyclesTimer+60*s.state.cycles,timer:s.state.timer+60,progress:0}),s.state.timerSession&&e<60&&s.setState({sessionLen:e+1,cyclesTimer:s.state.cyclesTimer+60*s.state.cycles,timer:60*(e+1),progress:0}))},s.decSessionHandler=function(){var e=s.state.sessionLen;s.state.timerStart||(e>1&&s.setState({sessionLen:e-1,cyclesTimer:s.state.cyclesTimer-60*s.state.cycles,timer:s.state.timer-60,progress:0}),s.state.timerSession&&e>1&&s.setState({sessionLen:e-1,cyclesTimer:s.state.cyclesTimer-60*s.state.cycles,timer:60*(e-1),progress:0}))},s.incCycleHandler=function(){var e=s.state.cycles,t=60*(s.state.sessionLen+s.state.breakLen);s.state.timerStart||(e<4&&s.setState({cycles:e+1,cyclesTimer:(e+1)*t,intervalCycles:s.state.intervalCycles+1}),s.state.timerSession&&s.state.cyclesStarted&&e<4&&s.setState({cycles:e+1,cyclesTimer:(e+1)*t,intervalCycles:s.state.intervalCycles+1}))},s.decCycleHandler=function(){var e=s.state.cycles,t=60*(s.state.sessionLen+s.state.breakLen);s.state.timerStart||(e>1&&s.setState({cycles:e-1,cyclesTimer:(e-1)*t,intervalCycles:s.state.intervalCycles-1}),s.state.timerSession&&s.state.cyclesStarted&&e>1&&s.setState({cycles:e-1,cyclesTimer:(e-1)*t,intervalCycles:s.state.intervalCycles-1}))},s.resetHandler=function(){s.stop(),s.setState({breakLen:5,sessionLen:25,intervalId:null,cycles:3,cyclesTimer:5400,cyclesStarted:!1,intervalCycles:3,timer:1500,timerStart:!1,timerSession:!0,progress:0})},s.openSettingsHandler=function(){var e=document.getElementById("settings"),t=document.getElementById("overlay");e.classList.remove("slide-settings"),t.classList.add("bm-overlay")},s.timerStartHandler=function(){var e=s.state.timerStart;s.setState({timerStart:!e,cyclesStarted:!0}),e?s.stop():s.start()},s.tick=function(){var e=document.getElementById("beep");0===s.state.cyclesTimer?(e.play(),s.resetHandler()):0===s.state.timer&&s.state.timerSession&&s.state.cyclesTimer>0?(e.play(),s.setState({timer:60*s.state.breakLen,timerSession:!1,progress:0})):0===s.state.timer&&!s.state.timerSession&&s.state.cyclesTimer>0?(e.play(),s.setState({timer:60*s.state.sessionLen,timerSession:!0,progress:0,intervalCycles:s.state.intervalCycles-1})):s.setState({timer:s.state.timer-1,cyclesTimer:s.state.cyclesTimer-1,progress:s.state.progress+1})},s.start=function(){s.setState({intervalId:setInterval(s.tick,1e3)})},s.stop=function(){clearInterval(s.state.intervalId);var e=document.getElementById("beep");e.pause(),e.currentTime=0},s.displayTimer=function(){var e=Math.floor(s.state.timer/60),t=s.state.timer-60*e;return(e=e<10?"0"+e:e)+":"+(t=t<10?"0"+t:t)},s.alarmSoundHandler=function(){console.log("alarmSoundHandler")},s.state={breakLen:5,sessionLen:25,intervalId:null,timerSession:!0,timer:1500,cycles:3,intervalCycles:3,cyclesTimer:5400,timerStart:!1,cyclesStarted:!1,settingsClass:"slide-settings box-shadow",overlay:"",progress:0,radius:100,stroke:2},s.incBreakHandler=s.incBreakHandler.bind(Object(y.a)(Object(y.a)(s))),s.decBreakHandler=s.decBreakHandler.bind(Object(y.a)(Object(y.a)(s))),s.incSessionHandler=s.incSessionHandler.bind(Object(y.a)(Object(y.a)(s))),s.decSessionHandler=s.decSessionHandler.bind(Object(y.a)(Object(y.a)(s))),s.incCycleHandler=s.incCycleHandler.bind(Object(y.a)(Object(y.a)(s))),s.decCycleHandler=s.decCycleHandler.bind(Object(y.a)(Object(y.a)(s))),s.resetHandler=s.resetHandler.bind(Object(y.a)(Object(y.a)(s))),s.openSettingsHandler=s.openSettingsHandler.bind(Object(y.a)(Object(y.a)(s))),s.timerStartHandler=s.timerStartHandler.bind(Object(y.a)(Object(y.a)(s))),s.tick=s.tick.bind(Object(y.a)(Object(y.a)(s))),s.start=s.start.bind(Object(y.a)(Object(y.a)(s))),s.stop=s.stop.bind(Object(y.a)(Object(y.a)(s))),s.displayTimer=s.displayTimer.bind(Object(y.a)(Object(y.a)(s))),s.alarmSoundHandler=s.alarmSoundHandler.bind(Object(y.a)(Object(y.a)(s))),s.swipeHandler=s.swipeHandler.bind(Object(y.a)(Object(y.a)(s))),s}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.hammer=u()(document.getElementById("stage-hammer-js")),this.hammer.on("swipe",this.swipeHandler())}},{key:"componentWillUnmount",value:function(){this.hammer=u()(document.getElementById("stage-hammer-js")),this.hammer.off("swipe",this.swipeHandler())}},{key:"swipeHandler",value:function(){var e=document.getElementById("stage-hammer-js"),t=document.getElementById("settings"),s=document.getElementById("overlay"),a=new u.a.Manager(e),n=new u.a.Pan({threshold:0,pointers:0});a.add(n),a.on("pan",function(e){e.velocityX<0?(t.classList.remove("slide-settings"),s.classList.add("bm-overlay")):(t.classList.add("slide-settings"),s.classList.remove("bm-overlay"))})}},{key:"render",value:function(){var e={background:"linear-gradient(165.18deg, #D66770 0%, rgba(254, 111, 69, 0.86) 92.3%)"};return this.state.timerSession||(e.background="linear-gradient(163.95deg, #94CCCB 1.06%, #E1E19D 92.27%)"),n.a.createElement("div",{className:"App",id:"stage-hammer-js"},n.a.createElement("div",{className:this.state.overlay,id:"overlay"}),n.a.createElement("div",{className:"Pomodoro-container",style:e},n.a.createElement("button",{id:"open-settings",onClick:this.openSettingsHandler,"aria-label":"Open Settings"},n.a.createElement(b,{className:"settings-icon",alt:"settings icon"})),n.a.createElement(f,{timerSession:this.state.timerSession,breakLen:this.state.breakLen,sessionLen:this.state.sessionLen,displayTimer:this.displayTimer,progress:this.state.progress,radius:this.state.radius,stroke:this.state.stroke}),n.a.createElement(S,{timerSession:this.state.timerSession,cyclesStarted:this.state.cyclesStarted,cyclesTimer:this.state.cyclesTimer,intervalCycles:this.state.intervalCycles,cycles:this.state.cycles,progress:this.state.progress,breakLen:this.state.breakLen,sessionLen:this.state.sessionLen}),n.a.createElement(I,{timerStartClicked:this.timerStartHandler,timerStart:this.state.timerStart})),n.a.createElement("audio",{id:"beep",src:g.a}),n.a.createElement(w,{settingsClass:this.state.settingsClass,openSettingsHandler:this.openSettingsHandler,breakLen:this.state.breakLen,incBreakHandler:this.incBreakHandler,decBreakHandler:this.decBreakHandler,sessionLen:this.state.sessionLen,incSessionHandler:this.incSessionHandler,decSessionHandler:this.decSessionHandler,cycles:this.state.cycles,incCycleHandler:this.incCycleHandler,decCycleHandler:this.decCycleHandler,resetHandler:this.resetHandler}))}}]),t}(a.Component),W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var s=e.installing;null!=s&&(s.onstatechange=function(){"installed"===s.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(n.a.createElement(R,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pomodoro-timer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/pomodoro-timer","/service-worker.js");W?(function(e,t){fetch(e).then(function(s){var a=s.headers.get("content-type");404===s.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):z(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):z(t,e)})}}()}],[[11,2,1]]]);
//# sourceMappingURL=main.e40b53da.chunk.js.map