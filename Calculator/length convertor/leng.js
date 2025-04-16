function length(){
    let input =document.querySelector("#inputvalue").value;
    let type1 = document.querySelector("#type1");
    let type2 = document.querySelector("#type2");
    let result = document.querySelector("#results");

    if(input ==""){
        alert("Please Enter the number..")
        location.reload();
    }else if(type1.value == "meter" && type2.value == "") {
        alert("Please Enter the result type")
        location.reload();
    }else if(type1.value == "meter" && type2.value == "meter") {
        let m = Number(input) * 1
        result.innerHTML = m + " Meter";
    }else if(type1.value == "meter" && type2.value == "cm") {
        let cm = Number(input) * 100
        result.innerHTML = cm + " Cm";
    }else if(type1.value == "meter" && type2.value == "mm") {
        let mm = Number(input) * 1000
        result.innerHTML = mm + " Mm";
    }else if(type1.value == "meter" && type2.value == "km") {
        let km = Number(input) * 0.001
        result.innerHTML = km + " Km";
    }else if(type1.value == "meter" && type2.value == "mile") {
        let mi = Number(input) * 0.0006214
        result.innerHTML = mi.toFixed(6) + " mi";
    }else if(type1.value == "meter" && type2.value == "inch") {
        let inch = Number(input) * 39.4
        result.innerHTML = inch.toFixed(2) + " in";
    }else if(type1.value == "meter" && type2.value == "foot") {
        let foot = Number(input) * 3.28
        result.innerHTML = foot + " Ft";
    }
    
    else if(type1.value == "cm" && type2.value == "meter") {
        let m = Number(input) * 0.01
        result.innerHTML = m + " Meter";
    }else if(type1.value == "cm" && type2.value == "cm") {
        let cm = Number(input) * 1
        result.innerHTML = cm + " Cm";
    }else if(type1.value == "cm" && type2.value == "mm") {
        let mm = Number(input) * 10
        result.innerHTML = mm + " Mm";
    }else if(type1.value == "cm" && type2.value == "km") {
        let km = Number(input) * 0.00001
        result.innerHTML = km + " Km";
    }else if(type1.value == "cm" && type2.value == "mile") {
        let mi = Number(input) * 0.000006214
        result.innerHTML = mi.toFixed(6) + " mi";
    }else if(type1.value == "cm" && type2.value == "inch") {
        let inch = Number(input) * 0.394
        result.innerHTML = inch.toFixed(2) + " in";
    }else if(type1.value == "cm" && type2.value == "foot") {
        let foot = Number(input) * 0.0328
        result.innerHTML = foot + " Ft";
    }
    
    else if(type1.value == "mm" && type2.value == "meter") {
        let m = Number(input) * 0.001
        result.innerHTML = m + " Meter";
    }else if(type1.value == "mm" && type2.value == "cm") {
        let cm = Number(input) * 0.1
        result.innerHTML = cm + " Cm";
    }else if(type1.value == "mm" && type2.value == "mm") {
        let mm = Number(input) * 1
        result.innerHTML = mm + " Mm";
    }else if(type1.value == "mm" && type2.value == "km") {
        let km = Number(input) * 0.000001
        result.innerHTML = km + " Km";
    }else if(type1.value == "mm" && type2.value == "mile") {
        let mi = Number(input) * 0.0000006214
        result.innerHTML = mi.toFixed(8) + " mi";
    }else if(type1.value == "mm" && type2.value == "inch") {
        let inch = Number(input) * 0.0394
        result.innerHTML = inch.toFixed(3) + " in";
    }else if(type1.value == "mm" && type2.value == "foot") {
        let foot = Number(input) * 0.00328
        result.innerHTML = foot + " Ft";
    }
    
    else if(type1.value == "km" && type2.value == "meter") {
        let m = Number(input) * 1000
        result.innerHTML = m + " Meter";
    }else if(type1.value == "km" && type2.value == "cm") {
        let cm = Number(input) * 100000
        result.innerHTML = cm + " Cm";
    }else if(type1.value == "km" && type2.value == "mm") {
        let mm = Number(input) * 1000000
        result.innerHTML = mm + " Mm";
    }else if(type1.value == "km" && type2.value == "km") {
        let km = Number(input) * 1
        result.innerHTML = km + " Km";
    }else if(type1.value == "km" && type2.value == "mile") {
        let mi = Number(input) * 0.6214
        result.innerHTML = mi.toFixed(6) + " mi";
    }else if(type1.value == "km" && type2.value == "inch") {
        let inch = Number(input) * 39370.08
        result.innerHTML = inch.toFixed(2) + " in";
    }else if(type1.value == "km" && type2.value == "foot") {
        let foot = Number(input) * 3280.83
        result.innerHTML = foot + " Ft";
    }
    
    else if(type1.value == "mile" && type2.value == "meter") {
        let m = Number(input) * 1609.34
        result.innerHTML = m + " Meter";
    }else if(type1.value == "mile" && type2.value == "cm") {
        let cm = Number(input) * 160934.4
        result.innerHTML = cm + " Cm";
    }else if(type1.value == "mile" && type2.value == "mm") {
        let mm = Number(input) * 1609344.4
        result.innerHTML = mm + " Mm";
    }else if(type1.value == "mile" && type2.value == "km") {
        let km = Number(input) * 1.609
        result.innerHTML = km + " Km";
    }else if(type1.value == "mile" && type2.value == "mile") {
        let mi = Number(input) * 1
        result.innerHTML = mi + " mi";
    }else if(type1.value == "mile" && type2.value == "inch") {
        let inch = Number(input) * 63360
        result.innerHTML = inch + " in";
    }else if(type1.value == "mile" && type2.value == "foot") {
        let foot = Number(input) * 5280
        result.innerHTML = foot + " Ft";
    }
    
    else if(type1.value == "inch" && type2.value == "meter") {
        let m = Number(input) * 0.0254
        result.innerHTML = m + " Meter";
    }else if(type1.value == "inch" && type2.value == "cm") {
        let cm = Number(input) * 2.54
        result.innerHTML = cm + " Cm";
    }else if(type1.value == "inch" && type2.value == "mm") {
        let mm = Number(input) * 25.4
        result.innerHTML = mm + " Mm";
    }else if(type1.value == "inch" && type2.value == "km") {
        let km = Number(input) * 0.0000254
        result.innerHTML = km + " Km";
    }else if(type1.value == "inch" && type2.value == "mile") {
        let mi = Number(input) * 0.0000157828
        result.innerHTML = mi + " mi";
    }else if(type1.value == "inch" && type2.value == "inch") {
        let inch = Number(input) * 1
        result.innerHTML = inch + " in";
    }else if(type1.value == "inch" && type2.value == "foot") {
        let foot = Number(input) * 0.0833
        result.innerHTML = foot + " Ft";
    }
    
    else if(type1.value == "foot" && type2.value == "meter") {
        let m = Number(input) * 0.305
        result.innerHTML = m + " Meter";
    }else if(type1.value == "foot" && type2.value == "cm") {
        let cm = Number(input) * 30.48
        result.innerHTML = cm + " Cm";
    }else if(type1.value == "foot" && type2.value == "mm") {
        let mm = Number(input) * 304.8
        result.innerHTML = mm + " Mm";
    }else if(type1.value == "foot" && type2.value == "km") {
        let km = Number(input) * 0.000305
        result.innerHTML = km + " Km";
    }else if(type1.value == "foot" && type2.value == "mile") {
        let mi = Number(input) * 0.000189
        result.innerHTML = mi + " mi";
    }else if(type1.value == "foot" && type2.value == "inch") {
        let inch = Number(input) * 12
        result.innerHTML = inch.toFixed(2) + " in";
    }else if(type1.value == "foot" && type2.value == "foot") {
        let foot = Number(input) * 1
        result.innerHTML = foot + " Ft";
    }
}

function set(){
    window.alert("this page is in developing stage");
}