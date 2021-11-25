const opretBruger = e => {
    
    let oprettelsesdata = {
        Brugernavn: document.getElementById("Brugernavn").value,
        Adgangskode: document.getElementById("Adgangskode").value
    }
    localStorage.setItem('oprettelsesdata', JSON.stringify(oprettelsesdata))
    console.log(localStorage.getItem('oprettelsesdata'))
    e.preventDefault();
}