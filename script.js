let pizzerie = [
    { id: 1, nome: "Pizzeria da Otello", indirizzo: "Via tal dei tali 1", città: "Firenze", 
      recensioni: [ {nome: "Mario", descrizione: "Pizza buonissima"},  
                            {nome: "Sara", descrizione: "Pizza buona, servizio veloce"},
    
                            {nome: "Laura", descrizione: "Purtroppo non fanno pizza senza glutine"}]
    
      },
    { id: 2, nome: "La Gioconda", indirizzo: "Viale Redi 3", città: "Firenze", 
      recensioni: [ {nome: "Giorgio", descrizione: "Pizza buona, ma servizio lento"},  
                            {nome: "Franco", descrizione: "Pizza bassa, ma non mi piace"},
    
                            {nome: "Laura", descrizione: "Fanno anche pizza senza glutine"}]
    
      },
    { id: 3, nome: "Piccolo Cesare", indirizzo: "Via ponte alle Mosse 23", città: "Firenze", 
      recensioni: [ {nome: "Claudio", descrizione: "Pizza squisita, vera Napoli"},  
                            {nome: "Franco", descrizione: "Pizza buona prezzi onesti"},
    
                            {nome: "Paolo", descrizione: "Ottima pizza, ci tornerò sicuramente"}]
    
      }
    ]



let statoBottone = [false, false, false]
let bottone = [document.getElementById("bottone1"), document.getElementById("bottone2"), document.getElementById("bottone3")]
let tabella = [document.getElementById("tabella1"), document.getElementById("tabella2"), document.getElementById("tabella3")]

function mostraRecensioni(pos) {
    
    if (statoBottone[pos] == true) {
        nascondiTabella(pos)
        return
    }
        
    for (let i = 0; i < 3; i++) {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        td1.innerHTML = pizzerie[pos].recensioni[i].nome
        let td2 = document.createElement("td")
        td2.innerHTML = pizzerie[pos].recensioni[i].descrizione
        tr.appendChild(td1)
        tr.appendChild(td2)
        
        tabella[pos].appendChild(tr)
        tabella[pos].hidden = false

    }

    cambiaBottone(pos)

}


function cambiaBottone(pos) {

    
    if(statoBottone[pos] == false)
        bottone[pos].innerHTML = "Nascondi recensioni"
    else
        bottone[pos].innerHTML = "Mostra recensioni"

    statoBottone[pos] = !statoBottone[pos]
    
}

function nascondiTabella(pos) {

    
    for (let i = 0; i < 3; i++){
        tabella[pos].lastChild.remove()
    }
    tabella[pos].hidden = true
    
    cambiaBottone(pos)
}
