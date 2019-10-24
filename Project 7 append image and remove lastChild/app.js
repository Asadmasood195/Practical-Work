function myFunction() {
    var img = document.createElement("IMG");

 
    img.src = "./car_wheel_PNG23323.png";
    img.style.width = "50px";
   
 
    document.getElementById("container").appendChild(img);


}
function myFunction1() {


    var para1 = document.getElementById("container").lastChild;
   
   
    document.getElementById("container").removeChild(para1);


}
