import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getRequestedHeader from "../../utils/util";


const LoginPage = () => {

    const navigate = useNavigate()
    const headers = getRequestedHeader()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleEmailChange = (e) => {
        const value = e?.target?.value
        setEmail(value)
    }

    const handlePasswordChange = (e) => {
        const value = e?.target?.value
        setPassword(value)
    }

    const handleLogin = async () => {
        const payload = {
            "email_id" :  email,
            "password_hash" : password,
        }

        await axios.post('https://sern-thoughts-app.onrender.com/api/user/login', payload, headers).then((res)=>{
            if(res?.data?.success){
                if(res?.data?.token){
                    localStorage.setItem("token", res?.data?.token)
                    navigate('/home')
                }
            }

            else{
                alert(res?.data?.message)
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

     const handleSignUpButton = () => {
        navigate("/")
     }

     useEffect(()=>{
        if(localStorage?.getItem("token")){
            navigate("/home")
        }
     },[])

    return(
        <>
            <div style={{display:'flex', flexDirection:'column', alignContent: 'center', justifyContent:'center', alignItems:'center'}}>
                <h2>Login</h2>
                <input type="text" placeholder="Enter Email ID:" style={{padding:'5px', margin:'5px'}} onChange={handleEmailChange}/>
                <input type="password" placeholder="Enter Password:" style={{padding:'5px', margin:'5px'}} onChange={handlePasswordChange}/>
                <button type="submit" name="submit" style={{padding:'5px', margin:'5px'}} onClick={handleLogin}>Login</button>
                <p onClick={handleSignUpButton} style={{padding:'5px', margin:'5px'}}>Dont have an Account ? SignUp</p>
            </div>
        </>
    )
}

export default LoginPage;