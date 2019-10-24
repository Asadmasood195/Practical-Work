myFunction = () => {
    var imgObj = document.getElementById("container");
    var element = document.getElementById("container");
    let b = document.getElementById("target1");
    imgObj.style.position = "relative";
    // imgObj.style.top = "0px";
    var id = setInterval(myFunction, 5);

    imgObj.style.top = parseInt(imgObj.style.top) + 10 + 'px';

  var  move = setTimeout(myFunction, 20);

    
    var pos = 0;
    if (pos === 600) {

        clearInterval(id);

    } else {
        pos++;
        imgObj.style.top = pos + 'px';
        // element.style.left = pos + 'px';

    }
}
// window.onload= myFunction;