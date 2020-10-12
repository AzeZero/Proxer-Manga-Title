// ==UserScript==
// @name         Kapitel Title
// @version      1.0
// @description  Fügt das Wort Chapter in die titel spalte eines Manga Kapitels hinzu.
// @include      http://proxer.me/*
// @author       Aze
// @match        https://proxer.me/uploadmanga?id=*
// @grant        none
// ==/UserScript==

var type = document.getElementById("uploadmanga_title")
type.value = "Chapter "