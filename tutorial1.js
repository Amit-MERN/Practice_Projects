function validateForm(){
    var name = document.myForm.name.value;
    var password = document.myForm.password.value;
    var cnfpassword = document.myForm.repassword.value;

    if(name == null || name == ""){
        alert("Name can't be Blank");
        return false;
    }
    else if(password.length < 6){
        alert("Password must be at least of 6 characters long");
        return false;
    }
    else if(password != cnfpassword){
        alert("Password Must be Same");
        return false;
    }
    else
    {
        return true;
    }

}