import { useState, useEffect } from 'react'

function Versions() {
  const [versions] = useState(window.electron.process.versions)
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    console.log(window.electron.process)
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    // Cleanup del intervalo al desmontar el componente
    return () => clearInterval(interval)
  }, [])

  return (
    <ul className="versions">
      <li className="electron-version">Electron v{versions.electron}</li>
      <li className="chrome-version">Chromium v{versions.chrome}</li>
      <li className="node-version">Node v{versions.node}</li>
      <li className="node-version">{time.toLocaleTimeString()}</li>
      <li className="node-version">{window.electron.process.env.LOGNAME}</li>
    </ul>
  )
}

export default Versions
