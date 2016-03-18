/**
 *  Author: Michael Sime (120011995)
 *  File: iframe_explorer.js
 *  Function: Replaces IFrame object with the
 *  id and src attributes of the IFrame object.
 *  This allows quick exploration of where an IFrame
 *  is from and what it is used for. 
 */

$(document).ready(function() {
    $("iframe").each(function() {
        $(this).replaceWith($("<div class=\"iframeSource\"> <p> IFrame ID: " + this.id + "<br/>" + " IFrame Src: " + this.src + "<br/> </p> </div>").text(this.value).css({
            'color': 'red',
            'font-weight': 'bold',
            'border': '2px solid red',
            'height': 'auto',
            'overflow': 'auto',
            'max-height': '500px',
            'max-width': '500px'
        }));
    });
});