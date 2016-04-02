

// Template.index.rendered = function () {
    

// //Scroll with anchor
    
//     // $(function() {
//     //     $('a[href*=#]:not([href=#])').click(function() {
//     //         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//     //             var target = $(this.hash);
//     //             target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//     //             if (target.length) {
//     //                 $('html,body').animate({
//     //                   scrollTop: target.offset().top
//     //                 }, 500);
//     //                 return false;
//     //             }
//     //         }
//     //     });
//     // });
// // Hack JQuery
//     var hackOpen, lifeOpen, workOpen = false;
//     $("#hackField").hover(
//         function() {
//             $("#hackField").addClass("goldHack");
//             $("#entrepreneur").addClass("goldHack");
//             $(".solidLineImg").addClass("goldHack");
//         },
//         function() {
//             $("#hackField").removeClass("goldHack");
//             $("#entrepreneur").removeClass("goldHack");
//             $(".solidLineImg").removeClass("goldHack");
//         }
//     );
//     $("#hackField").click(
//         function(){
//             $("#hackField").toggleClass("goldHackClick");
//             $("#entrepreneur").toggleClass("goldHackClick");
//             $(".solidLineImg").toggleClass("goldHackClick");
//             $("#workField").toggleClass("goldHackBorderClick");

//             $("#lifeField").removeClass("greenLifeClick");
//             $("#entrepreneur").removeClass("greenLifeClick");
//             $(".solidLineImg").removeClass("greenLifeClick");
//             $("#hackField").removeClass("greenLifeBorderClick");
//             $("#workField").removeClass("greenLifeBorderClick");

//             $("#workField").removeClass("blueWorkClick");
//             $("#entrepreneur").removeClass("blueWorkClick");
//             $(".solidLineImg").removeClass("blueWorkClick");
//             $("#hackField").removeClass("blueWorkBorderClick");

            
//             if(!hackOpen){
//                 $("#hackContent").slideDown(400);
//                 hackOpen = true;
//                 if (lifeOpen) {
//                     $("#lifeContent").slideUp(400);
//                     lifeOpen = false;
//                 }
//                 if (workOpen) {
//                     $("#workContent").slideUp(400);
//                     workOpen = false;
//                 }
//             }
//             else {
//                 $("#hackContent").slideUp(400);
//                 hackOpen = false;
//             }
//         }
//     );

//     $("#lifeField").hover(
//         function() {
//             $("#lifeField").addClass("greenLife");
//             $("#entrepreneur").addClass("greenLife");
//             $(".solidLineImg").addClass("greenLife");
//             $("#hackField").addClass("greenLifeBorder");
//             $("#workField").addClass("greenLifeBorder");
//         },
//         function() {
//             $("#lifeField").removeClass("greenLife");
//             $("#entrepreneur").removeClass("greenLife");
//             $(".solidLineImg").removeClass("greenLife");
//             $("#hackField").removeClass("greenLifeBorder");
//             $("#workField").removeClass("greenLifeBorder");
//         }
//     );
//     $("#lifeField").click(
//         function(){
//             $("#lifeField").toggleClass("greenLifeClick");
//             $("#entrepreneur").toggleClass("greenLifeClick");
//             $(".solidLineImg").toggleClass("greenLifeClick");
//             $("#hackField").toggleClass("greenLifeBorderClick");
//             $("#workField").toggleClass("greenLifeBorderClick");

//             $("#hackField").removeClass("goldHackClick");
//             $("#entrepreneur").removeClass("goldHackClick");
//             $(".solidLineImg").removeClass("goldHackClick");
//             $("#workField").removeClass("goldHackBorderClick");

//             $("#workField").removeClass("blueWorkClick");
//             $("#entrepreneur").removeClass("blueWorkClick");
//             $(".solidLineImg").removeClass("blueWorkClick");
//             $("#hackField").removeClass("blueWorkBorderClick");

//             if(!lifeOpen){
//                 $("#lifeContent").slideDown(400);
//                 lifeOpen = true;
//                 if (hackOpen) {
//                     $("#hackContent").slideUp(400);
//                     hackOpen = false;
//                 }
//                 if (workOpen) {
//                     $("#workContent").slideUp(400);
//                     workOpen = false;
//                 }
//             }
//             else {
//                 $("#lifeContent").slideUp(400);
//                 lifeOpen = false;
//             }
//         }
//     );

//     $("#workField").hover(
//         function() {
//             $("#workField").addClass("blueWork");
//             $("#entrepreneur").addClass("blueWork");
//             $(".solidLineImg").addClass("blueWork");
//         },
//         function() {
//             $("#workField").removeClass("blueWork");
//             $("#entrepreneur").removeClass("blueWork");
//             $(".solidLineImg").removeClass("blueWork");
//         }
//     );
//     $("#workField").click(
//         function(){
//             $("#workField").toggleClass("blueWorkClick");
//             $("#entrepreneur").toggleClass("blueWorkClick");
//             $(".solidLineImg").toggleClass("blueWorkClick");
//             $("#hackField").toggleClass("blueWorkBorderClick");

//             $("#hackField").removeClass("goldHackClick");
//             $("#entrepreneur").removeClass("goldHackClick");
//             $(".solidLineImg").removeClass("goldHackClick");
//             $("#workField").removeClass("goldHackBorderClick");

//             $("#lifeField").removeClass("greenLifeClick");
//             $("#entrepreneur").removeClass("greenLifeClick");
//             $(".solidLineImg").removeClass("greenLifeClick");
//             $("#hackField").removeClass("greenLifeBorderClick");
//             $("#workField").removeClass("greenLifeBorderClick");

//             if(!workOpen){
//                 $("#workContent").slideDown(400);
//                 workOpen = true;
//                 if (hackOpen) {
//                     $("#hackContent").slideUp(400);
//                     hackOpen = false;
//                 }
//                 if (lifeOpen) {
//                     $("#lifeContent").slideUp(400);
//                     lifeOpen = false;
//                 }
//             }
//             else {
//                 $("#workContent").slideUp(400);
//                 workOpen = false;
//             }
//         }
//     );

// };

