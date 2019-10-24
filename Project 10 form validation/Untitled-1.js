myFunction = () => {
    let uname = document.getElementById("uname");
    let upass = document.getElementById("upass");
    let conpass = document.getElementById("conpass");
    let mbl = document.getElementById("mbl");
    let email = document.getElementById("email");

  
    if (uname.value.trim() == "") {
        uname.style.border = " solid 1px red";
        document.getElementById("hideen").innerHTML = "** Plz fill username **";

        return false;
    } else if (upass.value.trim() == "") {
        upass.style.border = " solid 1px red";
        document.getElementById("hideen1").innerHTML = "** Plz fill Password **";
        return false;
    } else if (conpass.value !== upass.value) {
        conpass.style.border = " solid 1px red";
        document.getElementById("hideen2").innerHTML = "** Plz fill Same Password **";
        return false;
    } else if (mbl.value.trim() == "") {
        mbl.style.border = " solid 1px red";
        document.getElementById("hideen3").innerHTML = "** Plz fill Mobile no. **";
        return false;
    } else if (email.value.trim() == "") {
        email.style.border = " solid 1px red";
        document.getElementById("hideen4").innerHTML = "** Plz fill Email **";
        return false;
    } else {
        document.write("You have Successfully Registered");
        return true;
    }
}
