import React, {useState} from 'react';
import './Login.css';
import {Button, Card} from "antd";

const Login = ({logIn, logOut}) => {
    const[isConnecting, setIsConnecting] = useState(false)

    const detectProvider = () => {
        let provider
        if(window.ethereum) {
            provider = window.ethereum
        } else if(window.web3) {
            provider = window.web3.currentProvider
        } else {
            window.alert("No ETH browser detected. Check out Metamask")
        }
        return provider
    }

    const logInHandler = async() => {
        const provider = detectProvider()
        if(provider) {
            if(provider !== window.ethereum) {
                console.error("Not window.ethereum provider. Do you have multiple wallets installed ?")
            }
            setIsConnecting(true)
            await provider.request({
                method: 'eth_requestAccounts'
            })
            setIsConnecting(false)
            logIn(provider)
        }
    }

    return (
        <Card className='login'>
            <Button onClick={logInHandler} className='button'>
                {!isConnecting ? 'Get public key' : 'MetaMask is locked - please login'}
            </Button>
        </Card>
    );
};

export default Login;