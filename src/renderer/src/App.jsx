import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState('')
  const [data2, setData2] = useState('')
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')
  const ipcHandleShellPython = async () => {
    window.electron.ipcRenderer.send('python-shell')
    const place = 'Madrid'
    const hResult = await window.api.getWeather(place)
    console.log('🚀 ~ ipcHandleShellPython ~ En React:', hResult)
  }

  const electronAPILogger = async () => {
    let message = 'Hola desde React'
    const hResult = await window.api.logger(message)
    console.log('🚀 ~ ipcHandleShellPython ~ En React ~ logger:', hResult)
  }

  const electronAPIShowFiles = async () => {
    let message = 'Hola desde React'
    const hResult = await window.api.showFlies(message)
    console.log('🚀 ~ ipcHandleShellPython ~ En React ~ showFlies:', hResult)
  }
  const electronExecuteForCRUDLocal = async () => {
    let message = 'Hola desde React'
    const hResult = await window.api.executeForCRUDLocal(message)
    console.log('🚀 ~ ipcHandleShellPython ~ En React ~ electronExecuteForCRUDLocal:', hResult)
  }
  const electronExecuteForCRUD = async () => {
    const hResult = await window.api.executeForCRUD()
    console.log('🚀 ~ ipcHandleShellPython ~ En React ~ executeForCRUD:', hResult)
  }

  const electronExecuteForCRUD2 = async () => {
    const hResult = await window.api.executeForCRUD2()
    console.log('🚀 ~ ipcHandleShellPython ~ En React ~ executeForCRUD2:', hResult)
  }

  useEffect(() => {
    setData('Hola desde el renderer')
    setData2('Sin Titulo')
  }, [])

  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      <div className="text">
        Build an Electron app with <span className="react">React</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool <br />
        {data}
      </p>
      <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
        </div>
      </div>

      <div className="actions">
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandleShellPython}>
            Python: Weather
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={electronAPILogger}>
            Python: Logger
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={electronAPIShowFiles}>
            Python: Show file
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={electronExecuteForCRUDLocal}>
            Python: executeForCRUD2
          </a>
        </div>
      </div>

      <div className="actions">
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={electronExecuteForCRUD}>
            Node: executeForCRUD POST
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={electronExecuteForCRUD2}>
            Node: executeForCRUD GET <br />
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer">
            {data2}
          </a>
        </div>
      </div>
      <Versions></Versions>
    </>
  )
}

export default App
