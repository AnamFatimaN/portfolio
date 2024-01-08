console.log("anam")
let id=(id)=>document.getElementById(id);
let classes=(classes)=>document.getElementsByClassName(classes);
let username1=id("username");
let email=id("email");
let error=classes("error");
let button1=id("button1");
button1.addEventListener("click",(e)=>{
    e.preventDefault();
    engine(username1, 0, "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    e.reset()
})

let engine=(id,serial,message)=>{
    if (id.value.trim() === "") {
        error[serial].innerHTML = message;
      } 
      
      else {
        showusername()
      }
    }

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
