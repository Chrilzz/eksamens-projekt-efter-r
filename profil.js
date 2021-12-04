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
/*
const nykonto = localStorage.getItem("nykonto")
if (nykonto){
    location.href = "/home.html"
*/



 document.getElementById("slet").addEventListener("click", (e) => {
    e.preventDefault() 
    let sletkonto = JSON.parse(localStorage.getItem("nykonto"))
    console.log(sletkonto)

    let lars = JSON.stringify(sletkonto)
    console.log(lars)
    
    fetch('http://localhost:8080/delete', {
    method: "DELETE",
    headers: {
        'content-Type': 'application/json'
    },
    body: lars
}).then(response => response.json())
.then(localStorage.clear())
.then (location.href = "/opretbruger.html")


 })

 document.getElementById("Logud").addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.removeItem("nykonto")
    return location.href = "/Logind.html"
})
 