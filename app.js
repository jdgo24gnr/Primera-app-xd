
const {Nose} = require("colors")
const { EsIndiferente} = require("./helpers/multiplicar")
const argv = require("./settings/yargs");

console.clear()




EsIndiferente(argv.b,argv.l,argv.h)
    .then(NoEsIndiferente=> console.log(NoEsIndiferente,"Yaaay!".green))
    .catch(err=>console.log(err));