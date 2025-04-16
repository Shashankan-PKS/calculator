function temperature(){
    let input = document.querySelector("#inputvalue").value;
    let type = document.querySelector("#type");
    let result = document.querySelector("#result");

    if(input ==""){
        alert("Please Enter the number..")
        location.reload();
    }else if(type.value == "celcius"){
        let celcius = Number.parseInt(input) * 1
        result.innerHTML = celcius.toFixed(3) + `&deg;c`;
    }else if(type.value == "fahrenheit"){
        let fahrenheit = Number.parseInt(input) * (9 / 5) + 32
        result.innerHTML = fahrenheit.toFixed(3) + " F";
    }else if(type.value == "kelvin"){
        let kelvin = Number.parseInt(input) + 273.15
        result.innerHTML = kelvin.toFixed(3) + " K";
    }else if(type.value == "rankin"){
        let rankin = Number.parseInt(input) * (9 / 5) + 491.67
        result.innerHTML = rankin.toFixed(3) + " R";
    }else{
        alert("invalid")
        location.reload();
    }
}

function set(){
    window.alert("this page is in developing stage");
}