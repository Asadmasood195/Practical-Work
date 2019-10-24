    
function main() {
    document.getElementById("demo").src = "../Project 1/New folder/New folder/lll.jpg"
}
function dashboard() {
    document.getElementById("remo").innerHTML = time();
}
function validate() {

    var uname = document.getElementById("container1");
    var password = document.getElementById("container2");
    document.getElementById("memo").style.visibility = "visible";
    document.getElementById("memo1").style.visibility = "visible";

    if (uname.value == "" && password.value == "") {
        uname.style.border = "solid 2px red";
        password.style.border = "solid 2px red";

        return false;
    }
    else if (uname.value.trim() == "") {
        uname.style.border = "solid 2px red";

        return false;

    } else if
        (password.value.trim().length < 5) {
        alert(" password not less than 5");
        return false;
    } else if (password.value == "value") {

        return true;
    } else {
        document.write("<h2> <center>Welcome to dashboard</h2>");
        true;
    }

}
















//  var std = ["Ali", "Asad", "Adil", "Ahsan"];
//  var std1 = std.slice(1, 3);
//  document.write("This student is here" + std1 + "<br>");

//  var std = ["Ali", "Asad", "Adil", "Ahsan"];
//  for (i = 0; i <= 4; i++) {
//      document.write("This student is here" + i + "<br>");
//  }


// var person = {
//     name: "asad",
//     class: "BSCS",
//     data: function () {
//         return this.name + " " + this.class;
// }
// };
// console.log(this.person.name);

// document.write(person.class);
// };
// document.getElementById("demo").innerHTML = person.data();
// document.write("<br>");
// var scoreAvg = Math.random(.01999999);
// document.write(scoreAvg);

// var currentAge = prompt("Enter your age.");
//  var yearsEligibleToVote = currentAge - 18;
//  document.write(yearsEligibleToVote);

// var i = prompt("Enter value");
// for (; i <= 10; i += 2) {
//     document.write("<h3>This value is =" + i + "<br></h3>");
// }

//  var numbers = 1 - 7 + (6 + 9);
//  // document.write("Answer is:" + c);
//    document.write(numbers);
//  var Firstname = prompt("Enter your First name :");
//  var Lastname = prompt("Enter Last name :");
//  document.write(" <h1> Thanks for message to me :</h1>" + Firstname+""+Lastname);

// var firstName = ["Asad" ,"Ali","azhar","asim"];
// var lastName = ["Masood", "Malik","Wireless","Amin"];
// var fullName = firstName+lastName;
// for (i=0 ;i<firstName ;i++){
// // for (j=0 ;j<lastName ;i++){
// // fullName.push(firstName(i)+lastName(j));
// document.write(fullName);
// }
// }