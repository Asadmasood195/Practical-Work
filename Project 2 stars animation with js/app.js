// function differenceValues() {
//     var a = document.getElementById("1").value;
//     var b = document.getElementById("11").value;
//     document.getElementById("rst").innerHTML ="Result=" +(a + b);
// }

// seconds = 0;
// var ID = 0;
// function prntMsg() {
//     document.getElementById("tx1").innerHTML = "Something Change";

// }

// function start() {
//     ID = setTimeout(prntMsg, 3000);
// }
// function sright() {
//     clearTimeout(ID);
// }

// function prntMsg(){
//     document.getElementById("tx1").innerHTML="Time:"+seconds;
// seconds++;
// }

// function start(){
//     ID=setInterval(prntMsg,2000);
// }
//  function sright(){
//      clearInterval(ID);
//  }

// var d = new Date();
//     document.getElementById("1").innerHTML =d;
// ;


// var width = 100;
// var difference = 2;
// var intervalID = 0;

// function increase() {
//     clearInterval(intervalID);
//     intervalID = setInterval(expand, 10);
//     console.log(width);
// }


// function decrease() {
//     clearInterval(intervalID);
//     intervalID = setInterval(shrink, 10);
//     console.log(width);
// }

// function shrink() {
//     if (width > 100) {
//         width = width - difference;
//         document.getElementById("demo1").style.width = width;
//     } else {
//         clearInterval(intervalID);
//     }
// }

// function expand() {
//     if (width < 200) {
//         width = width + difference;
//         document.getElementById("demo1").style.width = width;
//     } else {
//         clearInterval(intervalID);
//     }
// }


function add() {
    var a = document.getElementById("value1").value;
    var b = document.getElementById("value2").value;
    c = document.getElementById("result").innerHTML = a + b;


}
// function subtract() {
//     d = document.getElementById("result").innerHTML = a - b;
// }




var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
var date = new Date();
var day = date.getDay();
var nameOfToday = dayNames[day];
document.write(nameOfToday);



function Time() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();
    var add = hour + ":" + minute + ":" + seconds;
    document.write(add);
}



var move
 moveRight();
function moveRight() {
    imgObject = document.getElementById("myImage");
    var pos = 0;
    imgObject.style.position = 'relative';
    imgObject.style.bottom = '0px';
    imgObject.style.bottom = parseInt(imgObject.style.bottom) + 10 + 'px';
   

     id = setInterval(frame, 5);

     move = setTimeout(moveRight, 70000);

    

    function frame() {

        if (pos === 400) {
            // imgObject.style.top = ((tops)*Math.random())+'px';
            // imgObject.style.left = pos + 'px';
            clearInterval(id);
        } else {
            pos++;
            imgObject.style.top = pos + 'px';
            imgObject.style.left = pos + 'px';
        }
    }
}

function stop() {
    clearTimeout(move);


}
function Refresh() {
    clearTimeout(move);
    // imgObject.style.bottom = '0px';

}
// window.onload = load;

//Object
var car = {
    color: "Red",
    Wheels: 4,
    Model: "Alto",
    Price: "1000000"
}
console.log(car);