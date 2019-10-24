
function myFunction() {
    var d = new Date("December 6,2019 11:00:00").getTime();
    var t = new Date().getTime();
    var diff = d - t;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
   
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       
    // console.log(Math.floor(hours));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    // console.log(Math.floor(minutes));
    let seconds = Math.floor((diff % (1000 * 60)) / (1000));
    // console.log(Math.floor(seconds));
    document.getElementById("demo").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
}
let duration = setInterval("myFunction()", 1000)
var t = new Date().getTime();
// console.log(t);
