import axios from 'axios';
import {createContext, useContext, useEffect, useState} from 'react'

export const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
   const [emailCheckLogin, setEmailCheckLogin] = useState(false);
   const [emailCheckRegister, setEmailCheckRegister] = useState(false);
   const [messageFailed, setMessageFailed] = useState('');

   const [userEmail, setUserEmail] = useState('');
    const checkEmail = (email) => {
        return axios.post("http://localhost:5000/checker", {
            email
        }).then((response) => {
            console.log(response.data);
            if(response.data.message === false){
                setEmailCheckRegister(true);
                 setUserEmail(response.data.email)
            } else {
                alert("Logged In");
                setEmailCheckLogin(true)
                setUserEmail(response.data.result[0].email);
            }
        }).catch((error) => {
            console.log(error);
        })
    }
   
    const registerUser = (email, username, password) => {
        return axios.post("http://localhost:5000/register", {email, username, password})
        .then((response) => {
            console.log(response)
          
        }).catch((error) => {
            console.log(error)
        })
    }
    const verifyUser = (email, verificationCode) => {
        return axios.post("http://localhost:5000/verifyCode", {email, verificationCode})
        .then((response) => {
            console.log(response)
            if(response.data.message === 'Verification failed'){
                setMessageFailed(response.data.message)
            }
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <UserContext.Provider value={{emailCheckLogin, messageFailed, verifyUser, registerUser, setEmailCheckLogin, setEmailCheckRegister, emailCheckRegister,checkEmail, userEmail}}>
            {children}
        </UserContext.Provider>
    )
}
export const UserAuth = () => {
    return useContext(UserContext);
}