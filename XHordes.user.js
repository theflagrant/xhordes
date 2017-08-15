// ==UserScript==
// @name         XHordes
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  A modded version of the Hordes.io client
// @author       LegusX
// @match        http://hordes.io/*
// @grant        GM_getValue
// @grant        GM_setValue
//@run-at document-start
// ==/UserScript==
fetch("http://hordes.io/").then(res=>res.text()).then(res=>{
    document.documentElement.innerHTML = res.replace('<script src="script/dist.min.js"></script>', '');
});
var interval=setInterval(()=>{
    if (typeof document.body === "undefined" || document.body === null) return;
    var script = document.createElement("script");
    script.src = "https://rawgit.com/BlazingFire007/xhordes/master/src/xhordes.min.js";
    script.dataType = "text/javascript";
    document.body.appendChild(script);
    clearInterval(interval);
}, 10);
