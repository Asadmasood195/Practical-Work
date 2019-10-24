// Apple.onclick = Banana.onclick = function (get) {
//     var div = document.createElement("div");

//     if (get.target.value = " Apple") {
//         div.style.left = "50px";
//         div.style.top = "50px";
//         div.style.height = "50px";
//         div.style.width = "50px";
//         div.style.margin = "5px";
//         div.style.backgroundColor = "red";
//         document.body.appendChild(div);


//     } else if(get.target.value =" Banana"){
//         div.style.left = "50px";
//         div.style.top = "50px";
//         div.style.height = "50px";
//         div.style.width = "50px";
//         div.style.margin = "5px";
//         div.style.backgroundColor = "blue";
//         document.body.appendChild(div);
      
//     }
   
// }
document.getElementById("Apple").onclick= function(){
    var div = document.createElement("div");
    div.style.left = "100px";
       div.style.top = "50px";
       div.style.height = "50px";
       div.style.width = "50px";
       div.style.margin = "5px";
    div.style.backgroundColor = "red";
    document.body.appendChild(div);
}
document.getElementById("Banana").onclick= function(){
    var div = document.createElement("div");
    div.style.right = "0px";
       div.style.top = "50px";
       div.style.height = "50px";
       div.style.width = "50px";
       div.style.margin = "5px";
    div.style.backgroundColor = "blue";
    document.body.appendChild(div);
}