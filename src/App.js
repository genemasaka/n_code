import { React, useContext, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { ethers } from 'ethers'
import abi from './contract/Encoder.json'



function App() {
  function Home() {
    return (
      <>
        <div class="main">
          <div class="card">
            <div class="card-header">
              <h2>Welcome!</h2>
            </div>
            <div class="card-body">
              <h4>You just encoded your password!</h4>
              <p>This is the sha3 hash of your password</p>
              <p>{}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
  function Login() {
    const [password, setPassowrd] = useState('')
    let EncodeContract;
    const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli")

    async function handleEncode() {
      const contractAdd = '0xe5e1c3Bd8eF8e85652178537Ee6165F149881601'
      try {
        await provider.send("eth_requestAccounts", []);
        const accounts = await provider.listAccounts()
        let signer = provider.getSigner(accounts[0])
        EncodeContract = new ethers.Contract(contractAdd, abi, signer)

        async function n_code(EncodeContract) {
          const encodePromise = EncodeContract.encode(password)
          const encoded = await encodePromise
          console.log(encoded)
        }
        await n_code(EncodeContract)
      }
      catch (error) {
                console.log(error)

      }
      }
    }


    const handleSubmit = (e) => {
      e.preventDefault()
      return (password)
    }



    return (
      <>
        <div class="main">
          <div class="card">
            <div class="card-header">
              <h2>Enter password to encode</h2>
            </div>
            <div class="card-body">
              <form onSubmit={handleSubmit}>
                <p>Enter your password</p>
                <input type="password" value={password} onChange={(e) => {
                  setPassowrd(e.target.value)
                }} class="input" id="password" />
                <button type="submit" onClick={handleEncode} class="btn btn-dark">Encode</button>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <div class="body">
        <Login />
        <Home />
      </div>
    </>

  );

}

export default App;
