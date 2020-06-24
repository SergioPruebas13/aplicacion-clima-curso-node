const axios = require('axios');

const getLugarLatiLong = async ( direccion ) => {
       
    
    let city = encodeURI(direccion);

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=24198de8a4138a70bf91507792c9e1eb`)

    if (resp.data.cod == '404') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`)
    }

    return{
        City: resp.data.name,
        Conutry: resp.data.sys.country,
        lat: resp.data.coord.lat,
        lon: resp.data.coord.lon
    }
}

module.exports ={
    getLugarLatiLong
}
   