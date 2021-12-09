// laver en eventlistener som loader hele siden og tjekker om brugeren på side findes i local storage
// If tjekker om der er et obejkt, ved navn nykonto i localstorage
// Else relokerer til logind siden.
document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault
    const nykonto = localStorage.getItem("nykonto")
if (nykonto){
    { return }
 } else {window.alert("Du er ikke logget ind"), location.href = "/logind.html"}

})
document.getElementById("tabel").addEventListener("click", async (e) => { 
    e.preventDefault()
    
        
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
                    <td><img src="${element.billede}" style="height:100px;width:100px;" </td>
                </tr>` 
        })
        annoncetabel.innerHTML = actualtable
    })





