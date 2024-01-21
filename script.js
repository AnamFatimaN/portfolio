// form validation and popup window alert
let id=(id)=>document.getElementById(id);
let classes=(classes)=>document.getElementsByClassName(classes);
let username1=id("username");
let email=id("email");
let error=classes("error");
let button1=id("button1");
button1.addEventListener("click",(e)=>{
    e.preventDefault();
    engine(username1, 0, "Please enter your name");
    engine(email, 1, "Please enter your Email");

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
    };
    // socail media scroll and section active class
    
    const socail = document.getElementById("socail");
    let sections=document.querySelectorAll('section');
    let navlinks=document.querySelectorAll('header nav a')
    window.onscroll=()=> {
        var top=window.scrollY;
        if(top > 1000){
            socail.classList.add("newsocail")
        }
        else{
            socail.classList.remove("newsocail")
        }
        sections.forEach(sec=>{
            let top=window.scrollY;
            let offset=sec.offsetTop-150;
            let height=sec.offsetHeight;
            let id=sec.getAttribute('id');
            if(top>offset && top<offset+height){
                navlinks.forEach(link=>{
                    link.classList.remove('active');
                    document.querySelector('header nav a[href*=' +id +']').classList.add('active') 
                        });
                    }})
    }
    