const argv = require("yargs")
                .option("b", {
                    alias: 'base',
                    type: "number",
                    demandOption: true,
                    describe: "Es la base de la tabla",
                })
                .option("h",{
                    alias:"hasta",
                    type:"number",
                    default: 10,
                    describe:"Define el número de filas que tendrá la tabla",
                })
                .option( "l",{
                    alias:"listar",
                    type: "boolean",
                    default: false,
                    describe: "Muestra las tablas en consola"})
                .check((argv, options)=>{
                    if(isNaN(argv.b, argv.l)){
                    throw"Sólo se admiten números como base"}
                    return true;
                })
                .argv

module.exports = argv;