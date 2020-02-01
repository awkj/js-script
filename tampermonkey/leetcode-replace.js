 // ==UserScript==
// @name         leetcode-replace
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  把 leetcode-go 上的 国际版 leetcode 链接替换成 国内版的
// @author       https://github.com/awkj
// @match        https://github.com/aQuaYi/LeetCode-in-Go/*
// @grant        none
// ==/UserScript==


(function() {
    "use strict"
    const leetcom = "https://leetcode.com" // 国际版 leetcode
    const leetcn = "https://leetcode-cn.com" // 中国版 leetcode

    let urlDom = document.getElementsByTagName("a");
    for(var i=0,len=urlDom.length;i<len;i++){
       if (urlDom[i].href.indexOf(leetcom) != -1){
           urlDom[i].href = urlDom[i].href.replace(leetcom,leetcn)
       };
   };
})()

