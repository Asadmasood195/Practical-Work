

function validate() {
  var uname = document.getElementById("uname").value;
  var upass = document.getElementById("upass").value;
  var uselt = document.getElementById("optn").value;

  var para = document.createElement("P");
  para.innerHTML = "<b>Username:</b>" + uname + "<br>" + "<b>Password:</b>" + upass + "<br><b>Gender:</b>" + uselt;
  document.getElementById("demo").appendChild(para);
  para.style.border = "1px solid black";
  para.style.width = " auto";

  para.style.height = "80px auto";
  para.style.padding = "5px 5px 5px 5px";
  para.style.display = "inline-block";


  if (uname == "" ) {
   
    document.getElementById("memo").style.visibility = "visible";
    document.getElementById("memo1").style.visibility = "visible";
    uname.style.border = "2px solid red";
    // alert("plz enter some data");
    // uname.style.border = "1px solid red";
    return false;
    } else if (uname == "") {
      document.getElementById("memo").style.visibility = "visible";
      // alert("plz enter some password");
      document.getElementById(upass).focus();
      return false;
  } else if (upass == "") {
    document.getElementById("memo1").style.visibility = "visible";
    // alert("plz enter some password");
    document.getElementById(upass).focus();
  }else if (uselt === "select") {
    alert("plz select catagerie");
    return false;
  } else {
    return true;
  }


}

// let data = document.querySelector("uname");
// if (data.length <= 5) {
//   document.write("Too weak");
//   data.style.border= "red";
// }
// else if (data.length > 5) {
//   document.write("Good");
//   data.style.border = "2px solid green";
// }

// document.getElementsByClassName("demo2").addEventListener("click" , function del(){

//   var data = document.getElementById("container");
//   let twu = document.getElementById("demo");


//   data.removeChild(twu);
// });

// function myFunction() {
//   var time = new Date();
//   var m = time.getMonth();
//   var h = time.getHours();
//   var mi = time.getMinutes();
//   var s = time.getSeconds();

//   document.getElementById("demo").innerHTML = "<b>Month:</b>" + m + "<br><b>Time:</b>" + h + ":" + mi + ":" + s;
//   setTimeout(myFunction, 1000);

// }


