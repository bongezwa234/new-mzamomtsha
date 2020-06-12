function ValidateForm(){
    var username= document.getElementById("username");
    var phoneNum= document.getElementById("phoneNum");
    var password= document.getElementById("password");
    var confirm_password= document.getElementById("confirm_password");
    var value=true;
    if(username.value.length==0){
        username.className="wrong-input";
        username.nextElementSibling.innerHTML="username can't be blank";
        valid=false;
    }
    if(phoneNum.value.length<10){
        phoneNum.className="wrong-input";
        phoneNum.nextElementSibling.innerHTML="please enter valid no.";
        valid=false;
    }
    if(password.value.length==0){
        password.className="wrong-input";
        password.nextElementSibling.innerHTML="password cannot be less than 6";
        valid=false;
    }
    if(password.value!=confirm_password.value){
        confirm_password.className="wrong-input";
        confirm_password.nextElementSibling.innerHTML="password does not match";
        valid=false;
    }
    return valid;
}


function changeColor(theColor){
    navbarColor = document.getElementById("navbar")
    navbarColor.style.background = theColor;
}


