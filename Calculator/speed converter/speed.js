function speed(){
    let input =document.querySelector("#inputvalue").value;
    let type1 = document.querySelector("#type1");
    let type2 = document.querySelector("#type2");
    let result = document.querySelector("#results");

    if(input ==""){
        alert("Please Enter the number..")
        location.reload();
    }else if(type1.value == "m/s" && type2.value == "") {
        alert("Please Enter the result type")
        location.reload();
    }else if(type1.value == "m/min" && type2.value == "") {
        alert("Please Enter the result type")
        location.reload();
    }else if(type1.value == "km/h" && type2.value == "") {
        alert("Please Enter the result type")
        location.reload();
    }else if(type1.value == "" && type2.value == "m/s") {
        alert("Please Enter the input type")
        location.reload();
    }else if(type1.value == "" && type2.value == "m/min") {
        alert("Please Enter the input type")
        location.reload();
    }else if(type1.value == "" && type2.value == "km/h") {
        alert("Please Enter the input type")
        location.reload();
    }else if(type1.value == "" && type2.value == "") {
        alert("Please Enter the data type")
        location.reload();
    }
    
    else if(type1.value == "m/s" && type2.value == "m/s") {
        let a = Number(input) * 1
        result.innerHTML = a + " m/sec";
    }else if(type1.value == "m/s" && type2.value == "m/min") {
        let b = Number(input) * 60
        result.innerHTML = b + " m/min";
    }else if(type1.value == "m/s" && type2.value == "km/h") {
        let c = Number(input) * 3.6
        result.innerHTML = c + " Km/hr";
    }
    
    else if(type1.value == "m/min" && type2.value == "m/s") {
        let d = Number(input) * 0.0167
        result.innerHTML = d + " m/sec";
    }else if(type1.value == "m/min" && type2.value == "m/min") {
        let E = Number(input) * 1
        result.innerHTML = E + " m/min";
    }else if(type1.value == "m/min" && type2.value == "km/h") {
        let f = Number(input) * 0.06
        result.innerHTML = f.toFixed(4)+ " Km/hr";
    }
    
    else if(type1.value == "km/h" && type2.value == "m/s") {
        let g = Number(input) * 0.278
        result.innerHTML = g + " m/sec";
    }else if(type1.value == "km/h" && type2.value == "m/min") {
        let h = Number(input) * 16.667
        result.innerHTML = h.toFixed(4) + " m/min";
    }else if(type1.value == "km/h" && type2.value == "km/h") {
        let i = Number(input) * 1
        result.innerHTML = i + " Km/hr";
    }
}

function set(){
    window.alert("this page is in developing stage");
}