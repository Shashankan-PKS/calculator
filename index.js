let output = document.getElementById("result");

function dis(num){
    output.value += num;
}
function solve(){
    try{
        output.value = eval(output.value);
    }catch(err){
        alert("invalid");
    }
}
function Clear(){
    output.value = "";
}
function del(){
    output.value = output.value.slice(0,-1);
}
function set(){
    window.alert("this page is in developing stage");
}