var light = true ; 

function darkmode() {
    const options = document.getElementsByClassName('option');
    const moon = document.getElementsByClassName('fa-moon');
    const sun = document.getElementsByClassName('fa-sun');
    var btn_dm = document.getElementById('btn-dm');
    var continer_nav = document.getElementById('continer-nav');


    if (light==true) {
        continer_nav.style.backgroundColor ="#353535" ;
        btn_dm.style.left ="30px";
    

        for (let i = 0 ; i<options.length;i++){
            options[i].style.color = "white" ;
        }

        sun[0].style.display = "none";
        moon[0].style.visibility="visible";

        btn_dm.style.transition=".2s";
        continer_nav.style.transition=".2s";

        light = false;

    }else {

        continer_nav.style.backgroundColor ="white" ;
        btn_dm.style.left ="0px";

        sun[0].style.display = "block";
        moon[0].style.visibility="hidden";


        for (let i = 0 ; i<options.length;i++){
            options[i].style.color = "black" ;
        }

        light = true
    }
}