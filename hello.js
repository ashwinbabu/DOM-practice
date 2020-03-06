class Hello{

press(){
        document.getElementById("x").innerText="Vaanga G Vaanga";
        console.log("hi");
    }

}
var x = new Hello;
function z(){
    x.press();
}
document.getElementById("y").addEventListener("click",z);
