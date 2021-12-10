//Ved brug af express.js opret en server, som lytter på port 8080, og som console loggerbeskeden: “Server lytter på port 8080”
const exp = require("constants");
const express = require("express");
const formData = require('express-form-data')
const app = express();
const fs = require('fs');

const port = 8080

module.exports = app.listen(port, () => {
  console.log("server listening on port" +  port);
}); 

app.get("/", (req, res) => {
    res.send("server oppe")
})




//linker mit css funktionalitet til min server så mine designs virker og knapperne virker.
//https://expressjs.com/en/starter/static-files.html
app.use(express.static('./'))
app.use('/', express.static('kategorier'))
app.use('/', express.static('essential'))


//for at det er muligt at lave input til serveren i tekststreng
app.use(express.json())

//Gemmer bruger i JSONFIL så server kan læse den
//_______________________________________
app.post("/konto",(req, res) => { 
  

      res.status(200).json("modtaget status"); 
      fs.writeFileSync('brugerData.json',JSON.stringify(req.body))
}); 

//Login funktion
app.post("/login", (req, res) => {

    let brugerdatasa = req.body
    let data = fs.readFileSync("brugerData.json")
    let db = JSON.parse(data)

    if (brugerdatasa.brugernavn === db.brugernavn) {
        if (brugerdatasa.adgangskode === db.adgangskode) {
        res.status(200).json("Log ind succesfuld")} 
        else {res.status(400).json("Forkert")}
    } 
    else {res.status(400).json("Forkert")}
    
})

//Slet konto funktion
app.delete("/delete", (req, res) => {
    data = (req.body)

let datastring = JSON.stringify(data)
let læsfil = JSON.parse(fs.readFileSync("brugerData.json"))

let læsfilstring = JSON.stringify(læsfil)

let subtract = læsfilstring.replace(datastring,"")

fs.writeFileSync("brugerData.json", subtract)

    res.status(200).json("Slettet")
})




// Oprettelse af annonce og upload af billeder til fil /uploads
// fulgte edris video https://www.youtube.com/watch?v=7aTGmAo2EnM
app.use('/uploads', express.static('uploads'))

const options = {
    uploadDir: './uploads'
}
app.use(formData.parse(options))

const products = []

app.post('/ordre',(req, res) => {
    let { kategori, pris, navn } = req.body
    let billede = req.files.billede.path.replace('\\', '/')
    products.push({billede, kategori, pris, navn})
    
    fs.writeFileSync('ordredata.json',JSON.stringify(products))

    res.redirect('/opretannonce.html')
})

//Se mine annoncer
// metode fra Edris video
// https://www.youtube.com/watch?v=SoyJmZ7KexQ&t=4s
app.get("/annoncer", (req, res) => {
    let læsJSONfil = JSON.parse(fs.readFileSync("ordredata.json"))

    let Stringlæsfil = JSON.stringify(læsJSONfil)

    res.status(200).json(Stringlæsfil)

})



//rediger annonce
//metode fra thomas panopto videor, 5. array fs 
app.put("/edit", (req, res) => {
    let varerkatalog = JSON.parse(fs.readFileSync('ordredata.json'))

    for (let i = 0; i < varerkatalog.length; i++) {
        if(varerkatalog[i].billede == req.body.billede){
         varerkatalog[i].kategori = req.body.kategori
         varerkatalog[i].pris = req.body.pris
         varerkatalog[i].navn = req.body.navn
         
    }}
    fs.writeFileSync("ordredata.json", JSON.stringify(varerkatalog))
    res.status(200).json("hej")
    })
    
//slet annonce
app.post("/slet", (req, res) => {

  let varerkatalog = JSON.parse(fs.readFileSync('ordredata.json'))

    for (let i = 0; i < varerkatalog.length; i++) {
        if(varerkatalog[i].billede == req.body.billede){
         varerkatalog.splice(i,3)
         
    }}
    fs.writeFileSync("ordredata.json", JSON.stringify(varerkatalog))
    console.log(varerkatalog)
    res.status(200).json()
    
    })




