const axios = require('axios');


const getClima = async( lat, lon ) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=08926f004f4e948b3ddd3ce605ef5181&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}
