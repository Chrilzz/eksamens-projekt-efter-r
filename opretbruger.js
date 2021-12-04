 //
document.getElementById("opret-bruger").addEventListener("click", (e) => { 
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
.then(location.href = "/Logind.html")

 })