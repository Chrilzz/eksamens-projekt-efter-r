// følger Sørens eksempel, hvor man skaber egen database og gemmer data fra brugeren i Json fil,
// man kan også benytte sig af plugins som mongoose og mongo DB, hvor man ikke behøver denne metode
/* Jeg benytter mig af nodes FS modul
const fs = require("fs")

const absolute_path = __dirname + ("./")
const brugerDatabaseInput = "/brugerDatabaseInput.json"

class Database {
    constructor() {
        this.Brugere = this.openFile(brugerDatabaseInput);
    }
    //gemme filer åbne filer
    saveFile(filename, contentString) {
        fs.writeFileSync(absolute_path + brugerDatabaseInput, this.Brugere);
    }
    openFile() {
        const file = fs.readFileSync(absolute_path + brugerDatabaseInput)
        return JSON.parse(file)
    }
    //bruger .push, da vi har med liste/array at gøre i brugerdatabaseinput.json filen
    saveUser(bruger) {
        this.Brugere.push(bruger);
        this.saveFile(brugerDatabaseInput, JSON.stringify(this.Brugere));
    }
}

module.exports = new Database();

*/
