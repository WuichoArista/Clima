
//Ejercicio 1---------------------------------------------------------



const consultar = async () => {
    let ciudad = entrada.value
    console.log(ciudad)
    //Uso de operador Ternario
    let URL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ ciudad === '' ? ciudad = 'Mexico' : ciudad}&appid=616629f9acdc3b22b8b09553e632e5da`)
    let ApiConver = await URL.json()
    let clima = ApiConver.weather[0].description
    let temperaturaKelvin = ApiConver.main.temp
    let temperaturaCelcius = temperaturaKelvin - 273.15
    console.log('Clima: ',clima)
    console.log(temperaturaKelvin)
    console.log(temperaturaCelcius)
    renderizar( ciudad , clima , temperaturaCelcius)
}

function renderizar ( ciudad , clima , temperatura) {
    let lugar = document.querySelector('.lugar')
    lugar.innerHTML = `
        <img src="./assets/img/pngwing.com.png" alt="">
        <h1>${ciudad}</h1>
        <h2>Clima: ${clima}<h2>
        <h3>Temperatura: ${temperatura.toFixed()} °C</h3>
    `
}

let boton = document.getElementById('boton');
let entrada = document.getElementById('ciudad')
boton.addEventListener( 'click' , consultar );


  consultar()