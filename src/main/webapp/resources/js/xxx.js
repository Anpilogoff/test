
var sides = ['left','right','topp','bottom', 'front','back'];
var elems = ['Border','Shadow1', 'Shadow2', 'Shadow3', 'IconShadow'];
let elem;
var inp = document.querySelectorAll('.inputs');

var current;
let iconShad = '0px 0px 0px white';
let border = '0px solid white';


let sh1 = '0px 0px 0px 0px white';
let sh2 ='0px 0px 0px 0px white';
let sh3 = '0px 0px 0px 0px white';

let sh11 = '0px 0px 0px 0px';
let sh22 = '0px 0px 0px 0px';
let sh33 = '0px 0px 0px 0px';

let txtSh = '0px 0px 0px';

let option;



//TO DO: sides поменять на edje)
for (let d = 0; d < sides.length; d++) {
    for (let c = 0; c < elems.length; c++) {
        let elemId = sides[d] + elems[c];

        let elem = document.getElementById(elemId);
        let side = document.getElementById(sides[d]);
        let colorVar = document.getElementById(elemId + 'Color');
        let colorVarWrapper = document.getElementById(elemId + 'ColorWraper');
        let option2;
        let option1;

        elem.addEventListener("input", function () {


            if (elemId.endsWith('Border')) {
                side.style.border = elem.value + 'px solid ' + colorVar.value;
                colorVar.style.border = '45px solid ' + colorVar.value;
                colorVarWrapper.style.boxShadow = '0px 0px 5px 3px ' + colorVar.value;
                colorVarWrapper.animate([
                        {boxShadow: '0px 0px 0px 0px ' + colorVar.value}, {boxShadow: '0px 0px 3px 2px ' + colorVar.value}, {boxShadow: '0px 0px 0px 0px ' + colorVar.value},
                        {boxShadow: '0px 0px 3px 2px ' + colorVar.value}, {boxShadow: '0px 0px 0px 0px ' + colorVar.value}, {boxShadow: '0px 0px 3px 2px ' + colorVar.value},
                        {boxShadow: '0px 0px 0px 0px ' + colorVar.value}, {boxShadow: '0px 0px 3px 2px ' + colorVar.value}, {boxShadow: '0px 0px 0px 0px ' + colorVar.value},
                        {boxShadow: '0px 0px 3px 2px ' + colorVar.value}, {boxShadow: '0px 0px 0px 0px ' + colorVar.value}, {boxShadow: '0px 0px 3px 2px ' + colorVar.value}
                    ],
                    {
                        duration: (1300),
                        iterations: 1,
                        easing: 'ease-in-out'
                    });
            } else if (elem.id.endsWith('Shadow1')) {

                sh11 = 'inset 0px 0px ' + elem.value + 'px ' + elem.value/2 + 'px ' + colorVar.value;
            } else if (elem.id.endsWith('Shadow2')) {
                sh22 = 'inset 0px 0px ' + elem.value + 'px '+ elem.value/2 + 'px ' + colorVar.value;
            } else if (elem.id.endsWith('Shadow3')) {
                sh33 = 'inset 0px 0px ' + elem.value + 'px ' + elem.value/2 + 'px' + colorVar.value;
            } else {
                // iconShad = '0px 0px ' + elem.value + 'px '  + colorVar.value;

                txtSh = option1.value + 'px ' + option2.value + 'px ' + elem.value + 'px ' + colorVar.value;
                side.style.textShadow = txtSh + iconShad;

            }
            side.style.boxShadow = sh1 + ',' + sh2 + ',' + sh3 + ',' + sh11 + ',' + sh22 + ',' + sh33;
        });


        colorVar.addEventListener("input", function () {
            colorVar.style.border = '45px solid ' + colorVar.value;
            colorVarWrapper.style.boxShadow = '0px 0px 5px 3px ' + colorVar.value;

            if (elem.id.endsWith('Border') && elemId.startsWith(side.id)) {
                side.style.border = elem.value + 'px solid ' + colorVar.value;
                elem.style.boxShadow = '0px 0px 2px 1px ' + colorVar.value + ', 0px 0px 2px 2px inset' + colorVar.value;
            } else if (elem.id.endsWith('Shadow1')) {


                // sh1 = '0px 0px ' + elem.value + 'px ' + colorVar.value;

                sh1 = '0px 0px ' + option1.value + 'px ' + option2.value + 'px ' + colorVar.value + ',' +
                    '0px 0px ' + elem.value / 2 + 'px ' + elem.value / 3 + 'px ' + colorVar.value + ' inset';

                elem.style.boxShadow = '0 0 2px 1px ' + colorVar.value + ', 0 0 2px 2px inset' + colorVar.value;
            } else if (elem.id.endsWith('Shadow2')) {
                // sh2 = '0px 0px ' + elem.value + 'px ' + colorVar.value;
                // elem.style.boxShadow = '0 0 2px 1px ' + colorVar.value + ', 0 0 2px 2px inset' + colorVar.value;

                sh2 = '0px 0px ' + option1.value + 'px ' + option2.value + 'px ' + colorVar.value + ',' +
                    '0px 0px ' + elem.value + 'px ' + elem.value / 3 + 'px' + colorVar.value + ' inset';
                elem.style.boxShadow = '0px 0px 2px 1px ' + colorVar.value + ', 0px 0px 2px 2px inset' + colorVar.value;
            } else if (elem.id.endsWith('Shadow3')) {
                // sh3 = 'inset 0px 0px ' + elem.value + 'px ' + colorVar.value;
                // elem.style.boxShadow = '0 0 2px 1px ' + colorVar.value + ', 0 0 2px 2px inset' + colorVar.value;

                sh3 = '0px 0px ' + option1.value + 'px ' + option2.value + 'px ' + colorVar.value + ',' +
                    '0px 0px ' + elem.value + 'px ' + elem.value / 3 + 'px' + colorVar.value + ' inset';
                elem.style.boxShadow = '0px 0px 2px 1px ' + colorVar.value + ', 0px 0px 2px 2px inset' + colorVar.value;
            } else if (elem.id.endsWith('IconShadow')) {
                iconShad = '0px 0px ' + elem.value + 'px ' + colorVar.value;
                elem.style.boxShadow = '0px 0px 2px 1px ' + colorVar.value + ', 0px 0px 2px 2px inset' + colorVar.value;

                side.style.textShadow = iconShad + ',' + txtSh;   //TODO: add 1 more value...Tired.....=((
            }
            side.style.boxShadow = sh1 + ',' + sh2 + ',' + sh3 + ',' + sh11 + ',' + sh22 + ',' + sh33;
        });



        if(c>0) {
            option1 = document.getElementById(elem.id+ 'Blur');
            option2 = document.getElementById(elem.id + 'Stretch');


            option1.addEventListener("input", function () {

                if (elem.id.endsWith('Border')) {
                    side.style.border = elem.value + 'px solid ' + colorVar.value;
                    colorVar.style.border = '45px solid ' + colorVar.value;
                    colorVarWrapper.style.boxShadow = '0px 0px 5px 3px ' + colorVar.value;
                } else if(elem.id.endsWith("Shadow1")) {
                    sh1 = '0px 0px ' + option1.value + 'px ' + option2.value + 'px ' + colorVar.value + ',' +
                        '0px 0px ' + elem.value / 2 + 'px ' + elem.value / 2 + 'px ' + colorVar.value + ' inset';
                    side.style.boxShadow = sh1 + ',' + sh2 + ',' + sh3;

                } else if (elem.id.endsWith("Shadow2")) {
                    sh2 = '0px 0px ' + option1.value + 'px ' + option2.value + 'px ' + colorVar.value + ',' +
                        '0px 0px ' + elem.value + 'px ' + elem.value / 3 + 'px ' + colorVar.value + ' inset';
                    side.style.boxShadow = sh1 + ',' + sh2 + ',' + sh3;

                } else if (elem.id.endsWith("Shadow3")) {
                    sh3 = '0px 0px ' + option1.value + 'px ' + option2.value + 'px ' + colorVar.value + ',' +
                        '0px 0px ' + elem.value + 'px ' + elem.value / 3 + 'px ' + colorVar.value + ' inset';
                } else if (elem.id.contains("IconShadow")) {
                    elem.style.textShadow = option1.value + 'px ' + option2.value + 'px ' + elem.value + 'px ' + colorVar.value +','+
                        +txtSh + ',' + iconShad;
                }
                side.style.boxShadow = sh1 + ',' + sh11 + ',' + sh2 + ',' + sh22 + ',' + sh3 + ',' + sh33;
            });


            option2.addEventListener("input", function () {


                if (elemId.endsWith('Border')) {
                    side.style.border = elem.value + 'px solid ' + colorVar.value;
                    colorVar.style.border = '45px solid ' + colorVar.value;
                    colorVarWrapper.style.boxShadow = '0px 0px 5px 3px ' + colorVar.value;
                } else if (elemId.endsWith("Shadow1")) {
                    sh1 = '0px 0px ' + option1.value + 'px ' + option2.value + 'px ' + colorVar.value + ',' +
                        '0px 0px ' + elem.value / 2 + 'px ' + elem.value / 3 + 'px' + colorVar.value + ' inset';
                } else if (elemId.endsWith("Shadow2")) {
                    sh2 = '0px 0px ' + option1.value + 'px ' + option2.value + 'px ' + colorVar.value + ',' +
                        '0px 0px ' + elem.value + 'px ' + elem.value / 3 + 'px' + colorVar.value + ' inset';
                } else if (elemId.endsWith("Shadow3")) {
                    sh3 = '0px 0px ' + option1.value + 'px ' + option2.value + 'px ' + colorVar.value + ',' +
                        '0px 0px ' + elem.value + 'px ' + elem.value / 3 + 'px' + colorVar.value + ' inset';
                } else if (elemId.contains("IconShadow")) {
                    elem.style.textShadow = option1.value + 'px ' + option2.value + 'px ' + elem.value + 'px ' + colorVar.value;
                }
                side.style.boxShadow = sh1 + ',' + sh11 + ',' + sh2 + ',' + sh22 + ',' + sh3 + ',' + sh33;
            });

        }


    }
}

