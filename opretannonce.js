document.getElementById("upload").addEventListener("click", (e) => {
    e.preventDefault()
    let kategorivalg = document.getElementById("kategori").value
    let faktiskpris = document.getElementById("pris").value
    let faktisknavn = document.getElementById("navn").value
    let ordre = {
        kategori: kategorivalg,
        pris: faktiskpris,
        navn: faktisknavn
    }

fetch('http://localhost:8080/ordre', {
    method: "POST",
    headers: {
            'content-Type': 'application/json'
        },
    body: JSON.stringify(ordre)
}).then(response => response.json())

})
