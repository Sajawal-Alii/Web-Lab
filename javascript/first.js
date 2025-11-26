document.getElementById("message").innerText="hello world";

let a=10;
let b=20;

let sum=a+b;
// document.writeln(sum)
document.getElementById("sum").innerText="The Sum is "+sum

function mul(){
    let res=a*b;
    return res;
}
    document.getElementById("mult").innerText="The product is " + mul();

