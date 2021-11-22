// Ved brug af express.js opret en server, som lytter på port 8080, og som console loggerbeskeden: “Server lytter på port 8080”
const express = require("express");
const app = express();

const port = 8080
app.listen(port, () => {
    console.log("server listening on port" +  port);
}); 

//linker mit css funktionalitet til min server så mine designs virker og knapperne virker.
//https://expressjs.com/en/starter/static-files.html
app.use(express.static("./frontend"));

//for at det er muligt at lave input til serveren i tekststreng
app.use(express.json)
