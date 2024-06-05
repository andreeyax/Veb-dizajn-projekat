$(document).ready(function(){
    //document.getElementById("ime").innerHTML=localStorage.getItem("trenutnikorisnik");
    //UCITATI SVA JELA

    proizvodi=[];
    if(localStorage.getItem('proizvodi')!=null){
        proizvodi=JSON.parse(localStorage.getItem('proizvodi'))
    }

    let c=0;
    for(let i =0;i<proizvodi.length;i++){
        if(proizvodi[i].korisnik==localStorage.getItem('trenutnikorisnik')){
            c++;
            dodajRed(c,proizvodi[i].imejela,proizvodi[i].velicina,proizvodi[i].kolicina);
        }
        
    }

    dodajDugme();


    nar=[];
    if(localStorage.getItem('narudzbine')!=null){
        nar=JSON.parse(localStorage.getItem('narudzbine'))
    }

    let c1=0;
    for(let i = 0;i<nar.length;i++){
        if(nar[i].korisnik==localStorage.getItem('trenutnikorisnik')){
            c1++;
            dodajRedN(c1,nar[i].njela,nar[i].velicina,nar[i].kolicina);
        }
        
    }


    

});


function dodajDugme(){
    let table = document.getElementById("korpa");
    let row = table.insertRow(); 
    let b=row.insertCell(0);
    button=document.createElement("button");
    button.innerHTML="Naruci";

    button.addEventListener("click", function() {
        // Ovde možete dodati kod koji treba da se izvrši kada se klikne na dugme
        

        nar=[];
        if(localStorage.getItem('narudzbine')!=null){
            nar=JSON.parse(localStorage.getItem('narudzbine'))
        }

        jela='';
        kolicine='';
        velicine='';
        for(let i =0;i<proizvodi.length;i++){
            if(proizvodi[i].korisnik==localStorage.getItem('trenutnikorisnik')){
                jela=jela+' '+proizvodi[i].imejela;
                vel='';
                if(proizvodi[i].velicina=='30'){
                    vel='mala';
                }
                else{
                    vel='velika';
                }
                kolicine=kolicine+' '+proizvodi[i].kolicina;
                velicine=velicine+' '+vel;

                
            }
            
        }

        k=localStorage.getItem('trenutnikorisnik');
        n={
            korisnik:k,
            njela:jela,
            velicina:velicine,
            kolicina:kolicine
            
        }

        console.log(n);
        nar.push(n);

        localStorage.setItem('narudzbine',JSON.stringify(nar));


        /*
        niz=[]
        for(let i =0;i<proizvodi.length;i++){
            if(proizvodi[i].korisnik==localStorage.getItem('trenutnikorisnik')){
                niz.push(i);
            }
            
        }

        for(let i =0;i<niz.length+1;i++){
            proizvodi.splice(niz[i]);
            
        }
        */
       cnt=0;
        for(let i=0;i<proizvodi.length;i++){
            if(proizvodi[i].korisnik==localStorage.getItem('trenutnikorisnik')){
                cnt++;
            }
        }

        for(let i=0;i<proizvodi.length;i++){
            for(let j=i+1;j<proizvodi.length;j++){
                if(proizvodi[i].korisnik==localStorage.getItem('trenutnikorisnik') && proizvodi[j].korisnik!=localStorage.getItem('trenutnikorisnik')){
                    temp=proizvodi[i];
                    proizvodi[i]=proizvodi[j];
                    proizvodi[j]=temp;
                }
            }
        }


        for(let i=0;i<cnt;i++){
            proizvodi.pop();
        }

        localStorage.setItem('proizvodi',JSON.stringify(proizvodi));
        window.location.reload();
        
    });


    b.colspan="4";
    b.appendChild(button)
    


}

function dodajRed(id,jelo,velicina,kolicina) {
   
    let table = document.getElementById("korpa");
    let row = table.insertRow(); 
  
    let i = row.insertCell(0); 
    let j = row.insertCell(1); 
    let v = row.insertCell(2); 
    let k = row.insertCell(3);
  
    i.innerHTML=id;
    j.innerHTML=jelo;
    v.innerHTML=velicina;
    k.innerHTML=kolicina;
    


}

function dodajRedN(id,jelo,velicina,kolicina){

    let table = document.getElementById("narudzbine");
    let row = table.insertRow(); 
  
    let i = row.insertCell(0); 
    let j = row.insertCell(1); 
    let v = row.insertCell(2); 
    let k = row.insertCell(3);
  
    i.innerHTML=id;
    j.innerHTML=jelo;
    v.innerHTML=velicina;
    k.innerHTML=kolicina;
    


}