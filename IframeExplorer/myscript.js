$(document).ready(function() {
    console.log("IN JQUERY");
    //document.body.style.backgroundColor= "red";
    $("iframe").each(function() {
        $(this).replaceWith($("<div class=\"iframeSource\"> <p> IFrame ID: " + this.id + "<br/>" + " IFrame Src: " + this.src + "<br/> </p> </div>").text(this.value).css({
            'color': 'red',
            'font-weight': 'bold',
            'border': '2px solid red'
        }));
        // Call detectOverlap($(this)); 
        console.log("Advert source: " + this.src);
    });
});

function detectOverlap(element) {
    if (element.offsetHeight < element.scrollHeight ||
        element.offsetWidth < element.scrollWidth) {
        // element has overflow
        // do reformat

    } else {
        // your element doesn't have overflow
        return element;
    } 
 
}

  // if ($(this).scrollWidth >  $(this).innerWidth()) {
  //   //Text has over-flowed --> handle it by reformating
  //   console.log("Advert overflow: " + this.id);

  // } 


    //$("iframe").contents().find("body").html("<div> <p> YOLO </p> </div>");
    //$("iframe").replaceWith("<div> <p> YOLO </p> </div>");
        // var id = $(this).id; 
      // // no id avaliable
      // if(id == ""){
      //  id = "N/A"; 
      // }

      // //source 
      // var src = $(this).src; 
      // // no id avaliable
      // if(src == ""){
      //  src = "N/A"; 
      // }
  // TODO: deal with overflows

    // }  


// .iframeSource{
// 	text-align: center;
// 	font-size: 14pt;
// 	font-weight: bold;
// 	border: 3px solid red;
// }

// ---------- This shit works ----------------------
// $(document).ready(function () {
// 	console.log("IN JQUERY");
// 	//document.body.style.backgroundColor= "red";
//     $("iframe").css( "border", "3px solid red" );
//     //$("iframe").contents().find("body").html("<div> <p> YOLO </p> </div>");
//     //$("iframe").replaceWith("<div> <p> YOLO </p> </div>");
//     $("iframe").each(function() {
//     	$(this).replaceWith("IFrame ID: " + this.id + " IFrame Src: " + this.src);
//     	console.log("Advert source: " + this.src);
// 	});
// });

// $(document).ready(function () {
//  console.log("IN JQUERY");
//  document.body.style.backgroundColor= "red";
//     $("iframe").each(function () {
//      console.log("IN Second loop");
//         //Using closures to capture each one
//         // -------- undefined here -----------
//         var iframe = $(this);
//         console.log("Iframe val is " + iframe);
//         console.log("b4 this.on load");
//         iframe.on("load", function () { //Make sure it is fully loaded
//          console.log("IN JQUERY b4 src");
//             $(this).contents().find("body").html(this.src);
//             console.log("IN JQUERY after src");
//         });
//     });
// });

// $(document).ready(function () {
//     $("iframe").each(function () {
//         //Using closures to capture each one
//         var iframe = $(this);
//         iframe.on("load", function () { //Make sure it is fully loaded
//             iframe.contents().click(function (event) {
//                 iframe.trigger("click");
//             });
//         });

//         iframe.click(function () {
//             $(this).contents().find("body").html(this.src);
//         });
//     });
// });