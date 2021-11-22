const express = require ("express");
const router = express.Router();

const brugerModel = require ("./../Models/Brugerobjektmodel")

const Brugerdatabase = require("../Utils/Brugerdatabase")

router.post("/signup", (req, res) => {
    const bruger = new brugerModel(req.body.brugernavn, req.body.adgangskode);
    Brugerdatabase.saveUser(bruger)
    res.status(200).send(true)
});


module.exports = router;