

var error = document.getElementById("showError");
            
function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var repass = document.getElementById("repass").value;
    var gender = document.getElementById("gender").value;
    var perfilPhoto = document.getElementById("perfilPhoto").value;
    var moreInfo = document.getElementById("moreInfo").value;

    var emptynes;
    var passMatch;
    
    if (name === "" || email === "" || pass === "" || repass === "" || gender === "") {
        document.getElementById("showError").firstChild.innerHTML = "You can't leave it empty";
    }else{
        document.getElementById("showError").firstChild.innerHTML = "";
        
    }
    
    if (pass !== repass) {
        document.getElementById("passError").innerHTML = "Password dont match";
    }else{
        document.getElementById("passError").innerHTML = "";
        
    }






}


    