inp.forEach(element =>
    element.addEventListener("wheel", function (e) {

        var opt1;
        var opt2;
        var optBlock = document.getElementById(element.id+'Options');
        opt1 = document.getElementById(e.target.id + 'Blur');
        opt2 = document.getElementById(e.target.id + 'Stretch');
      if(e.deltaY < 0){
          element.style.top = '-5%';
          element.style.height = '0%';
          setTimeout(function () {element.style.width = '0%';},450);
          setTimeout(function () {element.style.display = 'none';},1500);
          opt1.style.left = '-1%';
          opt2.style.left = '11%';


          setTimeout(function () {


              opt1.style.transition = '0.5s linear';
              opt2.style.transition = '0.5s linear';

              opt1.style.height = '9px';
              opt2.style.height = '9px';

              opt1.style.top = '5%';
              opt2.style.top = '30%';
          }, 1550);

      }

        optBlock.addEventListener("wheel",function (e) {
            if(e.deltaY > 0){
                opt1.style.transition = '1.3s ease-in-out';
                opt2.style.transition = '1.3s ease-in-out';
                setTimeout(function(){ element.style.display = 'inherit';},500);
                setTimeout(function(){ element.style.width = '215px';},800);

                setTimeout(function(){element.style.top = '-5%'; element.style.height = '11px';},1500);
                opt1.style.height = '7px';
                opt2.style.height = '7px';
                opt1.style.top = '20px';
                opt2.style.top = '-15px';

                setTimeout(function () {
                    opt1.style.left = '-150%';
                    opt2.style.left = '150%';
                }, 700);

            }


        })
    })
);



//
//
//
// rightBorderColor.addEventListener("contextmenu",function () {
//     strr =  rightBorder.value + 'px solid ' + rightBorderColor.value;
//
//     rightBorderColor.style.border = '45px solid '+ rightBorderColor.value;
//     rightBorderColorWraper.style.boxShadow = '0px 0px 5px 3px '+ rightBorderColor.value;
//     right.style.border = strr;
//
//     rightBorderColorWraper.animate([
//             {boxShadow: '0px 0px 0px 0px '+rightBorderColor.value},{boxShadow: '0px 0px 3px 2px '+rightBorderColor.value},{boxShadow: '0px 0px 0px 0px '+rightBorderColor.value},
//             {boxShadow: '0px 0px 3px 2px '+rightBorderColor.value},{boxShadow: '0px 0px 0px 0px '+rightBorderColor.value},{boxShadow: '0px 0px 3px 2px '+rightBorderColor.value},
//             {boxShadow: '0px 0px 0px 0px '+rightBorderColor.value},{boxShadow: '0px 0px 3px 2px '+rightBorderColor.value},{boxShadow: '0px 0px 0px 0px '+rightBorderColor.value},
//             {boxShadow: '0px 0px 3px 2px '+rightBorderColor.value},{boxShadow: '0px 0px 0px 0px '+rightBorderColor.value},{boxShadow: '0px 0px 3px 2px '+rightBorderColor.value}
//         ],
//         {
//             duration: (1300),
//             iterations: 1,
//             easing: 'ease-in-out'
//
//         })
//
// });
//
// rightBorder.addEventListener("input", function () {
//     strr =  rightBorder.value + 'px solid ' + rightBorderColor.value;
//     right.style.border = strr;
//
// }, false);
// ///>>!1<<
//
//
//
// ///>>2<<
//
// val = 0;
// rightShadow1Color.addEventListener("contextmenu",function () {
//     val = rightShadow1Color.value;
//
//     rightShadow1Color.style.border = '45px solid '+rightShadow1Color.value;
//     rightShadow1ColorWraper.style.boxShadow = '0px 0px 5px 3px '+ rightShadow1Color.value;
//
//
//
//     rightShadow1ColorWraper.animate([
//             {boxShadow: '0px 0px 0px 0px '+val},{boxShadow: '0px 0px 5px 2px '+val},{boxShadow: '0px 0px 0px 0px '+val},
//             {boxShadow: '0px 0px 5px 2px '+val},{boxShadow: '0px 0px 0px 0px '+val},{boxShadow: '0px 0px 5px 2px '+val},
//             {boxShadow: '0px 0px 0px 0px '+val},{boxShadow: '0px 0px 5px 2px '+val},{boxShadow: '0px 0px 0px 0px '+val},
//             {boxShadow: '0px 0px 5px 2px '+val},{boxShadow: '0px 0px 0px 0px '+val},{boxShadow: '0px 0px 5px 2px '+val}
//         ],
//         {
//             duration: (1300),
//             iterations: 1,
//             easing: 'linear'
//
//         });
// });
//
// // leftShadow1Color.addEventListener("contextmenu", function(){
// //         leftShadow1Color.style.border = '45px solid ' + leftShadow1Color.value;
// //         leftShadow1ColorWraper.style.boxShadow = '0px 0px '+ leftShadow1.value +'px '+ leftShadow1.value +'px '+leftShadow1Color.value;
// // })
//
// rightShadow1.addEventListener("input", function(){
//     strr = '0px 0px '+ rightShadow1.value + 'px ' + rightShadow1.value + 'px '+ rightShadow1Color.value +','+
//         '0px 0px '+ rightShadow2.value + 'px ' +rightShadow2.value + 'px '+ rightShadow2Color.value + ', ' +
//         '0px 0px '+rightShadow3.value + 'px ' + rightShadow3.value + 'px '+ rightShadow3Color.value + ' inset';
//     right.style.boxShadow =strr;
// });
//
// var isScrolled = 0;
// var lastScrolled = 0;
// var x =0;
//
// var inputs = document.querySelectorAll('.inputs');
//
// window.addEventListener("wheel", function(e) {
//
//     if (e.deltaY === 112 && isScrolled === 1) {
//
//
//         x = document.getElementById(lastScrolled);
//         if(x.className === 'inputs'){
//             borderOpt2.style.left = '0%';
//
//             borderOpt2.style.marginTop = '3%';
//             borderOpt2.style.left = '6%';
//             borderOpt2.style.top = '-22%';
//
//
//             setTimeout(function(){   borderOpt.style.overflow = 'hidden';            borderOpt1.style.left = '-152%'; borderOpt2.style.left = '152%';
//             }, 150);
//
//             setTimeout(function(){x.style.display = 'inline'; },450);
//
//             setTimeout(function(){               x.style.height = '10px';
//                 x.style.transform = 'rotateX(0deg)';
//             }, 500);
//
//             isScrolled = 0;
//             lastScrolled = 0;
//         }else return null;
//     } else if (e.deltaY === -112) {
//         if(e.target.className === 'inputs'){
//             

//             c = document.getElementById(e.target.id+'optional');
//             c.style.overflow = 'none';
//             x = document.getElementById(e.target.id);
//             setTimeout(function(){ borderOpt1.style.left='0%'; borderOpt2.style.left = '10%';
//             }, 600);
//
//             setTimeout(function(){
//                 d = c +'optional';
//                 dd = document.getElementById(d);
//
//             },);
//
//             setTimeout(function(){
//                 borderOpt2.style.left = '10%';            borderOpt1.style.left = '-5%';
//
//             }, 700);
//
//             setTimeout(function(){
//                 borderOpt2.style.marginTop = '7%';
//                 borderOpt1.style.left = '4%';
//                 borderOpt2.style.left = '0%';
//
//             }, 1500);
//             setTimeout(function(){ x.style.height = '0%'; x.style.display = 'none'; }, 700);
//
//
//
//             x.style.transform = 'rotateX(77deg)';
//             isScrolled = 1;
//             lastScrolled = x.id;
//         }}
//
// });
//
//
// ///>>!2<<
//
// ///>>3<<
//
//
// rightShadow2.addEventListener("input", function(){
//     strr = '0px 0px '+ rightShadow1.value + 'px ' + rightShadow1.value + 'px '+ rightShadow1Color.value +','+
//         '0px 0px '+ rightShadow2.value + 'px ' + rightShadow2.value + 'px '+ rightShadow2Color.value + ', ' +
//         '0px 0px '+ rightShadow3.value + 'px ' + rightShadow3.value + 'px '+ rightShadow3Color.value + ' inset';
//     right.style.boxShadow =strr;
//
//
//
// },false);
//
//
// rightShadow2Color.addEventListener("contextmenu",function () {
//     rightShadow2ColorWraper.style.transition = '1s linear';
//
//     rightShadow2Color.style.border = '45px solid '+ rightShadow2Color.value;
//     rightShadow2ColorWraper.style.boxShadow = '0px 0px 5px 3px '+ rightShadow2Color.value;
//
//     val = rightShadow2Color.value;
//
//     rightShadow2ColorWraper.animate([
//             {boxShadow: '0px 0px 0px 0px '+val},{boxShadow: '0px 0px 3px 2px '+val},{boxShadow: '0px 0px 0px 0px '+val},
//             {boxShadow: '0px 0px 3px 2px '+val},{boxShadow: '0px 0px 0px 0px '+val},{boxShadow: '0px 0px 3px 2px '+val},
//             {boxShadow: '0px 0px 0px 0px '+val},{boxShadow: '0px 0px 3px 2px '+val},{boxShadow: '0px 0px 0px 0px '+val},
//             {boxShadow: '0px 0px 3px 2px '+val},{boxShadow: '0px 0px 0px 0px '+val},{boxShadow: '0px 0px 3px 2px '+val}
//         ],
//         {
//             duration: (1300),
//             iterations: 1,
//             easing: 'linear'
//
//         });
// });
//
//
//
//
// ///>>!3<<
//
//
// ///>>4<<
//
// rightShadow3Color.addEventListener("contextmenu",function () {
//     rightShadow3ColorWraper.style.transition = '1s linear';
//
//     rightShadow3Color.style.border = '45px solid '+ rightShadow3Color.value;
//     rightShadow3ColorWraper.style.boxShadow = '0px 0px 5px 3px '+ rightShadow3Color.value;
//
//     val = rightShadow3Color.value;
//
//     rightShadow3ColorWraper.animate([
//             {boxShadow: '0px 0px 0px 0px '+val},{boxShadow: '0px 0px 3px 2px '+val},{boxShadow: '0px 0px 0px 0px '+val},
//             {boxShadow: '0px 0px 3px 2px '+val},{boxShadow: '0px 0px 0px 0px '+val},{boxShadow: '0px 0px 3px 2px '+val},
//             {boxShadow: '0px 0px 0px 0px '+val},{boxShadow: '0px 0px 3px 2px '+val},{boxShadow: '0px 0px 0px 0px '+val},
//             {boxShadow: '0px 0px 3px 2px '+val},{boxShadow: '0px 0px 0px 0px '+val},{boxShadow: '0px 0px 3px 2px '+val}
//         ],
//         {
//             duration: (1300),
//             iterations: 1,
//             easing: 'linear'
//
//         })
// });
//
//
// rightShadow3.addEventListener("input", function(){
//     strr = '0px 0px '+rightShadow1.value + 'px ' + rightShadow1.value + 'px '+ rightShadow1Color.value +','+
//         '0px 0px '+ rightShadow2.value + 'px ' + rightShadow2.value + 'px '+ rightShadow2Color.value + ', ' +
//         '0px 0px '+ rightShadow3.value + 'px ' + rightShadow3.value + 'px '+ rightShadow3Color.value + ' inset';
//     right.style.boxShadow =strr;
//
//
//
// });
// ///>>!4<<



