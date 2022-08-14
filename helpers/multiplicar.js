const {Nose} = require("colors")
const fs = require ("fs");
const { argv } = require("process");
const EsIndiferente = async (base =5, listar=false, hasta=10) => {
  
  try {
    
    let salida ="";
    let consola="";
    for(let i=1; i<=hasta; i++){
        salida +=`${base} x ${i} = ${base*i}\n`;
        consola +=`${base}`.cyan+ " x ".magenta +`${i}`.cyan+ " = ".magenta +`${base*i}\n`.yellow;
        
    }
    if(listar){console.log("==================".america)
    console.log(consola);  
  }
  fs.writeFileSync(`./salida/Tabla del ${base}.txt`, salida)
    
    return(`tabla del ${base} creada :D!`.red)
  
  } catch (error) {
    throw(error)
  }
    
}
module.exports = {
    EsIndiferente
} 