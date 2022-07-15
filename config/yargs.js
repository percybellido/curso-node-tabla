const argv=require('yargs')
    .option('b',{
        alias:'base',
        type:'number',
        demandOption:true,
        describe: 'Es la base de la tabla de multiplicar'
    })

    .check((argv,options) =>{
        if(isNaN(argv.b)){
            throw 'la base tiene que ser un numero'
        }
        return true;
    })

    .option('l',{
        alias:'listar',
        type:'boolean',
        demandOption:true,
        describe: 'Muestra la tabla en consola'
    })

    .option('h',{
        alias:'limite',
        type:'number',
        demandOption:true,
        describe: 'Determina hasta donde va la tabla'
    })
    .argv;

module.exports=argv;