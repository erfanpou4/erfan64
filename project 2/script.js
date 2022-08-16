var oac = true;

function bars(){
    var header = document.getElementById("header");
    var text = document.getElementsByClassName("text");
    var continer = document.getElementById("continer");

    if (oac == false){
        header.style.width = "60px" ;
        continer.style.width = "92%" ;
        for(let i = 0; i < text.length ; i++ ){
            text[i].style.opacity = "0";
            text[i].style.left = "5px";
            // text[i].style.display = "none"
        }
        bars_icon_close()
        oac = true;
    }
    
    else{
        header.style.width = "150px" ;
        continer.style.width = "85.5%" ;
        for(let i = 0; i < text.length ; i++ ){
            text[i].style.opacity = "1";
            text[i].style.transition = ".5s";
            text[i].style.left = "10px";
            // text[i].style.display = "inline"
        }
        bars_icon_open();
        oac = false;
        header.style.transition = ".5s";
        continer.style.transition = ".5s";
    }
}

function bars_icon_open(){
    var line1 = document.getElementById("line1");
    var line2 = document.getElementById("line2");
    var line3 = document.getElementById("line3");
    var lines = document.getElementsByClassName("lines");

    for(let i = 0 ; i<lines.length ; i++){
        lines[i].style.transition = ".2s";
    }

    line2.style.right = "15px" ;
    line2.style.opacity = "0";

    line1.style.transform ="rotateZ(45deg)";
    line1.style.top = "10px" ;

    line3.style.transform ="rotateZ(-45deg)";
    line3.style.top = "4px" ;
    
}

function bars_icon_close(){
    var line1 = document.getElementById("line1");
    var line2 = document.getElementById("line2");
    var line3 = document.getElementById("line3");
    var lines = document.getElementsByClassName("lines");

    for(let i = 0 ; i<lines.length ; i++){
        lines[i].style.transition = ".5s";
    }

    line2.style.right = "0px" ;
    line2.style.opacity = "1";

    line1.style.transform ="rotateZ(0deg)";
    line1.style.top = "5px" ;

    line3.style.transform ="rotateZ(0deg)";
    line3.style.top = "15px" ;
    
}

function hover_open_home(){
    var home = document.getElementById("home");
    if(oac == false){
        home.style.marginLeft = "15px";
    } else {
        home.style.marginLeft = "0px";
    }
    
}

function hover_close_home(){
    var home = document.getElementById("home");
    home.style.marginLeft = "0px";
}

function hover_open_profile(){
    var profile = document.getElementById("profile");
    if(oac == false){
        profile.style.marginLeft = "15px";
    } else {
        profile.style.marginLeft = "0px";
    }
    
}

function hover_close_profile(){
    var profile = document.getElementById("profile");
    profile.style.marginLeft = "0px";
}

function hover_open_notification(){
    var notification = document.getElementById("notification");
    if(oac == false){
        notification.style.marginLeft = "15px";
    } else {
        notification.style.marginLeft = "0px";
    }
    
}

function hover_close_notification(){
    var notification = document.getElementById("notification");
    notification.style.marginLeft = "0px";
}

function hover_open_chat(){
    var chat = document.getElementById("chat");
    if(oac == false){
        chat.style.marginLeft = "15px";
    } else {
        chat.style.marginLeft = "0px";
    }
    
}

function hover_close_chat(){
    var chat = document.getElementById("chat");
    chat.style.marginLeft = "0px";
}