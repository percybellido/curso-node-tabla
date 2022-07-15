
const fs=require('fs');
const colors=require('colors');

const crearArchivo=async(base=5,l,h)=>{

try {
if (l){
    console.log('================='.green);
    console.log('  Tabla del:'.green , colors.blue(base));
    console.log('================='.green);
    }

    let salida, consola='';

    for(let i=1; i<=h; i++){
        salida+=`${base}x${i}=${base*i}\n`;
        consola+=`${base}${'x'.green}${i}${'='.green}${base*i}\n`;
    }
    if(l){
        console.log(consola);
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    

    return`tabla-${base}.txt`;
}catch (err){
    throw err;
}

}

module.exports={
    crearArchivo
}


