//Ved brug af express.js opret en server, som lytter på port 8080, og som console loggerbeskeden: “Server lytter på port 8080”
const express = require("express");
const app = express();
const fs = require('fs')

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

//Gemmer bruger til JSONFIL
//_______________________________________

app.post("/konto",(req, res) => { 

    let data = req.body 

      res.status(200).json("modtaget status"); 
console.log(data)
console.log(typeof data)

fs.writeFileSync('brugerData.json',JSON.stringify(req.body))
  } 
); 

let brugerdatasa = JSON.parse(fs.readFileSync('brugerData.json'))
