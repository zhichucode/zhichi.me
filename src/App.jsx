import { useState } from 'react'
import reactLogo from './assets/react.svg'
import openaiLogo from './assets/openai.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo vite" alt="React logo" />
        </a>
        <a href="https://openai.com" target="_blank">
          <img src={openaiLogo} className="logo vite" alt="OpenAI logo" />
        </a>
      </div>
      <h1>此项目已停用</h1>
      <div className="card">
        <p>
          由于 API 免费额度有限，本项目暂时停用 <br />
          微信：yc_zzh
        </p>
      </div>
      <p className="read-the-docs">
        Powered by <a href='https://www.openai.com'>OpenAI</a>, <a href="https://react.dev">React</a> and <a href="https://vercel.com">Vercel</a>
      </p>
    </div>
  )
}

export default App
