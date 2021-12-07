//Ved brug af express.js opret en server, som lytter på port 8080, og som console loggerbeskeden: “Server lytter på port 8080”
const { json } = require("express");
const express = require("express");
const formData = require('express-form-data')
const app = express();
const fs = require('fs');
const { off } = require("process");

const port = 8080
app.listen(port, () => {
    console.log("server listening on port" +  port);
}); 

app.get("/", (req, res) => {
    res.send("server oppe")
})



//linker mit css funktionalitet til min server så mine designs virker og knapperne virker.
//https://expressjs.com/en/starter/static-files.html
app.use(express.static('./'))

//for at det er muligt at lave input til serveren i tekststreng
app.use(express.json())

//Gemmer bruger JSONFIL så server kan læse den
//_______________________________________

app.post("/konto",(req, res) => { 

    let data = req.body 

      res.status(200).json("modtaget status"); 


fs.writeFileSync('brugerData.json',JSON.stringify(req.body))
  } 
); 

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
    //JSON.parse(fs.readFileSync('brugerData.json'))
    
})

//Slet konto funktion
app.delete("/delete", (req, res) => {
    data = (req.body)
console.log(data)
console.log(typeof data)
let datastring = JSON.stringify(data)
let læsfil = JSON.parse(fs.readFileSync("brugerData.json"))

console.log(læsfil)
console.log(typeof læsfil)


let læsfilstring = JSON.stringify(læsfil)
console.log(læsfilstring)


let subtract = læsfilstring.replace(datastring,"")
console.log(subtract)
console.log(typeof subtract)

console.log(datastring)
console.log(typeof datastring)

fs.writeFileSync("brugerData.json", subtract)


    res.status(200).json("hej")

})


//opdater konto oplysninger
app.post("/konto",(req, res) => { 

    let data = req.body 

      res.status(200).json("modtaget status"); 


fs.writeFileSync('brugerData.json',JSON.stringify(req.body))
})

/*opret ordre
app.post("/ordre",(req, res) => { 

    let ordredata = req.body 
    console.log(typeof ordredata)

      res.status(200).json("modtaget status"); 


fs.writeFileSync('ordredata.json',JSON.stringify(req.body))
  } 
) 
*/

// til upload af billeder til fil /uploads
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
    products.push({kategori, pris, navn, billede})

    console.log(products)

   //
    /*let loadfil = JSON.parse(fs.readFileSync('ordredata.json'))
    console.log(loadfil)*/
    

    fs.writeFileSync('ordredata.json',JSON.stringify(products))


    res.redirect('/opretannonce.html')
}
)

//Se mine annoncer
app.get("/annoncer", (req, res) => {
    stock = req.body
    console.log(stock)
    console.log (typeof stock)
    let læsJSONfil = JSON.parse(fs.readFileSync("ordredata.json"))

    let Stringlæsfil = JSON.stringify(læsJSONfil)
    console.log(læsJSONfil)
    console.log(typeof læsJSONfil)

    console.log(typeof Stringlæsfil)
    console.log(Stringlæsfil)

    res.status(200).json(Stringlæsfil)
    
})




/*

app.delete("/delete", (req, res) => {
    data = (req.body)
console.log(data)
console.log(typeof data)
let datastring = JSON.stringify(data)
let læsfil = JSON.parse(fs.readFileSync("brugerData.json"))

console.log(læsfil)
console.log(typeof læsfil)


let læsfilstring = JSON.stringify(læsfil)
console.log(læsfilstring)


let subtract = læsfilstring.replace(datastring,"")
console.log(subtract)
console.log(typeof subtract)

console.log(datastring)
console.log(typeof datastring)

*/