document.addEventListener("DOMContentLoaded", () => {
    const nykonto = localStorage.getItem("nykonto")
if (nykonto){
    location.href = "/home.html"
}

document.getElementById("Logind").addEventListener("click", (e) => { 
    e.preventDefault() 
    let brugernavnværdi = document.getElementById("bruger-Navn").value
    let adgangskodeværdi = document.getElementById("adgangs-Kode").value
    
    let nykonto = {
        brugernavn: brugernavnværdi,
        adgangskode: adgangskodeværdi
    
    }


fetch('http://localhost:8080/login', {
    method: "POST",
    headers: {
        'content-Type': 'application/json'
    },
    body: JSON.stringify(nykonto)
    // https://developer.mozilla.org/en-US/docs/Web/API/Response/json
}).then(response => response.json().then(svar => {
    window.alert(svar)
    if (svar === "Log ind succesfuld"){
        localStorage.setItem("nykonto", JSON.stringify(nykonto))
        location.href = "/home.html"
    }
})
)}
)
})