var innText = '';
var elements =  document.querySelectorAll('.list');
var isPlaying = 0;
var previousTrack = 0;
elements.forEach(function(currentElem){
    currentElem.addEventListener("click", function(){
        if(previousTrack === 0){
            previousTrack = currentElem;
            currentElem.style.color = 'yellow';
            currentElem.style.textShadow = '0px 0px 2px yellow, 0px 0px 2px white, 1px -1px 1px black';
        }else{
            previousTrack.style.color = '#00ff68';
            previousTrack.style.textShadow = '0px -1px 3px rgb(0 0 0), -1px 0px 1px #01ffc6, -2px 0px 2px #000000, -3px 1px 1px black';
            previousTrack = currentElem;
            currentElem.style.color = 'yellow';
            currentElem.style.textShadow = '0px 0px 2px yellow, 0px 0px 2px white, 1px -1px 1px black';
        }
        innText = currentElem.innerHTML;
        callToServer();
    });
});



var cubePane = document.getElementById('cubePane');
var playerPane = document.getElementById('playerPane');
var chatPane = document.getElementById('chatPane');
var userPane = document.getElementById('userPagePane');

var x = null;
var y;
var currentPane = 0;
var currentButton;



var gear = document.getElementById('gear-button');
var settingsWindow = document.getElementById('settingsWindow');
var equalizerSetBut = document.getElementById('equalizerSettingButton');
var chatWindowSetBut = document.getElementById('chatWindowSettingButton');
var perslWindSettBut = document.getElementById('personalWindowSettingButton');
var setWindSetBut = document.getElementById('settingsWindowSettingButton');

var opened = 0;
gear.addEventListener("click", function(){
    if(opened == 0){
        setTimeout(function(){
            equalizerSetBut.style.left = '2.5%';
        }, 1500);
        
        setTimeout(function (){
            chatWindowSetBut.style.left = '2.5%';
        },2000);

        setTimeout(function (){
            userButton.style.left = '2.5%';
        },2500);
        setTimeout(function (){
            setWindSetBut.style.left = '2.5%';
        },3000);
        opened = 1;
        gear.style.boxShadow = '0px 0px 3px 2px rgb(0, 192, 215)';
        gear.style.transform = 'rotate(720deg)';
        settingsWindow.style.left = '95%';

    }else if(opened == 1){
        opened = 0;
        gear.style.boxShadow = '0px 0px 0px 0px';
        gear.style.transform = 'rotate(0deg)';
        settingsWindow.style.left = '100%';
    }

});

var volume = document.getElementById('volume');
var ul = document.getElementById('ul');

topp = document.getElementById('topp');
wraper = document.getElementById('wraper');
cube = document.getElementById('cube');
right = document.getElementById('right');
bottom = document.getElementById('bottom');
front = document.getElementById('front');
back = document.getElementById('back');
left = document.getElementById('left');
s2 = document.getElementById('s2');
s3 = document.getElementById('s3');
s4 = document.getElementById('s4');

let status = document.getElementById('status');
let off = document.getElementById('off');

messageBlock = document.getElementById('messageBlock');
message = document.getElementById('message');
envelope = document.getElementById('sendButton');
enterBtn = document.getElementById('enterBtn');

        message.addEventListener('keyup', function(event){
            if(message.value === '' || event.which === 13){
                envelope.style.right = '-13%';
                  envelope.style.boxShadow = '0px 0px 0px 0px #00000000';
        
                sendMessage();

        }
    });

        message.oninput = function(event){
            envelope.style.right = '25px';
            envelope.style.boxShadow = '0px 0px 3px 2px #0bffdf';
        };

        message.onclick = function(event){
            envelope.onclick = function(){
                sendMessage();
                envelope.style.right = '-13%';
                envelope.style.boxShadow = '0px 0px 0px 0px #00000000';

            };

            if(event.which === 13){
                 sendMessage();
            envelope.style.right = '-13%';
            envelope.style.boxShadow = '0px 0px 0px 0px #00000000';  
            }
        };



var chat = document.getElementById('chat-wraper');
var users = document.getElementById('users-online');

        status.onclick = function(){
            if(off.id === 'on'){
                off.style.animation = 'none';
                off.animate([{color: 'white'},{color:'black'}], {duration:300, easing: 'linear', iterations: 5});
                setTimeout(function(){off.style.color = 'red';off.id = 'off';},1500);
                users.style.width = '0%';
                users.style.height = '0%';

                messageBlock.style.left = '110%';
                closeWebSocket();
            }else if(off.id === 'off'){

                users.style.width = '100%';
                users.style.height = '100%';
                messageBlock.style.left = '70%';
                connectLiveChat();
                off.id = 'on';
                setTimeout(function(){
                    status.style.backgroundPositionY = '28px';
                    off.style.color = 'rgb(0, 255, 98)';status.style.background = 'linear-gradient(to bottom, rgb(0, 255, 98), #00000000)'; status.style.boxShadow = 'rgb(0 255 127) 0px 0px 1px 2px';
                    status.style.textShadow = '1px 1px 1px black,-1px -1px 1px black,0px 0px 1px black,0px 0px 1px black,0px 0px 3px green,0px 0px 3px green';
                }, 3000);

                off.style.animation = 'turnOn 3s linear';
                status.style.animation = '3s reclick linear ';
            }



            // else if(off.id === 'on'){
            //      off.id = 'off';
            //      off.style.animation = 'turnOff 3s linear';
            //
            //     setTimeout(function(){status.style.backgroundPositionY = '111px';off.style.color = 'red';status.style.background = 'linear-gradient(to bottom, #f60228, #00000000)'; status.style.boxShadow = 'red 0px 0px 1px 2px';
            //
            //      status.style.textShadow = '1px 1px 1px black,-1px -1px 1px black,0px 0px 1px black,0px 0px 1px black,0px 0px 3px green,0px 0px 3px red';
            //     }, 3000);
            //
            //     status.style.animation = '3s click linear';
            //     closeWebSocket();
            //
            // };
            //
        };




/////////////////////////////////////////////////
    // var in1 = document.getElementById('in1');
    // var in2 = document.getElementById('in2');
    // var in3 = document.getElementById('in3');
    //
    // in1.addEventListener("input", function () {
    //     left.style.boxShadow = '0px 0px 5px 1px ' +  in1.value;
    // });
    //
    // in2.addEventListener("input", function () {
    //     left.style.boxShadow = '0px 0px '+ in2.value + 'px 0px '+ in1.value;
    // });
    //








/////////////////////////////////////////////////////////////
        status.addEventListener("mousedown",function(){
            status.style.width = '24px';
            status.style.height = '25px';
            status.style.fontSize = '20px';
        });


  status.addEventListener("mouseup",function(){
            status.style.width = '27px';
            status.style.height = '28px';
            status.style.fontSize = '25px';
        });



// topp.style.transform = 'rotateX(-90deg) translateZ(32px)';
// topp.style.boxShadow = 'rgb(0 254 255) 0px 0px 2px 0px';
// topp.style.color = 'white';
// front.style.transform = 'translateZ(32px)';
// front.style.boxShadow = 'rgb(0 254 255) 0px 0px 2px 0px';
// back.style.transform = 'translateZ(-32px)';
// back.style.boxShadow = 'rgb(0 254 255) 0px 0px 2px 0px';
// right.style.boxShadow = 'rgb(0 254 255) 0px 0px 2px 0px';
// right.style.transform = 'rotateY(-90deg) translateZ(32px)';
// left.style.boxShadow = 'rgb(0 254 255) 0px 0px 20px 0px';
// left.style.transform = 'rotateY(90deg) translateZ(32px)';
// bottom.style.transform = 'rotateX(90deg) translateZ(32px)';
// bottom.style.boxShadow = 'rgb(0 254 255) 0px 0px 2px 0px';

