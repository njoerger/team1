//Quick and dirty password validator. In the works.
function validate_pwd(  
    
    var errorMsg = "";
    
    if ((document.getElementById("username").value != "test") ||
        (document.getElementById("password").value != "test")){
            errorMsg += "Bad password and/or username match"
         }
    
    document.getElementById("errorMsg").innerHTML   += errorMsg;
}

validate_pwd();