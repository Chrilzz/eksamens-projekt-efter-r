// Ved brug af express.js opret en server, som lytter på port 8080, og som console loggerbeskeden: “Server lytter på port 8080”
const express = require("express");
const app = express();

const port = 8080
app.listen(port, () => {
    console.log("server listening on port" +  port);
}); 

// Linker HTML til min server
//https://www.section.io/engineering-education/rendering-html-pages-as-a-http-server-response-using-node-js/?fbclid=IwAR2q2uimO4DI742PGdnqcSGby40PnYgrVnHri_EHpB2lIzKNAylKPgwVhss
app.get("/home.html", (req, res) => {
    res.sendFile(__dirname + "/home.html")
})
//linker mit css funktionalitet til min server så mine designs virker og knapperne virker.
//https://expressjs.com/en/starter/static-files.html
app.use(express.static(__dirname));


