$(document).ready(function () {
    $("iframe").each(function () {
        //Using closures to capture each one
        var iframe = $(this);
        iframe.on("load", function () { //Make sure it is fully loaded
            iframe.contents().click(function (event) {
                iframe.trigger("click");
            });
        });

        iframe.click(function () {
            $(this).contents().find("body").html(this.src);
        });
    });
});

// $(document).ready(function() {
//     $(".glyphicon glyphicon-user")
// });

// This works (but has no clicking)
// $(document).ready(function(){
//     $('iframe').load(function() {
//           $(this).contents().find("body").html(this.src);
//       });
// });

// $(document).ready(function(){
//     console.log("In IFrame source");
//     //make sure IFrame is fully loaded
//     var iframe = $('iframe');
//     console.log("Value of iframe is: " + iframe.content);        
//   	iframe.on('load', function() {
//           console.log("IFrame on load");
//          	iframe.contents().click(function (event) {
//          	    iframe.trigger("click");
//          });
//       });

//      	iframe.click(function () {
//         console.log("Clicked");
//      		iframe.contents().find( "body").html(this.src);
//      });   
// });

// $(document).ready(function(){
//     //make sure IFrame is fully loaded
//     var iframe = $('iframe').toArray();
//     console.log(iframe);
//     $('iframe').each(function() {
//         $(this).contents().click(function (event) {
//           console.log("click: " + $(this).src);
//           $(this).contents().find("body").html(this.src);
//           //$(this).trigger("click");
//       });
//     });
    
//     $('iframe').each(function() { 
//          $(this).click(function () {
//           console.log("Clicked");
//           $(this).contents().find("body").html(this.src);
//           console.log("after change");
//        });
//     }); 
// });

// $(document).ready(function(){
//     $('iframe').on('click', function(event) {
//           $(this).contents().find("body").html(this.src);
//       });
// });