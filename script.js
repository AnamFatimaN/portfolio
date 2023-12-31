console.log("anam")
function showusername(){
    
    var username = document.getElementById("username").value;
    localStorage.setItem("username",username);
    showPopUp(username);
    }
function showPopUp(username) {
    var popUp = document.getElementById("popup");
    var popUpText = document.getElementById("popuptext");
    popUpText.innerHTML="Hello! " +username+ "  Good to have you on board, We will get back to you shortly";
    popUp.style.display = "block";

    document.getElementById("closebutton").addEventListener("click",function(){
        popUp.style.display = "none";
    })
    }

    const socail = document.getElementById("socail");
    window.onscroll=function scroll() {
        var top=window.scrollY;
        if(top > 1000){
            socail.classList.add("newsocail")
        }
        else{
            socail.classList.remove("newsocail")
        }
    }