var  screen2 =  document.getElementById('screen2block');
var timeBox = document.getElementById('timeBox');
let hovered = 0; circleWraper = document.getElementById('circle-wraper');
wraper.addEventListener("mouseover", function(){
    if(hovered == 1){
        
    }else{
        cube.style.animation = 'none';
        cube.style.transform = 'rotateZ(286deg) rotateY(283deg) rotateX(305deg)';
        line.style.top = '6%';
        line.style.left = '52%';
        setTimeout(function(){cube.style.animation = 'rotateCube 50s linear infinite';}, 150);
        setTimeout(function(){ line.style.height = '86%'; }, 100);
    }


    s2 = document.getElementById('s2');
    s5 = document.getElementById('s5');
    s6 = document.getElementById('s6');
    s7 = document.getElementById('s7');
    progressBar = document.getElementById('progressBar');
    screen1block = document.getElementById('screen1block');
    screen2block = document.getElementById('screen2block');

    circle = document.getElementById('circle');
    screenwraper = document.getElementById('screenwraper');
    centertime = document.getElementById('centertimebar');
   


    screen1 = document.getElementById('screen');
    screen2 = document.getElementById('screen2');
    screen1.style.transition = '1.3s ease-in-out';
// screen1.style.left = '-40px';
// screen1.style.transform = 'rotate3d(96, -30, -21, 369deg) translateY(-8px) translate(27px, -9px)';
// screen1.style.top = '25px';
    circleWraper.style.transition = '1.5s ease';
    centertime.style.left = '58%';
    timeBox.style.left = '-1%';

    // screen2.style.transform = '';
    // screen2.style.boxShadow = 'rgb(49 239 109) -3px 1px 0px -2px, rgb(2 239 160) 0px 2px 6px 0px inset';

    circle.style.left = '18px';
    circle.style.transform = '';
    circle.style.boxShadow = 'rgb(13 255 246) 0px 0px 7px 4px, rgb(0 0 0) 0px 0px 10px 7px inset, rgb(41 14 27 / 19%) 0px 0px 10px 14px';


// screen.style.transition = '1s linear';
// 	            screen.style.transform = 'translate3d(-110px, -584px, 97px) rotate3d(578, 299, 266, 166deg)';
// 	            screen.style.width = '357px';
// 	            screen.style.borderRadius = '16px';
// 	            screen.style.height = '396px';
// 	            screen.style.boxShadow = '-4px 5px 4px 5px white, inset black 2px 3px 15px 3px, 5px -4px 25px 11px black inset';
// 	            screen.style.background = '#00bcd43d';
// 	            screen.style.borderBottomLeftRadius = '163px';
// 	            screen.style.borderBottomRightRadius = '21px';
    timeBox.style.width = '191px';
    if(hovered == 0){

        setTimeout( playlistShow, 1700);
        hovered = 1;
    }else if(hovered == 1){

    }
});


var current = 0;
var rotate = 0;
var rotate2 = 0;
let list =  document.getElementById('playlist');
let list2 =  document.getElementById('playlist1');
wraper.addEventListener("wheel", function(event){


    if(event.deltaY == 112){
        list.style.transform = 'rotate('+ rotate+'deg)';
        list2.style.transform = 'rotate('+ rotate2+'deg)';
        rotate -= 3;
        rotate2 +=3;
    }else if(event.deltaY == -112){
        list.style.transform = 'rotate('+ rotate+'deg)';
        list2.style.transform = 'rotate('+ rotate2+'deg)';

        rotate += 3;
        rotate2-=3;
    }

});



var playlist2 = document.getElementById('playlist1');
function playlistShow(){

    line.style.height = '405px';
    screen1block.style.transform = 'rotate(0deg)';
    screen2block.style.transform = 'rotate(0deg)';
    setTimeout(function(){screen2.style.transform = 'translate(0px, 0px) rotate(0deg)';}, 500);
    circleblock.style.left = '85px';
    setTimeout(function(){playlist.style.transform = 'rotate(0deg)'; playlist2.style.transform = 'rotate(-75deg) ';1500});



};





let playlist = document.getElementById('playlist1');
let line = document.getElementById('line');
function playerHide(){
    screen2.style.transform = 'rotate(-180deg)';
    setTimeout(function(){
        playlist.style.transform = 'rotate(-150deg)';
    }, 300);

    setTimeout(function(){
        screen2block.style.transform = 'translate(199px, -13px) rotate(-90deg)';},500);

    setTimeout(function(){
        screen1block.style.transform = 'translate(199px, -13px) rotate(90deg)';}, 500);

    setTimeout(function(){
        line.style.height = '0%';},1600);

    setTimeout(function(){circleblock.style.left = '280px';},900);

};




cube.addEventListener("mouseover", function(){

    cube.style.animation = 'none';
    cube.style.transform = 'rotateZ(175deg) rotateY(227deg) rotateX(-45deg)';

    topp.style.boxShadow = '#169bff 0px 0px 10px 2px inset, #169bff 0px 0px 10px 0px';
    topp.style.border = '3px solid #169bff';
    topp.style.color ='#00dafd';topp.style.background = 'linear-gradient(to right, #000000b8, black)';
    topp.style.transform = 'rotateX(90deg) translateZ(45px) ';

    front.style.boxShadow = '#169bff 0px 0px 10px 2px inset,#169bff 0px 0px 10px 0px';
    front.style.border = '3px solid #169bff';
    front.style.color = '#00dafd';front.style.background = 'linear-gradient(to right, #000000b8, black)';
    front.style.transform = 'translateZ(-45px)  rotate3d(0, 0, -1, 180deg)';

    back.style.boxShadow = '#169bff 0px 0px 10px 2px inset, #169bff 0px 0px 10px 0px';
    back.style.border = '3px solid #169bff';
    back.style.color = '#00dafd';back.style.background = 'linear-gradient(to right, #000000b8, black)';
    back.style.transform = 'translateZ(45px)';


    right.style.boxShadow = '#169bff 0px 0px 10px 2px inset, #169bff 0px 0px 10px 0px';
    right.style.border = '3px solid #169bff';
    right.style.color = '#00dafd';right.style.background = 'linear-gradient(to right, #000000b8, black)';
    right.style.transform	= 'rotateY(-90deg) translateZ(45px)';

    left.style.transform = 'rotateY(90deg) translateZ(45px)';
    left.style.boxShadow = '#169bff 0px 0px 10px 2px inset, #169bff 0px 0px 10px 0px';
    left.style.border = '3px solid #169bff';
    left.style.color = '#00dafd';left.style.background = 'linear-gradient(to right, #000000b8, black)';

    bottom.style.boxShadow	= '#169bff 0px 0px 10px 2px inset, #169bff 0px 0px 10px 0px';

    bottom.style.border = '3px solid #169bff';
    bottom.style.color = '#00dafd';bottom.style.background = 'linear-gradient(to right, #000000b8, black)';
    bottom.style.transform = ' rotateX(90deg) translateZ(-45px) rotate3d(0, 0, 2, -90deg)';

    // s6.style.transform = 'translate3d(72px, -94px, -99px) rotate3d(108, 343, 116, -79deg)';
    // s5.style.transform = 'translate3d(73px, 123px, 91px) rotate3d(35, -26, 28, -187deg)';
    // s5.style.transform = 'translate3d(73px, 123px, 91px) rotate3d(35, -26, 28, -187deg)';


});


cube.addEventListener("mouseleave", function(){

    front.style.boxShadow = 'rgb(0 0 0) 0px 0px 5px 3px, rgb(8 255 209) 0px 0px 5px 2px inset';
    front.style.border = '4px solid rgb(0 0 0 / 77%)';
    front.style.transform = 'translateZ(34px) rotate3d(0,0,0,0deg)';

    back.style.transform = 'translateZ(-34px)';

    back.style.boxShadow = 'rgb(0 0 0) 0px 0px 5px 3px, rgb(8 255 209) 0px 0px 5px 3px inset';
    back.style.border = '4px solid rgb(0 0 0 / 77%)';


    right.style.transform = 'translateX(34px) rotateY(90deg)'

    right.style.boxShadow = 'rgb(0 0 0) 0px 0px 5px 3px, rgb(8 255 209) 0px 0px 5px 3px inset';
    // right.style.transform = 'rotateY(190deg) translateZ(32px)';
    right.style.border = '4px solid rgb(0 0 0 / 77%)';


    left.style.transform = 'rotateY(-90deg) translateZ(35px)';
    left.style.boxShadow = 'rgb(0 0 0) 0px 0px 5px 3px, rgb(8 255 209) 0px 0px 5px 2px inset';
    topp.style.transform = 'rotateX(90deg) translateZ(-35px)';
    topp.style.boxShadow ='rgb(0 0 0) 0px 0px 5px 3px, rgb(8 255 209) 0px 0px 3px 2px inset';
    topp.style.border = '3px solid rgb(0 0 0 / 77%)';

    left.style.border = '4px solid rgb(0 0 0 / 77%)';

    bottom.style.transform	= 'rotateX(-90deg) translateZ(-35px) rotate3d(0, 0, 2, 0deg)';
    bottom.style.boxShadow = 'rgb(0 0 0) 0px 0px 5px 3px, rgb(8 255 209) 0px 0px 5px 2px inset';
    bottom.style.border = '4px solid rgb(0 0 0 / 77%)';

});




    cube.addEventListener("wheel", function(event){
        front.style.animation = 'none';
        bottom.style.animation = 'none';
        let circleblock = document.getElementById('circleblock');


        if(event.deltaY === 112){
alert('1');
            cube.style.animation = 'rotateBackward	0.6s linear';

            front.style.animation = 'indicateOnScroll 0.6s ease-in-out';



        }else if(event.deltaY=== -112){
alert('2');
            cube.style.animation = 'rotateForward 0.6s ease-out';

            bottom.style.animation = 'indicateOnScroll 0.6s  ease-in-out';
        }

    });
    // cube.style.animation = 'rotateCube 210s linear';





// var body = document.querySelector('.body');
// cube.addEventListener("mouseover", function(){

// 	document.body.style.backgroundImage = 'url(zzz.jpg)';

// });






