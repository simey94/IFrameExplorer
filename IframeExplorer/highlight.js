/**
 *  Author: Michael Sime (120011995)
 *  File: highlight.js
 *  Function: Place a red border around all IFrame objects
 *	within a webpage. 
 */

$(document).ready(function () {
	$("iframe").css("border", "3px solid red");
});