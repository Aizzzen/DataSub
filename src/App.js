import React, {useState} from 'react';
import './App.css';
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Web3 from "web3";

const App = () => {
    const[isConnected, setIsConnected] = useState(false)
    const[currentAccount, setCurrentAccount] = useState(null)

    const logIn = async(provider) => {
        const web3 = new Web3(provider)
        const accounts = await web3.eth.getAccounts()
        if(accounts.length === 0) {
            console.log("Please connect to Metamask")
        } else if(accounts[0] !== currentAccount) {
            setCurrentAccount(accounts[0])
            setIsConnected(true)
        }
    }
    const logOut = () => {
        setIsConnected(false)
    }

    return (
        <div className="App">
            <div className="outer">
                <div className="inner">
                    <main>
                        {!isConnected ? <Login logIn={logIn} logOut={logOut} /> : <Home currentAccount={currentAccount}/> }
                    </main>
                </div>
            </div>
        </div>
      );
}

export default App;
