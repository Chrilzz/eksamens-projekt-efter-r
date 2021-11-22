const express = require ("express");
const router = express.Router();

const brugerModel = require ("./../Models/Brugerobjektmodel")

const brugerdatabase = require("./../Models/Brugerobjektmodel")

router.post("/signup", (req, res) => {
    const bruger = new brugerModel(req.body.brugernavn, req.body.adgangskode);
    brugerdatabase.saveFile(bruger)
    res.status(200).send(true)
});


module.exports = router;