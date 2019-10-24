validate = () => {
    let uname = document.getElementById("Username");
    let upass = document.getElementById("upass");
    let upasscon = document.getElementById("upasscon");
    if (uname.value == "") {
        uname.style.border = " solid 2px  red";
        return false;

    } else if (upass.value == "") {
        upass.style.border = " solid 2px  red";
        return false;
    } else if (upasscon.value == "") {
        upasscon.style.border = " solid 2px  red";
        return false;
    }
    else if (upasscon.value !== upass.value) {
        upasscon.style.border = " solid 2px  red";
        document.getElementById("label1").style = "visibility: visible";

        return false;
    } else {
        return true;
    }

}