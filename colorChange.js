let div = document.createElement("div");
document.body.appendChild(div);
div.id = "color";   
let x = document.getElementById('color');
x.innerText='hello';
x.onmouseover = function(){
    this.style.backgroundColor = 'green';
    this.style.color='black';
}
x.onmouseout = function(){
    this.style.backgroundColor = 'transparent';
    this.style.color='red';
    document.body.style.background= 'red';
}