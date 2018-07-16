
          window.__NEXT_REGISTER_PAGE('/roadmap', function() {
            var comp = module.exports=webpackJsonp([37],{117:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),l=r(n),s=a(65),o=r(s),d=[{done:!0,doneDate:"1st January 2018",title:"Core Wallet 4.0 Release Stage 2",description:"Tor Integration & Optional Stealth Addressing",progress:100,progressState:""},{done:!0,doneDate:"24th March 2018",title:"New website",description:"New look, guides, updated roadmap, list of official core members, blog with official news, mobile friendly",progress:100,progressState:""},{done:!0,doneDate:"9th June 2018",title:"First Verge Meetup",description:"First verge meetup in Netherlands, Amsterdam",progress:100,progressState:""},{done:!1,doneDate:"",title:"Merchandise Online Store",description:"Verge branded apparel that can be purchased with XVG and BTC.",progress:90,progressState:"testing products"},{done:!1,doneDate:"",title:"Mining Update",description:"XVGui Miner for Windows, Official Mining Pool & Mining Guide",progress:75,progressState:"work in progress"},{done:!1,doneDate:"",title:"Rebased Codebase",description:"Rebasing the entire codebase to include the newest standards shared by bitcoin.",progress:80,progressState:"rebasing"},{done:!1,doneDate:"",title:"RingCT Integration",description:"Ring Confidential Transactions - advanced masking of transaction amounts",progress:35,progressState:"integrating"},{done:!1,doneDate:"",title:"RSK",description:"RSK Smart Contract Integration",progress:25,progressState:"investigating integration"},{done:!1,doneDate:"",title:"Official iOS wallet",description:"iOS wallet with full-fledged feature set like a normal wallet.",progress:10,progressState:"planning started"}];t.default=function(e){var t=e.start,a=void 0===t?0:t,r=e.maxLength,n=void 0===r?d.length:r;return d.slice(a,a+n).map(function(e){return l.default.createElement("li",{className:"roadmap__item roadmap__item--"+(e.done?"done":"planned")},l.default.createElement("h3",null,e.title),e.description," ",l.default.createElement("br",null),e.done?l.default.createElement("div",{className:"roadmap-update-progress"},l.default.createElement("span",null,"Released")," ",l.default.createElement("div",{className:"progress progress-text"},e.doneDate)):l.default.createElement(o.default,{percentage:e.progress,text:e.progressState}))})}},393:function(e,t,a){e.exports=a(394)},394:function(e,t,a){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.t;return s.default.createElement(c.default,null,s.default.createElement(d.default,null,s.default.createElement("title",{key:"title"},t("common:meta.roadmap.title",{defaultValue:"Roadmap - VergeCurrency.com"}))),s.default.createElement("div",{className:"roadmap"},s.default.createElement("div",{className:"themed-container__gray themed-container__gray--roadmap"},s.default.createElement("div",{className:"container"},s.default.createElement("div",{className:"row center-xs roadmap"},s.default.createElement("div",{className:"col-xs-11 col-sm-8 col-lg-6 start-xs center-sm"},s.default.createElement("h6",null,"Roadmap"),s.default.createElement("h2",null,"A roadmap with great features to come.",s.default.createElement("br",null),"Join us while we're still growing!"),s.default.createElement("p",null,"As an open-source community & volunteer-driven project, our roadmap is meant as a general guideline for how we are developing Verge into one of the best cryptocurrency options out there."),s.default.createElement("p",null,"In the spirit of transparency and in good faith to the community, we want this roadmap to be made public. However, please keep in mind that this roadmap is subject to change based on priorities, unplanned developments and new ideas."),s.default.createElement("div",{className:"row start-xs center-sm pt"},s.default.createElement("div",{className:"col-xs-10 col-xs-offset-2 col-sm-12 col-sm-offset-0 col-md-10 col-lg-9 start-xs"},s.default.createElement("ul",{className:"roadmap__timeline"},s.default.createElement("li",{className:"roadmap__year roadmap__year--current"},s.default.createElement("span",null,"2018")),s.default.createElement(g.default,null),s.default.createElement("li",{className:"roadmap__year roadmap__year--next"},s.default.createElement("span",null,"2019")),s.default.createElement("li",{className:"roadmap__item roadmap__item--planned"},s.default.createElement("h3",null,"I2P Android Wallet"),"Anonymous mobile transactions over the I2P network",s.default.createElement("br",null),s.default.createElement("b",null,"Unplanned")))))))))))}Object.defineProperty(t,"__esModule",{value:!0});var l=a(0),s=r(l),o=a(8),d=r(o),i=a(6),c=r(i),u=a(7),m=a(9),p=r(m),f=a(117),g=r(f),h=(0,u.translate)(["common","roadmap"],{i18n:p.default,wait:e.browser})(n);t.default=h}).call(t,a(5))},65:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),n=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(e){var t=e.size,a=void 0===t?25:t,r=e.percentage,l=e.text,s=r/100;return n.default.createElement("div",{className:"roadmap-update-progress"},n.default.createElement("svg",{className:"progress",width:a,height:a,viewBox:"0 0 120 120"},n.default.createElement("circle",{className:"progress__meter",cx:"60",cy:"60",r:"54",strokeWidth:"12"}),n.default.createElement("circle",{className:"progress__value",cx:"60",cy:"60",r:"54",strokeWidth:"12",style:{strokeDashoffset:2*Math.PI*54*(1-s),strokeDasharray:2*Math.PI*54}})),n.default.createElement("p",{className:"progress progress-text"},r,"% - ",l))}}},[393]);
            return { page: comp.default }
          })
        