wraper.addEventListener("mouseleave", function(){
    hovered = 0;

    playerHide();
    setTimeout(function(){
        line.style.top	= '50%';
    },1500);


    block1 = document.getElementById('screen1block');
    block2 = document.getElementById('screen2block');
    screen1 = document.getElementById('screen');
    screen2 = document.getElementById('screen2');


    screen1.style.transform = 'translate(406px, -104px) rotate(90deg)';

    // screen2.style.top = '4px';
    // screen2.style.left = '3px';

    circleWraper.style.borderRadius = '10px';
    screen2.style.transform = 'translate(0px, -8px) rotate(-180deg)';



    block2.style.boxShadow = 'rgb(7 7 7 / 99%) 0px 0px 9px 8px inset';
    circle.style.left = '280px';
    circle.style.boxShadow = 'rgb(0 0 0) 0px 0px 13px 9px, rgb(209 209 209) 0px 0px 7px 0px inset, 0px 0px 10px 14px #f9f9f9';






    centertimebar.style.left = '150%';
    timeBox.style.left = '-214%';







});

// var cubeId = 'BeginState';
// var offX = 26;
//     	var offY = 47;
//     wraper.addEventListener("mousedown", function(event){



//     	cube.style.animation = 'none';
//     	cube.style.transition = '0.7s ease-in-out';
//     	cube.style.transform = 'rotateZ(175deg) rotateY(227deg) rotateX(-45deg)' ;
//     }
let i = 35;





// document.getElementById('wraper').addEventListener("wheel", function(event){
//cube.style.transform = 'rotateY(' + event.offsetX+ 'deg) rotateX(' + event.offsetY +'deg)';
// alert(event.clientX);
// alert(event.clientY);


// if(event.clientX >= 660 && event.clientX <=741 && event.clientY >= 403 && event.clientY <= 490){
// 	cube.style.transform = 'rotateZ(205deg) rotateY(266deg) rotateX(-74deg)';

// if(event.clientX>= 514 && event.clientX<= 707 && event.clientY >= 444 && event.clientY<= 656){
// 		cube.style.transform = 'rotateZ(104deg) rotateZ(-186deg) rotateX(84deg)';
// 		s6.style.transform = 'translate3d(-83px, 90px, 87px) rotate3d(159, 3, 136, 124deg)';
// 		s5.style.transform = 'translate3d(97px, 134px, 99px) rotate3d(55, 67, 99, -166deg)';
// 		s7.style.transform = 'translate3d(32px, 204px, -105px) rotate3d(259, 162, 79, -218deg)';
// 		bottom.style.boxShadow = ' 0px 0px 1px 1px inset white, yellow 0px 0px 1px 1px';
// 		bottom.style.border = '2px solid rgb(8 227 251)';
// 		bottom.style.color = 'rgb(2 246 225)';
// 	}else if(event.clientX>=708 && event.clientX <=912 && event.clientY>=460 && event.clientY<=655){

// 		cube.style.transform = 'rotateZ(157deg) rotateY(180deg) rotateX(78deg)';
// 		s6.style.transform = 'translate3d(-108px, -42px, 41px) rotate3d(108, 343, 192, 256deg)';
// 		s5.style.transform = 'translate3d(172px, 99px, 127px) rotate3d(9, 16, 28, -187deg)';
// 		s7.style.transform = 'translate3d(103px, 125px, -131px) rotate3d(259, 162, 79, -128deg)';
// 	}else if(event.clientX>=657 && event.clientX<=741 && event.clientY<=490){    //play
// 		cube.style.transform = 'rotateZ(205deg) rotateY(266deg) rotateX(-74deg)';
// 		s7.style.transform = 'translate3d(103px, 125px, -104px) rotate3d(259, 162, 4, -115deg)';
// 		s5.style.transform = 'translate3d(73px, 123px, 97px) rotate3d(37, 71, 28, -97deg)';
// 		s6.style.transform = 'translate3d(72px, -94px, -93px) rotate3d(108, 254, 95, 80deg)';

// 	}else if(event.clientX>= 517 && event.clientX<= 730 && event.clientY >= 261 && event.clientY <= 382){
// 		cube.style.transform = 'rotateZ(343deg) rotateY(86deg) rotateX(-28deg)';
// 	}
// bottom.style.animation = 'none';
// 		front.style.animation = 'none';
// 		cube.style.animation = 'rotateCube 120s linear';
// 		circleblock = document.getElementById('circleblock');


// if(event.deltaY == 112){
// 	if(audio3.volume <= 0.1){
// 		current += 10;
// 		audio3.volume += 0.010;
// 		circleblock.style.boxShadow = 'inset #9e9e9e 34px' +  current + 'px 2px -31px';
// 	}else if(event.deltaY == -112){
// 	i = i+5;
// 					current -= 10;
// 				circleblock.style.boxShadow = 'inset #9e9e9e 34px' +  current + 'px 2px -31px';
// 			audio3.volume  -= 0.010;
// 		}}



// 		    });

// });



function contMenu(){


    //     	topp = document.getElementById('topp');

    //     	 s2 = document.getElementById('s2');
    cube.style.animation = 'none 0s';
    cube.style.transition = '2.5s linear';

    // cube.style.transform = 'rotate3d(152, 235, 67, 279deg)';


    // volume.style.transform = 'rotate3d(0, 0, 1, 90deg) translate3d(51px, 48px, 99px) ';




    cube.style.border = '1px solid #14e696';

    s2.style.transform = 'translate3d(0px, 2px, -30px)';
    s2.style.width = '150x';


    // volume.style.left = '-20%';
    // volume.style.width = '230px';
    // 	volume.style.left = '39%';
    // 	volume.style.opacity = '90%';
    // 	volume.style.boxShadow = '0px 0px 0px 5px rgba(9, 9, 9, 0.91) inset, 0px 0px 20px 3px black';
    // 	volume.style.border ='4px solid #f60228';




    s2.style.background = 'linear-gradient(black , #f60228)';
    s2.style.display = 'inline';

    s3.style.background = '#292929';
    s3.style.height = '295px';
    s3.style.width = '210px';
    s3.style.transform = 'translate3d(-2px, -3px, -30px)';


    s3.style.opacity = '70%';

    s4.style.width = '215px';
    s4.style.transform = 'rotate3d(1,0,0,90deg) translateZ(-270px)';


    left.style.transform = 'rotateY(-120deg) translateZ(30px)';

    right.style.transform = 'rotateY(90deg) translateZ(-30px)';
    right.style.height = '295px';

    bottom.style.width = '290px';
    bottom.style.transform = 'rotateX(180deg) translateZ(-68px) rotate3d(0px, 0px, 1px, 90deg)';

    bottom.style.boxShadow = 'black 0px 0px 5px 5px inset, #f30f0f 0px 0px 4px 1px,0px 0px 5px 1px inset #14e696';
    front.style.boxShadow = 'black 0px 0px 5px 5px inset,#f30f0f 0px 0px 4px 1px, 0px 0px 5px 1px inset #14e696';



    right.style.boxShadow = 'black 0px 0px 5px 5px inset, #f30f0f 0px 0px 4px 10px	, 0px 0px 5px 1px inset #14e696';
    left.style.boxShadow = 'black 0px 0px 5px 5px inset, #f30f0f 0px 0px 4px 1px, 0px 0px 5px 1px inset #14e696';

    back.style.boxShadow = 'yellow 0px 0px 0px 2px inset, rgb(8,255,255) 11px -5px 14px 8px inset';
    back.style.width = '210px';
    back.style.height = '295px';
        back.style.transform = 'translateZ(30px)';


        left.style.transform = 'rotateY(-270deg) translateZ(180px)';
        left.style.height = '295px';
        front.style.transform = 'translateZ(30px)';
        front.style.width = '210px';
        front.style.height = '290px';
        play = document.getElementById('play');


    front.style.borderRadius = '19px';


    topp.style.transform = 'rotateX(-90deg) translateZ(30px)';
    topp.style.width = '240px';

    audio.play();
    return true;



};





// cube.addEventListener('mouseleave', function(){
// 	body.style.animation = 'unshad 3s linear';
// 	setTimeout(function(){body.style.background = 'url(https://media.giphy.com/media/2lx83o4ZJIxYA/giphy.gif)'; body.style.backgroundSize ='100% 1%',2500});
// 	left.style.transform = 'rotateY(90deg) translateZ(35px)';


// 	bottom.style.boxShadow = 'black 0px 0px 5px 5px inset, black 0px 0px 10px 6px';
// 	front.style.boxShadow = 'black 0px 0px 5px 5px inset, black 0px 0px 10px 6px';
// 	right.style.boxShadow = 'black 0px 0px 5px 5px inset, black 0px 0px 10px 6px';
// 	back.style.boxShadow   = 'black 0px 0px 1px 5px inset, black 0px 0px 4px 6px';
// 	s4.style.width = '65px';

// 	right.style.height = '65px';
// 	right.style.transform = 'rotateY(-90deg) translateZ(-35px)';
// 	bottom.style.transform = 'rotateX(90deg) translateZ(35px)';
// 	bottom.style.width = '65px';
// 	front.style.transform = 'translateZ(-35px)';
// 	front.style.borderRadius = '12px';
// 	front.style.width = '65px';
// 	front.style.height = '65px';
// 	back.style.transform = 'translateZ(-35px)';
// 	back.style.width = '65px';
// 	back.style.height = '65px';

// 	left.style.transform = 'rotateY(90deg) translateZ(-35px)';
// 	left.style.height = '65px';

// 	s2.style.width = '65px';
// 	s2.style.height = '65px';
// 	s2.style.border = '2px solid #14e696';
// 	s3.style.height = '65px';
// 	s3.style.width = '65px';
// 	s4.style.transform = 'rotate3d(1,0,0,90deg) translateZ(-35px)';
// 	s4.style.width = '65px';
// 	topp.style.width = '65px';


//         topp.style.border = '3px solid #14e696';

//                  front.style.transform = 'translateZ(35px)';

// });




let play = document.getElementById('play');

let count = 0;



