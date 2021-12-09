document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault
    const nykonto = localStorage.getItem("nykonto")
if (nykonto){
    { return }
 } else {window.alert("Du er ikke logget ind"), location.href = "/logind.html"}
})


document.getElementById("opdaterprofil").addEventListener("click", (e) => { 
    e.preventDefault() 
    let brugernavnværdi = document.getElementById("bruger-Navn").value
    let adgangskodeværdi = document.getElementById("adgangs-Kode").value
    let nykonto = {
        brugernavn: brugernavnværdi,
        adgangskode: adgangskodeværdi
    }
console.log(nykonto)

fetch('http://localhost:8080/konto', {
    method: "POST",
    headers: {
        'content-Type': 'application/json'
    },
    body: JSON.stringify(nykonto)
}).then(response => response.json())
.then (window.alert("Oplysninger opdateret"))
.then (localStorage.setItem("nykonto", JSON.stringify(nykonto))
)
 })

// slet bruger
//Når der trykkes på slet knappen. oprettes en variabel "sletkonto", som går ind og henter "nykonto" fra localstorage og det til et objekt.
//Derefter formattere vi dataen "nykonto" til string vha JSON.stringify i variablen "lars"
//Der laves et Delete fetch request, hvor lars sendes i bodyen.
//Hvis der kommer respons fra serveren, sletter vi Stringen nykonto fra localstorage, og man bliver redirected til opretbruger.html
 document.getElementById("slet").addEventListener("click", (e) => {
    e.preventDefault() 
    let sletkonto = JSON.parse(localStorage.getItem("nykonto"))

    let lars = JSON.stringify(sletkonto)
    
    fetch('http://localhost:8080/delete', {
    method: "DELETE",
    headers: {
        'content-Type': 'application/json'
    },
    body: lars
}).then(response => response.json())
.then(localStorage.removeItem("nykonto"))
.then (location.href = "/opretbruger.html")
 })

 document.getElementById("Logud").addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.removeItem("nykonto")
    return location.href = "/Logind.html"
})
 
