import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useConnect, useEthereum } from '@particle-network/auth-core-modal'
import Web3 from 'web3'

// const pixelRatio = window.devicePixelRatio;
// const designWidth = 750; // 设计稿中的宽度，单位为 CSS 像素
// const upxWidth = designWidth * pixelRatio; // 计算 UPX 值

function App() {
  const [account, setAccount] = useState('')
  const { connect, connected } = useConnect()
  const { provider } = useEthereum();

  const web3 = new Web3(provider as any);

  if (connected && !account) {
    web3.eth.getAccounts().then(accounts => {
      setAccount(accounts[0])
    })
  }

  const handleConnect = async () => {
    if (!connected) {
      const userInfo = await connect()
      console.log({userInfo})
    }
    const accounts = await web3.eth.getAccounts()
    setAccount(accounts[0])
  }

  const handleSign = async () => {
    const msg = "HELLO WORLD"
    const result = await web3.eth.personal.sign(msg, account, '')
    alert(result)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* <div style={{width: `${upxWidth}px`, height: `${upxWidth}px`, background: 'red'}}></div> */}
      <h1>Vite + React</h1>
      <div className="card">
        {
          connected
          ? <button onClick={handleSign}> SIGN </button>
          : <button onClick={handleConnect}> CONNECT </button>
        }
        <p> {account} </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