left.addEventListener("click", function(){



    circleBlock = document.getElementById('circle-block');


    elemBlock.innerHTML = innText;

    if(audio3.paused === true){
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
        audio3.play();
        circle.style.animation = '93s linear infinite songnamerun';
        elemBlock.style.animation = 'elemBlockRotate 83s linear infinite';

    }else{ play.classList.remove('fa-play');
        play.classList.add('fa-pause');
        audio3.pause();
        circle.style.animation = 'none';
        elemBlock.style.animation = 'none';
    }



    // arr1 = ['rotate(158deg) translate(-100px, 10px)', 'rotate(157deg) translate(-100px, 29px)', 'rotate(153deg) translate(-103px, 50px)', 'rotate(150deg) translate(-107px, 70px)',
    // 		'rotate(147deg) translate(-116px, 88px)', 'rotate(142deg) translate(-120px, 106px)', 'rotate(139deg) translate(-129px, 122px)', 'rotate(129deg) translate(-232px, 129px)',
    // 		'rotate(130deg) translate(-211px, 142px)', 'rotate(130deg) translate(-193px, 148px)', 'rotate(131deg) translate(-177px, 158px)', 'rotate(124deg) translate(-181px, 143px)',
    // 		'rotate(118deg) translate(-183px, 132px)', 'rotate(114deg) translate(-174px, 127px)', 'rotate(108deg) translate(-175px, 118px)', 'rotate(102deg) translate(-173px, 111px)',
    // 		'rotate(102deg) translate(-160px, 122px)' ]		;

    // for(i=0; i<= arr.length; i++){
    // elem = document.createElement('div');
    // 	elem.className = 'sub';
    // 	elem.innerHTML = arr[i];
    // 		elem.style.float = 'left';
    // 	elem.style.color = 'rgb(34, 255, 175)';
    // 	elem.style.position = 'relative';
    // 	elem.style.margin = '1px';
    // 	elemBlock.appendChild(elem);
    // circleBlock.appendChild(elemBlock);
     new CircleType(document.getElementById('elemBlock')).radius(230);
    elemBlock.style.fontFamily = 'Comfortaa, cursive';


});





var audio3 = document.getElementById('audio3');
let progress = document.getElementById('progress');



let bodys = document.querySelector('body');
bodys.addEventListener("mousemove", function(event){
    sc1 = document.getElementById('screen1block');
    sc2 = document.getElementById('screen2block');

    if(event){


        sc1.style.backgroundPosition =  -event.clientX + 'px ' + '' + event.clientY+ 'px'  ;
        sc2.style.backgroundPosition =  event.clientX + 'px ' + '-' +event.clientY+ 'px' ;
    }else{
        return	false;
    }


});

var source;
var audioCtx
let xwidth;
audio3.addEventListener("timeupdate", function(){
    var currentMinutes, currentSeconds, totalMinutes, totalSeconds, currentTime, totalTime;

    currentMinutes = smartTime(Math.floor(audio3.currentTime/60));
    totalMinutes =smartTime(Math.floor(audio3.duration /60));

    currentSeconds = smartTime(Math.floor(audio3.currentTime % 60));
    totalSeconds = smartTime(Math.floor(audio3.duration % 60));

    currentTime = currentMinutes + ":" + currentSeconds;
    totalTime = totalMinutes + ":" + totalSeconds;


    timeBox.innerHTML = currentTime + "/" + totalTime;

    function smartTime(time){  return time < 10 ? "0" + time.toString().trim() :  time  }

     xwidth = ((audio3.currentTime / audio3.duration) * 100) + "%";
    progress.style.transition = '0.3s ease';
    progress.style.width = xwidth;

});

progressBar.addEventListener("click", function(event){
    let clickedPosition = event.clientX - progressBar.offsetLeft;
    progress.style.width = xwidth;
    audio3.currentTime = clickedPosition / progressBar.offsetWidth * audio3.duration;
});



progressBar.addEventListener("mousedown",function () {
    progress.style.transition = '0.1s ease';

    progress.style.height = '1px';
progress.style.boxShadow = 'white 0px 0px 2px 1px, white 0px 0px 0px 0px inset';
});

progressBar.addEventListener("mouseup", function () {
    progress.style.transition = '1s ease';

    setTimeout(function () {progress.style.transition = '0.3s ease'}, 800);

    progress.style.height = '2px';

    progress.style.boxShadow = 'rgb(255 255 255) 0px 0px 7px 1px, rgb(255 255 255) 0px 0px 17px 0px inset';

});






////////////////
// volumeBar.addEventListener("mousedown", function(){
//     volumeBar.addEventListener("mousemove", function(event){
//         var clickedPosition = event.clientX - event.offsetLeft;
//         audio3.volume = clickedPosition / volumeBar.offsetWidth;
//         volumeP.style.width = (clickedPosition / volumeBar.offsetWidth) * 100 + "%";

//     });

// });

var arr;
var all;

// var audio3 = document.getElementById('audio3');
var src1 = null;
let url = null;
let buf = null;

function callToServer(){
    if(audioCtx === undefined){
        audioCtx = new AudioContext();
    }
   
var source = audioCtx.createBufferSource();
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://localhost:8080/test/play?name='+innText, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function(e) {
             var src1 = null;

        audio3.src = URL.createObjectURL(new Blob([xhr.response]));
    
        var analyser = audioCtx.createAnalyser();
        var gainNode = audioCtx.createGain();

        //RENDERING CODE BELOW //
       

        if(src1 == null){
           src1 = audioCtx.createMediaElementSource(audio3);
        }else{
            return;
        }
        src1.connect(gainNode).connect(analyser).connect(audioCtx.destination);


        var canvas = document.getElementById("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        var ctx = canvas.getContext("2d");

        analyser.fftSize = 2048;

        var bufferLength = analyser.frequencyBinCount;
        var dataArray = new Uint8Array(bufferLength);

        var WIDTH = canvas.width;
        var HEIGHT = canvas.height;
        var barWidth = (WIDTH / bufferLength)/1.3// дели на 2
        var barHeight;
        var x = 0;

        function renderFrame() {
            requestAnimationFrame(renderFrame);
            x = 0;
            var canvas2 = document.getElementById("canvas2");
            var canvas3 = document.getElementById("canvas3");
            var canvas4 = document.getElementById('canvas4');

            canvas2.width = window.innerWidth;
            canvas2.height = window.innerHeight*2;

            canvas3.width = window.innerWidth;
            canvas3.height = window.innerHeight*2;

            canvas4.width = window.innerWidth;
            canvas4.height = window.innerHeight*2;


            var ctx2 = canvas2.getContext("2d");

            var ctx3 = canvas3.getContext("2d");

            var ctx4 = canvas4.getContext("2d");

            gradient = ctx2.createLinearGradient(111,110,0,1001);
            gradient.addColorStop(".05","purple");
            gradient.addColorStop(".95","#27d788");
            gradient.addColorStop(".45","white");

            analyser.getByteFrequencyData(dataArray);
            ctx2.clearRect(0, 0, canvas.width, canvas.height);
            ctx3.clearRect(0, 0, canvas.width, canvas.height);
            ctx4.clearRect(0,0,0, canvas.height);

            for (var i = 0; i < bufferLength; i++) {
                barHeight = dataArray[i]*4;
                var r = i * 25;
                var g = (r, 10,10,10,0);
                var b = 310;
                // ctx.fillStyle = "rgb(" + r + "," + r + "," + b + ")";
                // ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

                ctx2.fillStyle = can2color.value; //brr - white  //rrg- yellow //gbb-blue(goluboi(
                ctx2.fillRect(x *3	, HEIGHT - barHeight, barWidth *3, barHeight);

                ctx3.fillStyle = can3color.value; //##27d788    ccff0af9;  02b4bb
                ctx3.fillRect(x *3, HEIGHT - barHeight, barWidth*3 , barHeight    );

                ctx4.fillStyle = "white";
                ctx4.fillRect(x*3,HEIGHT - barHeight, barWidth*3, barHeight);


                x += barWidth +1;
            }
        }
        audio3.play();
        // source.start(0);
        renderFrame();
    }
    xhr.send();
}
let fonts = document.getElementById('mySelect').children;

for(var t =0; t<fonts.length; t++){
    let z = fonts[t];
    z.style.fontFamily = fonts[t].innerHTML;
}


var arr = document.querySelectorAll('.inputsColors');

var x = 0;
var pushedSelectorSide = 0;
var active = 0;


var array = document.querySelectorAll('.selectors');


let cubePos = new Map();
cubePos.set('left','rotate3d(44, 249, -87, 78deg)');
cubePos.set('right','rotate3d(44, 249, 19, 247deg)');
cubePos.set('topp', 'rotate3d(-15, 56, 71, 190deg)');
cubePos.set('bottom', 'rotate3d(54, 0, 17, 248deg)');
cubePos.set('front', 'rotate3d(10, -34, 28, 25deg)');
cubePos.set('back','rotate3d(99, -35, 1, 166deg)');

let curPane = 0;
let currentSelector = 0;

let length = 0;
let side;

