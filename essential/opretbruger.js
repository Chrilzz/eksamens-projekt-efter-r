 //Ved klik oprettes en variabel, ved navn Nykonto. Den indeholder indstastede brugernavn og adgangskode i et objekt
 //Den sendes i body af en FetchPost request. Hvor den er JSON.stringified, så serveren kan læse den.
 //Modtages logind og får klienten en status besked tilbage, videreføres brugeren til logind.html
document.getElementById("opret-bruger").addEventListener("click", (e) => { 
    e.preventDefault() 
    let brugernavnværdi = document.getElementById("bruger-Navn").value
    let adgangskodeværdi = document.getElementById("adgangs-Kode").value
    let nykonto = {
        brugernavn: brugernavnværdi,
        adgangskode: adgangskodeværdi
    }

fetch('http://localhost:8080/konto', {
    method: "POST",
    headers: {
        'content-Type': 'application/json'
    },
    body: JSON.stringify(nykonto)
}).then(response => response.json())
.then(location.href = "/Logind.html")

})