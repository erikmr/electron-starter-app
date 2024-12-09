// let {PythonShell} = require('python-shell')
const http = require('node:http');

// import {PythonShell} from 'python-shell'

// const fs = require('node:fs')

function getWeather() {
console.log("🚀 ~ get_weather ~ get_weather:", "get_weather")

  // console.log(__dirname )
  // var options = {
  //   scriptPath :  './src/engine/',
  //   args : ['city']
  // }

  // let pyshell = new PythonShell('weather_engine.py', options);
  // console.log("🚀 ~ get_weather ~ pyshell:", pyshell)

  // pyshell.on('message', function(message) {
  //   console.log("🚀 ~ pyshell.on ~ message:", message)
  // })
  // pyshell.on('stderr', function (stderr) {
  //   console.log("🚀 ~ pyshell.on ~ stderr:", stderr)
  // });


  // Opciones de la solicitud
  const optionsHttp = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/posts/1/todos',
    method: 'GET',
  };

  // Realizar la solicitud
  const req = http.request(optionsHttp, (res) => {
      let data = '';

      // Recibir fragmentos de datos
      res.on('data', (chunk) => {
        data += chunk;
      });

      // Procesar la respuesta completa
      res.on('end', () => {
        console.log('Datos recibidos:', JSON.parse(data));
      });
  });


    // Manejar errores
    req.on('error', (error) => {
      console.error('Error en la solicitud:', error.message);
    });

    // Finalizar la solicitud
    req.end();


  }
// This operation is now a lot cheaper than in our previous example
// const get_weather = new getweather()

// module.exports = { get_weather }
