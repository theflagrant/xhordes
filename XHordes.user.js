// ==UserScript==
// @name         XHordes
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  A modded version of the Hordes.io client
// @author       LegusX
// @match        http://hordes.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var allScripts = document.getElementsByTagName("script");
    for (var i = allScripts.length; i--; ) {
        allScripts[i].remove();
    }
    var script = document.createElement("script");
    script.src = "https://raw.githubusercontent.com/LegusX/xhordes/master/0-0-1.js";
    document.body.appendChild(script);
})();