array.forEach(element =>
            element.addEventListener("click", function (e) {
                if (currentSelector === 0) {

                    currentSelector = e.target;
                    curPane = document.getElementById(currentSelector.innerHTML + '-side-setting');

                    currentSelector.style.color = 'white';
                    currentSelector.style.textShadow = '0px 0px 2px white, 0px 0px 2px white, 0px 0px 2px white';

                    let position = cubePos.get(currentSelector.innerHTML);


                    curPane.style.opacity = '1';
                    curPane.style.left = '40%';
                    cube.style.animation = 'none';

                    setTimeout(function () {cube.style.transform = position;},1000);

                    cube.animate([{transform: cube.style.transform},{transform: position}],
                        {easing: 'ease-in-out', duration: (1000), iterations: 1});

                    side = document.getElementById(currentSelector.innerHTML);

                    setTimeout(function(){
                        side.animate([{backgroundPosition: '0px'},{backgroundPosition: '190px'},{background: 'black'},
                                {background: 'none'},{background: 'black'},{background: 'none'},{background: 'black'},
                                {background: 'black'},{background: 'none'},{background: 'black'},
                                {background: 'black'},{background: 'black'},{background: 'black'},
                                {background: cube.style.background}],
                            {duration: 1800, easing: 'ease', iterations: 1});},500);

            // cube.style.transform = position;
            // alert(position);


        }else{
            if(currentSelector.innerHTML === e.target.innerHTML){

                curPane.style.left = '165%';

                currentSelector.style.textShadow = '0px 0px 0px white, 0px 0px 2px white, 0px 0px 0px white';
                currentSelector.style.color = 'white';

                cube.style.transform = '';

                setTimeout(function(){cube.style.animation = 'rotateCube 15s linear infinite';},800);
                cube.animate([{transform: cube.style.transform},{transform:  "rotate3d(-2, -4, -15, -75deg)"},
                ],{duration:800, iterations: 1, easing: 'linear'});


                currentSelector = 0;
                curPane = 0;
            }else{

                curPane.style.opacity ='0';
                curPane.style.left ='165%';


                side = document.getElementById(currentSelector.innerHTML);


                currentSelector.style.color = 'lawngreen';
                currentSelector.style.textShadow = '0px 0px 0px white';

                currentSelector = e.target;
                curPane = document.getElementById(currentSelector.innerHTML +'-side-setting');

                curPane.style.opacity = '1';
                curPane.style.left = '40%';
                let position = cubePos.get(currentSelector.innerHTML);


                setTimeout(function () {cube.style.transform = position;},1000);

                cube.animate([{transform: cube.style.transform},{transform: position}],
                    {easing: 'ease-in-out', duration: (1000), iterations: 1});

                side = document.getElementById(currentSelector.innerHTML);

                setTimeout(function(){
                    side.animate([{background: 'black'},
                            {background: 'none'},{background: 'black'},{background: 'none'},{background: 'black'},
                            {background: 'black'},{background: 'black'},{background: 'black'},
                            {background: cube.style.background}],
                        {duration: 1800, easing: 'ease', iterations: 1});},500);
                currentSelector.style.color = 'white';
                currentSelector.style.textShadow = '0px 0px 2px white, 0px 0px 2px white, 0px 0px 2px white';
            }
        }


    }));

// leftSelector.addEventListener("click", function () {
//     if(active === 0 && x === 0){
//             active = leftSelector.id.substring(0,4);
//             alert('x: ' + x + '    active:' + active);
//
//             leftSideSettingPane.style.left = '40%';
//             leftSideSettingPane.style.transition = '0.7s ease-in-out';
//
//             cube.style.transition = '1.5s ease-in-out';
//             cube.style.animation = 'none';
//
//             setTimeout(function(){
//                 cube.style.transform = 'rotateZ(175deg) rotateY(90deg) rotateX(-45deg)';}, 1500);
//                 cube.animate([{transform: cube.style.transform},{transform: 'rotateZ(175deg) rotateY(90deg) rotateX(-45deg)'}],
//                 {
//                     duration: 1500,
//                     iterations: 1,
//                     easing: 'ease-in'
//                 });
//             x = 1;
//
//         }else if(x === 1 && active === leftSelector.id.substring(0,4)) {
//         leftSideSettingPane.style.left = '100%';
//         cube.style.animation = '20s rotateCube linear infinite';
//
//         x = 0;
//         active = 0;
//     }else if(x === 1 && active !== leftSelector.id.substring(0,4)){
//         curActive = document.getElementById(active);
//         curActive.style.left = '100%';
//         leftSideSettingPane.style.left = '40%';
//         active = leftSelector.id.substring(0,4)
//
//         setTimeout(function(){
//             cube.style.transform = 'rotateZ(175deg) rotateY(90deg) rotateX(-45deg)';}, 1500);
//             cube.animate([{transform: cube.style.transform},{transform: 'rotateZ(175deg) rotateY(90deg) rotateX(-45deg)'}],
//             {
//                 duration: 1500,
//                 iterations: 1,
//                 easing: 'ease-in'
//             });
//
//
//
//
//     }
//
//
//
// });
//
//
//
//
// rightSelector.addEventListener("click", function () {
//     if(active === 0 && x === 0){
//         active = rightSelector.id.substring(0,5);
//         alert('x: ' + x + '    active:' + active);
//
//         rightSideSettingPane.style.left = '40%';
//         rightSideSettingPane.style.transition = '0.7s ease-in-out';
//
//         cube.style.transition = '1.5s ease-in-out';
//         cube.style.animation = 'none';
//
//         setTimeout(function(){
//             cube.style.transform = 'rotateZ(175deg) rotateY(90deg) rotateX(-45deg)';}, 1500);
//         cube.animate([{transform: cube.style.transform},{transform: 'rotateZ(175deg) rotateY(90deg) rotateX(-45deg)'}],
//             {
//                 duration: 1500,
//                 iterations: 1,
//                 easing: 'ease-in'
//             });
//         x = 1;
//
//     }else if(x === 1 && active === rightSelector.id.substring(0,5)) {
//         leftSideSettingPane.style.left = '100%';
//         cube.style.animation = '20s rotateCube linear infinite';
//
//         x = 0;
//         active = 0;
//     }else if(x === 1 && active !== rightSelector.id.substring(0,5)){
//         curActive1 = document.getElementById(active);
//         curActive1.style.left = '100%';
//         rightSideSettingPane.style.left = '40%';
//         active = rightSelector.id.substring(0,5);
//
//         setTimeout(function(){
//             cube.style.transform = 'rotateZ(175deg) rotateY(90deg) rotateX(-45deg)';}, 1500);
//         cube.animate([{transform: cube.style.transform},{transform: 'rotateZ(175deg) rotateY(90deg) rotateX(-45deg)'}],
//             {
//                 duration: 1500,
//                 iterations: 1,
//                 easing: 'ease-in'
//             });
//     }
// });
//
//
//
//
//
//
//
// bottomStyleSelector = document.getElementById('bottomStyleSelector');
// bottomStyleSelector.addEventListener("click", function(){
//     cube.style.transition = '1.5s ease-in-out';
//     cube.style.animation = 'none';
//     setTimeout(function(){
//         cube.style.transform = 'rotateZ(217deg) rotateY(361deg) rotateX(-64deg)';}, 1500);
//     cube.animate([{transform: cube.style.transform},{transform: 'rotateZ(217deg) rotateY(361deg) rotateX(-64deg)'}],
//         {
//             duration: 1500,
//             iterations: 1,
//             easing: 'ease-in-out'
//         });
// })
// topSideSelector = document.getElementById('topSideSelector');
// topSideSelector.addEventListener("click",function(){
//     cube.style.transition = '1.5s ease-in-out';
//     cube.style.animation = 'none';
//     setTimeout(function(){
//         cube.style.transform = 'rotateZ(278deg) rotateY(352deg) rotateX(84deg)';}, 1500);
//     cube.animate([{transform: cube.style.transform},{transform: 'rotateZ(278deg) rotateY(352deg) rotateX(84deg)'}],
//         {
//             duration: 1500,
//             iterations: 1,
//             easing: 'ease-in-out'
//         });
// })
// backSideSelector = document.getElementById('backSideSelector');
// backSelector.addEventListener("click",function(){
//     cube.style.transition = '1.5s ease-in-out';
//     cube.style.animation = 'none';
//     setTimeout(function(){
//         cube.style.transform = 'rotateZ(126deg) rotateY(351deg) rotateX(-181deg)';}, 1500);
//     cube.animate([{transform: cube.style.transform},{transform: 'rotateZ(126deg) rotateY(351deg) rotateX(-181deg)'}],
//         {
//             duration: 1500,
//             iterations: 1,
//             easing: 'ease-in-out'
//         });
// })
//
//
// frontSideSelector = document.getElementById('frontSideSelector');
//
// frontSideSelector.addEventListener("click", function(){
//     cube.style.transition = '1.5s ease-in-out';
//     cube.style.animation = 'none';
//     setTimeout(function(){
//         cube.style.transform = 'rotateZ(352deg) rotateY(358deg) rotateX(-356deg)';}, 1500);
//     cube.animate([{transform: cube.style.transform},{transform: 'rotateZ(352deg) rotateY(358deg) rotateX(-356deg)'}],
//         {
//             duration: 1500,
//             iterations: 1,
//             easing: 'ease-in-out'
//         });
// })

var playerPushed = 0;
var cubePushed = 0;
var chatPushed = 0;
var userPushed = 0;


var cubeButton = document.getElementById('cubeSettingButton');
var playerButton = document.getElementById('equalizerSettingButton');
var chatButton = document.getElementById('chatWindowSettingButton');
var userButton = document.getElementById('userPageSettingButton');
var selector = document.getElementById('cube-sides-selector');



//   ПЕРЕПИСАТЬ!!!!!!!!!

cubeButton.addEventListener("click", function() {

    if(currentPane === cubePane.id) {

        if (cubePushed === 0) {
            cubePane.style.left = '64%';
            cubePushed = 1;
            cubeButton.style.textShadow = '#00ffa8 0px 0px 1px, #00ffa8 0px -1px 1px, black 0px 0px 2px, #00ffa8 0px 0px 3px, black -4px 1px 10px, black -1px 0px 1px';
            cubeButton.style.boxShadow = '0px 0px 9px 4px black inset';
            cubeButton.style.border = '1px solid black';
            cubeButton.style.color = '#00ffa8';
            setTimeout(function () { selector.style.transform = 'rotate(1deg)';

            }, 800);
            cube.style.left = '62%';
            cube.style.top = '41%';



        } else if (cubePushed === 1) {
            cubePushed = 0;
            cubeButton.style.textShadow = '0px 0px 2px crimson, 0px 0px 2px crimson, 0px 1px 3px crimson, -1px -1px 0px crimson, -1px 0px 1px crimson';
            cubeButton.style.boxShadow = '0px 0px 2px 1px black inset';
            cubeButton.style.color = 'black';
            cubeButton.style.border = 'none';
             selector.style.transform = 'rotate(-101deg)';
             setTimeout(function () {cube.style.left = '40%'; cube.style.top = '50%'; cube.style.animation = '20s rotateCube linear infinite'; cubePane.style.left = '100%';
             },200);


        }
    }else{
        if(currentPane === 0){
            currentButton = cubeButton.id
            currentPane = cubePane.id;
            cubePane.style.left = '64%';

        }else{

            x = document.getElementById(currentPane);
            y = document.getElementById(currentButton);

            x.style.left = '100%';
            x.style.textShadow = '#00ffa8 0px 0px 1px, #00ffa8 0px -1px 1px, black 0px 0px 2px, #00ffa8 0px 0px 3px, black -4px 1px 10px, black -1px 0px 1px';
            x.style.fontWeight = 'lighter';
            y.style.boxShadow = '0px 0px 2px 1px black inset';
            y.style.color ='black';

            currentPane = cubePane.id;
            currentButton = cubeButton.id;
            cubePane.style.left = '64%';
        }
        cubePushed = 1;
        cubeButton.style.fontWeight = 'lighter';
        cubeButton.style.boxShadow = '0px 0px 9px 4px black inset';
        cubeButton.style.border = '1px solid black';
        cubeButton.style.color = '#00ffa8';
        setTimeout(function () { selector.style.transform = 'rotate(1deg)';

        }, 800);
        cube.style.left = '62%';
        cube.style.top = '41%';
        cube.style.animation = '50s rotateCube linear infinite';


    }
});

