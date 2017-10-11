// ==UserScript==
// @name         XHordes
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  A modded version of the Hordes.io client
// @author       LegusX
// @match        http://hordes.io/
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
//@run-at document-start
// ==/UserScript==
(function(){
    window.stop();
    GM_xmlhttpRequest({
        method: 'GET',
        url: "http://hordes.io",
        onload: function(ev) {
            document.open();
            let index = ev.responseText.replace('<script src="script/dist.min.js"></script>', '<script src="https://cdn.rawgit.com/LegusX/xhordes/04746df7/src/1-5/xhordes1-5.js"></script> ');
            index = index.replace('<link rel="stylesheet" href="gamestyles.css">', '<link rel="stylesheet"href="https://cdn.rawgit.com/LegusX/xhordes/505b3c17/src/1-3/xhordes.css">');
            document.write(index);
            document.close();
        }
    });
})();
