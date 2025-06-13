const inputNome=document.getElementById("nome");
const inputCognome=document.getElementById("cognome");
const inputRichiesta=document.getElementById("richiesta")
const bottoneInvio=document.getElementById("bottoneInvio")

bottoneInvio.addEventListener('click', ()=>{
    await invioPreventivo();  
});

async function invioDati(){
    datiDaInviare={
        nome: inputNome.value,
        cognome: inputCognome.value,
        
    }

    try{
        const response = await fetch('http://localhost:5000/salvaPreventivo',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datiDaInviare)

    });
    }
}

post("SalvaPreventivo")