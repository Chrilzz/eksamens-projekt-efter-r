document.getElementById("tabel").addEventListener("click", async (e) => { 
    e.preventDefault()
    
        
        let result = await fetch('http://localhost:8080/annoncer', {method: "GET",})
            .then(response => response.json())
            .catch(err => console.log(err))
    
        let parseresult = JSON.parse(result)
        let parseresult2 = JSON.stringify(parseresult)
        let arraystring = []
        arraystring.push(parseresult2)

        var biler = JSON.parse(result).filter(function(entry) {
            return entry.kategori === "Have og Byg"
        })
        
    
        let actualtable = `
        <tr>
            <th>kategori</th>
            <th>pris</th>
            <th>navn</th>
            <th>billede</th>
        </tr>
        `
        
        
        biler.forEach((element) => {
            actualtable +=`
                <tr>
                    <td>${element.kategori}</td>
                    <td>${element.pris}</td>
                    <td>${element.navn}</td>
                    <td><img src="${element.billede}" style="height:100px;width:100px;" </td>
                </tr>` 
        })
        annoncetabel.innerHTML = actualtable
        
        
    })
    
