document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault
    const nykonto = localStorage.getItem("nykonto")
if (nykonto){
    { return }
 } else {window.alert("Du er ikke logget ind"), location.href = "/logind.html"}

})

document.addEventListener("DOMContentLoaded", function() {


document.getElementById("tabel").addEventListener("click", async () => { 
    let annoncetabel = document.getElementById('annoncetabel')
    
    let result = await fetch('http://localhost:8080/annoncer', {method: "GET",})
        .then(response => response.json())
        .catch(err => console.log(err))

    let parseresult = JSON.parse(result)

    let actualtable = `
    <tr>
        <th>kategori</th>
        <th>pris</th>
        <th>navn</th>
        <th>billede</th>
    </tr>
    `
    
    
    parseresult.forEach((element) => {
        actualtable +=`
            <tr>
                <td>${element.kategori}</td>
                <td>${element.pris}</td>
                <td>${element.navn}</td>
                <td>${element.billede} </td>
            </tr>` 
    })
    annoncetabel.innerHTML = actualtable
})

// benytter mig af thomas panopto videor, 5. array fs 
//https://cbs.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=10d72724-da47-4141-9643-adeb0118f9c4
let opdatervarer = document.getElementById("opdatervarer")

opdatervarer.addEventListener("click", (e) => {
    e.preventDefault()

    let kategoriværdi = document.getElementById("kategori")
    let prisværdi = document.getElementById("prisx")
    let navnværdi = document.getElementById("navnx")
    let billedeværdi = document.getElementById("billedex")
    
    let opdateretvarer = {
        kategori: kategoriværdi.value,
        pris: prisværdi.value,
        navn: navnværdi.value,
        billede: billedeværdi.value
    
    }

fetch("http://localhost:8080/edit", {
    method: "PUT",
    headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(opdateretvarer)
        }).then(response => response.json())

})


})




//Sletning af varer
let sletvarer = document.getElementById("sletvarer")

    sletvarer.addEventListener("click", (e) => {
        e.preventDefault();

        let unikbillede = document.getElementById('sletbillede').value;
        let unikbillede2 = JSON.stringify(unikbillede)
        console.log(unikbillede)
        console.log(typeof unikbillede)
        console.log(typeof unikbillede2)
        console.log(unikbillede2)

        fetch('http://localhost:8080/slet', {
        method: "POST",
        headers: {
        'content-Type': 'application/json'
        },
        body: unikbillede2
        }).then(response => response.json())
})

/*
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
 
*/