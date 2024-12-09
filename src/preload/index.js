import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import {executeForCRUD , executeForCRUD2}  from '../engine/node/frontBack'

let {PythonShell} = require('python-shell')
// Custom APIs for renderer
const api = {
  getWeather: async (place)  => {
    return new Promise((resolutionFunc, rejectionFunc) => {
      console.log('getWeather en Perload')
      var options = {
        scriptPath :  './src/engine/py',
        args : [place]
      }

      let pyshell = new PythonShell('weather.py', options);

      pyshell.on('message', function(message) {
        resolutionFunc(message);
      })
       pyshell.on('stderr', function (stderr) {
        resolutionFunc(stderr);
      });


    });


  },
  logger: async (message)  => {
    return new Promise((resolutionFunc, rejectionFunc) => {
      console.log('logger en Perload')
      var options = {
        scriptPath :  './src/engine/py',
        args : [message]
      }

      let pyshell = new PythonShell('logger.py', options);

      pyshell.on('message', function(message) {
        resolutionFunc(message);
      })
       pyshell.on('stderr', function (stderr) {
        resolutionFunc(stderr);
      });
    });
  },
  showFlies: async (message)  => {
    return new Promise((resolutionFunc, rejectionFunc) => {
      console.log('showFlies en Perload')
      var options = {
        scriptPath :  './src/engine/py',
        args : [message]
      }

      let pyshell = new PythonShell('show_files.py', options);

      pyshell.on('message', function(message) {
        resolutionFunc(message);
      })
       pyshell.on('stderr', function (stderr) {
        resolutionFunc(stderr);
      });
    });
  },
  executeForCRUDLocal: async (message)  => {
    return new Promise((resolutionFunc, rejectionFunc) => {
      console.log('executeForCRUDLocal en Perload')
      var options = {
        scriptPath :  './src/engine/py',
        args : [message]
      }

      let pyshell = new PythonShell('db.py', options);

      pyshell.on('message', function(message) {
        resolutionFunc(message);
      })
       pyshell.on('stderr', function (stderr) {
        resolutionFunc('Error: ' +  stderr )  ;
      });
    });
  },
  executeForCRUD: executeForCRUD,
  executeForCRUD2: executeForCRUD2
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
