
          window.__NEXT_REGISTER_PAGE('/CurrentYearRoadmap', function() {
            var comp = module.exports=webpackJsonp([42],{321:function(e,t,r){e.exports=r(322)},322:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=r(0),n=a(s),o=r(65),i=a(o),d=[{done:!0,doneDate:"1st January 2018",title:"Core Wallet 4.0 Release Stage 2",description:"Tor Integration & Optional Stealth Addressing",progress:100,progressState:""},{done:!0,doneDate:"24th March 2018",title:"New website",description:"New look, guides, updated roadmap, list of official core members, blog with official news, mobile friendly",progress:100,progressState:""},{done:!0,doneDate:"9th June 2018",title:"First Verge Meetup",description:"First verge meetup in Netherlands, Amsterdam",progress:100,progressState:""},{done:!1,doneDate:"",title:"Merchandise Online Store",description:"Verge branded apparel that can be purchased with XVG and BTC.",progress:90,progressState:"testing products"},{done:!1,doneDate:"",title:"Mining Update",description:"XVGui Miner for Windows, Official Mining Pool & Mining Guide",progress:75,progressState:"work in progress"},{done:!1,doneDate:"",title:"Rebased Codebase",description:"Rebasing the entire codebase to include the newest standards shared by bitcoin.",progress:80,progressState:"rebasing"},{done:!1,doneDate:"",title:"RingCT Integration",description:"Ring Confidential Transactions - advanced masking of transaction amounts",progress:35,progressState:"integrating"},{done:!1,doneDate:"",title:"RSK",description:"RSK Smart Contract Integration",progress:25,progressState:"investigating integration"},{done:!1,doneDate:"",title:"Official iOS wallet",description:"iOS wallet with full-fledged feature set like a normal wallet.",progress:10,progressState:"planning started"}];t.default=function(e){var t=e.start,r=void 0===t?0:t,a=e.maxLength,s=void 0===a?d.length:a;return d.slice(r,r+s).map(function(e){return n.default.createElement("li",{className:"roadmap__item roadmap__item--"+(e.done?"done":"planned")},n.default.createElement("h3",null,e.title),e.description," ",n.default.createElement("br",null),e.done?n.default.createElement("div",{className:"roadmap-update-progress"},n.default.createElement("span",null,"Released")," ",n.default.createElement("div",{className:"progress progress-text"},e.doneDate)):n.default.createElement(i.default,{percentage:e.progress,text:e.progressState}))})}},65:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),s=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=function(e){var t=e.size,r=void 0===t?25:t,a=e.percentage,n=e.text,o=a/100;return s.default.createElement("div",{className:"roadmap-update-progress"},s.default.createElement("svg",{className:"progress",width:r,height:r,viewBox:"0 0 120 120"},s.default.createElement("circle",{className:"progress__meter",cx:"60",cy:"60",r:"54",strokeWidth:"12"}),s.default.createElement("circle",{className:"progress__value",cx:"60",cy:"60",r:"54",strokeWidth:"12",style:{strokeDashoffset:2*Math.PI*54*(1-o),strokeDasharray:2*Math.PI*54}})),s.default.createElement("p",{className:"progress progress-text"},a,"% - ",n))}}},[321]);
            return { page: comp.default }
          })
        