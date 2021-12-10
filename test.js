let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("./server.js");
let fs = require("fs");
const { response } = require("express");

//Assertion Style
//Bruger kun should assertions
chai.should();

chai.use(chaiHttp)

describe("put requestcheck", () => {
    let data = {
        kategori: "biler",
        pris: "1000000",
        navn: "testwolkswagen",
        billede: "uploads/I8ozDk_RVJFXYytg_twU3_c_.png"

    }
    it("Check if ordredata.json array is updated", (done) => {
        chai.request(server)
            .put("/edit")
            .send(data)
            .end((err, response) => {
                response.should.have.status(200)
                let read = JSON.parse(fs.readFileSync("ordredata.json"))

                read[0].should.have.property("kategori").eq("biler")
                read[0].should.have.property("pris").eq("1000000")
                read[0].should.have.property("navn").eq("testwolkswagen")

            }
            )
            done() 
        }
    )}


)