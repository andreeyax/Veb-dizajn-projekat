
let korisnici=[]

$(document).ready(function(){
    //localStorage.clear()
    if(localStorage.getItem('korisnici')==null){
        
    }
    else{
        korisnici=JSON.parse(localStorage.getItem('korisnici'));
    }


});


function prijava(){

    let unosime=document.getElementById("unos_ime").value;
    let unoslozinka=document.getElementById("unos_lozinka").value;


    for(let i=0;i<korisnici.length;i++){
        if(korisnici[i].ime==unosime && korisnici[i].lozinka==unoslozinka){

            localStorage.setItem('trenutnikorisnik', unosime);
            window.location.href="index_ulogovan.html";
            return;
        }

    }
    

    document.getElementById("greska").innerHTML="Pogrešno uneseno korisničko ime ili lozinka";
    setTimeout(function(){
        document.getElementById("greska").innerHTML=""
        document.getElementById("unos_ime").value="";
        document.getElementById("unos_lozinka").value="";
    },2000)
    

}


function prijava_en(){

    let unosime=document.getElementById("unos_ime").value;
    let unoslozinka=document.getElementById("unos_lozinka").value;


    for(let i=0;i<korisnici.length;i++){
        if(korisnici[i].ime==unosime && korisnici[i].lozinka==unoslozinka){

            localStorage.setItem('trenutnikorisnik', unosime);
            window.location.href="index_en_ulogovan.html";
            return;
        }

    }
    

    document.getElementById("greska").innerHTML="Incorrect username or password entered";
    setTimeout(function(){
        document.getElementById("greska").innerHTML=""
        document.getElementById("unos_ime").value="";
        document.getElementById("unos_lozinka").value="";
    },2000)
    

}

