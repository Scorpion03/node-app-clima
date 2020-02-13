
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async (direccion) => {

    try {
        const coords = await lugar.getLugarLatLon(direccion);
        const temp = await clima.getClima(coords.latitud, coords.longitud);
        return `La temperatura de ${coords.lugar} es de ${temp}°C.`;
    }
    catch (e){
        return `No se pudo determinar la temperatura de ${coords.lugar}`
    }
}

getInfo (argv.direccion)
.then(console.log)
.catch(console.log);

