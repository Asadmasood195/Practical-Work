var pos = 0;
const myFunction = () => {
   this.imgobject = document.getElementById("picture");
   this.imgobject.style.position = 'relative';
   this.imgobject.style.bottom = '0px';
    
   this.imgobject.style.top = parseInt(this.imgobject.style.top) + 10 + 'px';
    var move = setTimeout(myFunction, 10);
    if (pos === 450) {
        this.imgobject.style.bottom = pos + 'px';
      
    } else {
        pos++;
        this.imgobject.style.top = pos + 'px';
      
    }
}