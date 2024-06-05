

korisnici=[];
proizvodi=[];
narudzbine=[];

$(document).ready(function(){
    
    if(localStorage.getItem('korisnici')==null){
        
    }
    else{
        korisnici=JSON.parse(localStorage.getItem('korisnici'));
        
    }

    if(localStorage.getItem('proizvodi')!=null){
        proizvodi=JSON.parse(localStorage.getItem('proizvodi'))
    }

    if(localStorage.getItem('narudzbine')!=null){
        narudzbine=JSON.parse(localStorage.getItem('narudzbine'))
    }
    

});



function registrujse(){

    let unosime=document.getElementById("unos_ime").value;
    let unoslozinka=document.getElementById("unos_lozinka").value;
    console.log(unosime);

    for(let i=0;i<korisnici.length;i++){
        if(korisnici[i].ime==unosime){
            document.getElementById("greska").style.color="red";
            document.getElementById("greska").innerHTML="Korisnik sa takvim imenom vec postoji";
            document.getElementById("unos_ime").value="";
            document.getElementById("unos_lozinka").value="";

            setTimeout(function(){
                document.getElementById("greska").innerHTML=""

            },2000)

            return;
        }
    }

    
    //registruj ga
    let korisnik={
        ime:unosime,
        lozinka:unoslozinka,
        
    }
    korisnici.push(korisnik)
    localStorage.setItem('korisnici',JSON.stringify(korisnici));

    document.getElementById("unos_ime").value="";
    document.getElementById("unos_lozinka").value="";

    document.getElementById("greska").innerHTML="Uspešna registracija!";
    document.getElementById("greska").style.color="green";
    setTimeout(function(){
        document.getElementById("greska").innerHTML=""

    },2000)
    

}