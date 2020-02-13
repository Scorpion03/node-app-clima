const axios = require('axios');

const getLugarLatLon = async(direccion) => {

    const encodeURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: { 'x-rapidapi-key': '1eef352131mshde439ae9f1a28f1p10b69ajsn30238dbede1a' }
    });

    const resp = await instance.get();
    
    if ( resp.data.Results.length === 0 ) {
        throw new Error (`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const lugar = data.name;
    const latitud = data.lat;
    const longitud = data.lon;

    return {
        lugar,
        latitud,
        longitud
    }

}

module.exports = {
    getLugarLatLon
}


