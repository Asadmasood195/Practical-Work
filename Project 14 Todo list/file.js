var li = document.querySelector("div#wrapper");
li.addEventListener('click', function (e) {
    if (e.target.className == 'close') {

        e.target.parentElement.remove();
    }
})
myFunction = () => {
    var txt = document.getElementById('txt').value;
    var crt = document.createElement('LI');
    var txxt = document.createTextNode(txt);
    if (txt !== '') {
        crt.innerHTML = '<span class ="close">Delete</span>'
        crt.appendChild(txxt);
        li.appendChild(crt);

        document.getElementById('txt').value = '';
        console.log(txt);
    }
}
function Asad() {
    var ipt = document.getElementById("srch").value.toLowerCase();
    // var main = document.getElementById("wrapper");
    var lli = document.getElementsByTagName("li");
    console.log(ipt);
    for(i=0; i<lli.length ; i++){

     var term = li.innerText.toLowerCase();
     if(term.indexOf(ipt)>-1){
        lli[i].style.display = "";
        }else{
            lli[i].style.display = "none";
     }
}  
}




      



