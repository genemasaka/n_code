import {useContext, useState, useEffect} from 'react'
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
    const [EncodeContract, setEncodeContract] = useState(null)
    const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli")
    const contractAdd = '0xe5e1c3Bd8eF8e85652178537Ee6165F149881601'
    let signer;
    
    provider.send("eth_requestAccounts", []).then(() => {
      provider.listAccounts().then((accounts) => {
        signer = provider.getSigner(accounts[0]);
        console.log(signer)
        let Contract = new ethers.Contract(contractAdd, abi, signer)
        
      }).catch(error => {
        console.log(error)
      })
    })
    console.log(EncodeContract)
    const handleSubmit = (e) => {
      e.preventDefault()
      return(password)
    }
    async function n_code() {
      const encodePromise = EncodeContract.encode(password)
      const encoded = await encodePromise
      console.log(encoded)
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
              }}class="input" id="password" />
              <button type="submit" onClick={n_code()} class="btn btn-dark">Encode</button>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <> 
    <Login />
    <Home />
    </>

  );
}

export default App;
