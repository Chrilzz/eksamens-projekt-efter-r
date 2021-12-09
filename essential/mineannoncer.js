// Koncept er fra Edris video, fra godkendelsesopgave 3
// Der sendes en get request
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
                <td><img src="${element.billede}" style="height:50px;width:50px;" </td>
            </tr>` 
    })
    annoncetabel.innerHTML = actualtable
})

