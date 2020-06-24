
const lugar = require('./Lugar/Lugar');
const clima = require('./Clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima ',
        demand: true
    }
}).argv;


let getInfo = async (direccion) => {
     
    try {
        let cordenadas = await lugar.getLugarLatiLong(direccion);
        let temperatura = await clima.getClima(cordenadas.lat,cordenadas.lon);

        return `El Clima en ${cordenadas.City} es de ${temperatura.Temperatura}°`;
        
    } catch (error) {
        return `No se pudo determinar el Clima para ${direccion}`
    }

}

    getInfo(argv.direccion)
    .then(( resp ) => { 
        console.log(resp);
     })
     .catch(( e ) => { console.log(e); })


    