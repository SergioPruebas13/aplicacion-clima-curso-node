const axios = require('axios');


const getClima = async ( lat, lon ) => {
 
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=24198de8a4138a70bf91507792c9e1eb`)

    // console.log(resp.data.main.temp);

    return{
        Temperatura: resp.data.main.temp
    }

}

module.exports ={
    getClima
}