let div1 = document.createElement("div")
div1.id = '1';
let div2 = document.createElement("div");
div2.id = '2';
document.body.appendChild(div1);
document.body.appendChild(div2);
let x = document.getElementById('1');
let y = document.getElementById('2');
x.innerText='I am div1';
y.innerText='I am div2';
let button = document.createElement("button");
document.body.append(button);
button.innerText="Click";
button.onclick = function(){
    let temp = x.innerText;
    x.innerText=y.innerText;
    y.innerText=temp;
}