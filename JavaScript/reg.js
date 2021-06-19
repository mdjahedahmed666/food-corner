function formValidation() {
    var pattern = /^[a-zA-Z .]+$/
    var mpattern = /^(\+88)?-?01[3-9]\d{8}$/
    var epattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    var ppattern= /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[?!*#$@%&])).{6,20}$/
    //name
    var name = document.getElementById("name").value;
    if (name.length < 3 || name.length > 20) {
        document.getElementById("ename").innerHTML = "Length should be 3-20 char";
        return false;
    }
    else if (!name.match(pattern)) {
        document.getElementById("ename").innerHTML = "Name should only be alphabet";
        return false;
    }
    else{
        document.getElementById("ename").innerHTML = "";
    }

    //Email
    var email = document.getElementById("email").value;
    if (!email.match(epattern)) {
        document.getElementById("eemail").innerHTML = "Invalid Email";
        return false;
    }
    else{
        document.getElementById("eemail").innerHTML = "";
    }

    //password
    var psw = document.getElementById("psw").value;
    if (!psw.match(ppattern)) {
        document.getElementById("epsw").innerHTML = "Password should contain digit,upper,lower and special char with 6-20";
        return false;
    }
    else{
        document.getElementById("epsw").innerHTML = "";
    }

    //conform password
    var repeat = document.getElementById("repeat").value;
    if (psw !== repeat) {
        document.getElementById("erepeat").innerHTML = "Password does not match";
        return false;
    }
    else{
        document.getElementById("erepeat").innerHTML = "";
    }

    //profession
    var profession = document.getElementById("profession").value;
    if (profession.length < 3 || profession.length > 20) {
        document.getElementById("eprofession").innerHTML = "Length should be 3-20 char";
        return false;
    }
    else if (!name.match(pattern)) {
        document.getElementById("eprofession").innerHTML = "Only alphabet";
        return false;
    }
    else{
        document.getElementById("eprofession").innerHTML = "";
    }

    //mobile
    var mobile = document.getElementById("mobile").value;
    if (!mobile.match(mpattern)) {
        document.getElementById("emobile").innerHTML = "Invalid phone number";
        return false;
    }
    else{
        document.getElementById("emobile").innerHTML = "";
    }


    //address
    var address = document.getElementById("address").value;
    if (address.length < 3 || address.length > 30) {
        document.getElementById("eaddress").innerHTML = "Length should be 3-30 char";
        return false;
    }
    else{
        document.getElementById("eaddress").innerHTML = "";
    }

}

function loginValidation(){

    var elogpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    var plogpattern= /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[?!*#$@%&])).{6,20}$/

    //Login Email
    var logemail = document.getElementById("logemail").value;
    if (!logemail.match(elogpattern)) {
        document.getElementById("elogemail").innerHTML = "Put a valid Email";
        return false;
    }
    else{
        document.getElementById("elogemail").innerHTML = "";
    }

    //Login password
    var logpsw = document.getElementById("logpsw").value;
    if (!logpsw.match(plogpattern)) {
        document.getElementById("elogpsw").innerHTML = "Password should contain digit,upper,lower and special char with 6-20";
        return false;
    }
    else{
        document.getElementById("elogpsw").innerHTML = "";
    }
}