playerButton.addEventListener("click", function() {

    if(currentPane === playerPane.id){

            if (playerPushed === 0) {
                playerPane.style.opacity = '1';
                playerPane.style.left = '64%';
                playerPushed = 1;
                playerButton.style.color = '#00ffa8';
                playerButton.style.textShadow = '#00ffa8 0px 0px 1px, #00ffa8 0px -1px 1px, black 0px 0px 2px, #00ffa8 0px 0px 3px, black -4px 1px 10px, black -1px 0px 1px';
                playerButton.style.fontWeight = 'lighter';
                playerButton.style.boxShadow = '0px 0px 9px 4px black inset';
                playerButton.style.border = '1px solid black';



            } else if (playerPushed === 1) {
                playerPane.style.left = '100%';
                playerPushed = 0;
                playerButton.style.textShadow = '0px 0px 2px crimson, 0px 0px 2px crimson, 0px 1px 3px crimson, -1px -1px 0px crimson, -1px 0px 1px crimson';
                playerButton.style.color = 'black';
                playerButton.style.boxShadow = '0px 0px 2px 1px black inset';
                playerButton.style.border = 'none';
            }
    }else {
        if (currentPane === 0) {
            currentPane = playerPane.id;
            currentButton = playerButton.id;
            playerPane.style.left = '64%';
            playerButton.style.textShadow = '#00ffa8 0px 0px 1px, #00ffa8 0px -1px 1px, black 0px 0px 2px, #00ffa8 0px 0px 3px, black -4px 1px 10px, black -1px 0px 1px';


        }else{
            x = document.getElementById(currentPane);
            y= document.getElementById(currentButton);
            x.style.left = '100%';
            x.style.textShadow = '0px 0px 2px crimson, 0px 0px 2px crimson, 0px 1px 3px crimson, -1px -1px 0px crimson, -1px 0px 1px crimson';
            x.style.fontWeight = 'lighter';

            y.style.boxShadow = '0px 0px 2px 1px black inset';
            y.style.color = 'black';

            playerButton.style.color = '#00ffa8';
            playerButton.style.textShadow = '#00ffa8 0px 0px 1px, #00ffa8 0px -1px 1px, black 0px 0px 2px, #00ffa8 0px 0px 3px, black -4px 1px 10px, black -1px 0px 1px';
            playerButton.style.fontWeight = 'lighter';
            playerPane.style.left = '64%';

            currentPane = playerPane.id;
            currentButton = playerButton.id;

        }
        playerButton.style.boxShadow = '0px 0px 9px 4px black inset';
        playerButton.style.color ='#00ffa8';
        playerButton.style.border = '1px solid black';


        playerPushed = 1;

    }

});



chatButton.addEventListener("click", function() {

    if(currentPane === chatPane.id){

        if (chatPushed === 0) {
            chatPane.style.left = '64%';
            chatPushed = 1;
            chatButton.style.color = '#00ffa8';
            chatButton.style.textShadow = '#00ffa8 0px 0px 1px, #00ffa8 0px -1px 1px, black 0px 0px 2px, #00ffa8 0px 0px 3px, black -4px 1px 10px, black -1px 0px 1px';
            chatButton.style.fontWeight = 'lighter';
            chatButton.style.boxShadow = '0px 0px 9px 4px black inset';


        } else if (chatPushed === 1) {
            chatPane.style.left = '100%';
            chatPushed = 0;
            chatButton.style.textShadow = '0px 0px 2px crimson, 0px 0px 2px crimson, 0px 1px 3px crimson, -1px -1px 0px crimson, -1px 0px 1px crimson';
            chatButton.style.color = 'black';
            chatButton.style.boxShadow = '0px 0px 2px 1px black inset';



        }
    }else {
        if (currentPane === 0) {
            currentPane = chatPane.id;
            currentButton = chatButton.id;
            chatPane.style.left = '64%';
            chatButton.style.textShadow = '#00ffa8 0px 0px 1px, #00ffa8 0px -1px 1px, black 0px 0px 2px, #00ffa8 0px 0px 3px, black -4px 1px 10px, black -1px 0px 1px';


        }else{
            x = document.getElementById(currentPane);
            y= document.getElementById(currentButton);
            x.style.left = '100%';
            x.style.textShadow = '0px 0px 2px crimson, 0px 0px 2px crimson, 0px 1px 3px crimson, -1px -1px 0px crimson, -1px 0px 1px crimson';
            x.style.fontWeight = 'lighter';

            y.style.boxShadow = '0px 0px 2px 1px black inset';
            y.style.color = 'black';

            chatButton.style.color = '#00ffa8';
            chatButton.style.textShadow = '#00ffa8 0px 0px 1px, #00ffa8 0px -1px 1px, black 0px 0px 2px, #00ffa8 0px 0px 3px, black -4px 1px 10px, black -1px 0px 1px';
            chatButton.style.fontWeight = 'lighter';
            chatPane.style.left = '64%';

            currentPane = chatPane.id;
            currentButton = chatButton.id;

        }
        chatButton.style.boxShadow = '0px 0px 9px 4px black inset';
        chatButton.style.color ='#00ffa8';

        chatPushed = 1;

    }

});




userButton.addEventListener("click", function() {

    if(currentPane === userPane.id){

        if (userPushed === 0) {
            userPane.style.left = '64%';
            userPushed = 1;
            userButton.style.color = '#00ffa8';
            userButton.style.textShadow = '#00ffa8 0px 0px 1px, #00ffa8 0px -1px 1px, black 0px 0px 2px, #00ffa8 0px 0px 3px, black -4px 1px 10px, black -1px 0px 1px';
            userButton.style.fontWeight = 'lighter';
            userButton.style.boxShadow = '0px 0px 9px 4px black inset';


        } else if (userPushed === 1) {
            userPane.style.left = '100%';
            userPushed = 0;
            userButton.style.textShadow = '0px 0px 2px crimson, 0px 0px 2px crimson, 0px 1px 3px crimson, -1px -1px 0px crimson, -1px 0px 1px crimson';
            userButton.style.color = 'black';
            userButton.style.boxShadow = '0px 0px 2px 1px black inset';
        }
    }else {
        if (currentPane === 0) {
            currentPane = userPane.id;
            currentButton = userButton.id;
            userPane.style.left = '64%';
            userButton.style.textShadow = '#00ffa8 0px 0px 1px, #00ffa8 0px -1px 1px, black 0px 0px 2px, #00ffa8 0px 0px 3px, black -4px 1px 10px, black -1px 0px 1px';


        }else{
            x = document.getElementById(currentPane);
            y= document.getElementById(currentButton);
            x.style.left = '100%';
            x.style.textShadow = '0px 0px 2px crimson, 0px 0px 2px crimson, 0px 1px 3px crimson, -1px -1px 0px crimson, -1px 0px 1px crimson';
            x.style.fontWeight = 'lighter';

            y.style.boxShadow = '0px 0px 2px 1px black inset';
            y.style.color = 'black';

            userButton.style.color = '#00ffa8';
            userButton.style.textShadow = '#00ffa8 0px 0px 1px, #00ffa8 0px -1px 1px, black 0px 0px 2px, #00ffa8 0px 0px 3px, black -4px 1px 10px, black -1px 0px 1px';
            userButton.style.fontWeight = 'lighter';
            userPane.style.left = '64%';

            currentPane = userPane.id;
            currentButton = userButton.id;

        }
        userButton.style.boxShadow = '0px 0px 9px 4px black inset';
        userButton.style.color ='#00ffa8';

        userPushed = 1;

    }

});


let wavesColorWrapers = document.querySelectorAll('.audioWaveColorWraper');
let wavesColors = document.querySelectorAll('.waveColors');
let bars;
let delay = ['0.4s','0.1s','0.7s','0.2s','0.4s','0.8'];

for(let v = 1; v<7; v++){
    bars = document.querySelectorAll('.bars'+v);
    for(let b =0; b< 6; b++){
        bars[b].style.animationDelay = delay[b];
    }
}


for(let ix = 0; ix< wavesColorWrapers.length; ix++) {
    let curWaveColor = document.getElementById(wavesColors[ix].id);
    let barsNumber = '.bars' + (ix+1);
    let curWaveWraper = wavesColorWrapers[ix];


    curWaveColor.addEventListener("input", function (e) {
         bars = document.querySelectorAll(barsNumber);

        curWaveWraper.style.boxShadow = '0px 0px 10px 1px ' + curWaveColor.value + ', ' + '0px 5px 10px 2px ' + curWaveColor.value + ' inset';
        curWaveWraper.style.border = '1px solid '+ curWaveColor.value;
        for (let z=0; z <= 5; z++) {
            bars[z].style.background = curWaveColor.value;
            bars[z].style.boxShadow = '0px 0px 3px 1px ' + curWaveColor.value;

        }

    });

}