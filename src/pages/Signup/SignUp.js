import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import getRequestedHeader from "../../utils/util";


const SignUp = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [lastName, setLastName] = useState('')
    const headers = getRequestedHeader()

    useEffect(()=>{
        if(localStorage?.getItem("token")){
            navigate("/home")
        }
    },[])

    const handleLoginButton = () => {
        navigate('/login')
    }

    const handleEmailId = (e) => {
        const value = e?.target?.value
        setEmail(value)
    }

    const handleLastName = (e) => {
        const value = e?.target?.value
        setLastName(value)
    }

    const handleName = (e) => {
        const value = e?.target?.value
        setName(value)
    }

    const handlePassword = (e) => {
        const value = e?.target?.value
        setPassword(value)
    }
    
    const handleSignUp = async () => {
        const payload = {
            "firstname" : name,
            "lastname" : lastName,
            "email_id" : email,
            "password_hash" : password,
        }

        await axios.post('http://localhost:3001/api/user/create', payload , headers).then((res)=>{
            if(res?.data?.success){
                if(res?.data?.token){
                    localStorage.setItem("token",res?.data?.token)
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

    return(
        <>
            <div style={{display:'flex', flexDirection:'column', alignContent: 'center', justifyContent:'center', alignItems:'center'}}>
                <h2>Register</h2>
                <input type="text" placeholder="Enter First name:" style={{padding:'5px', margin:'5px'}} onChange={handleName}/>
                <input type="text" placeholder="Enter Last name:" style={{padding:'5px', margin:'5px'}} onChange={handleLastName}/>
                <input type="text" placeholder="Enter Email ID:" style={{padding:'5px', margin:'5px'}} onChange={handleEmailId}/>
                <input type="password" placeholder="Enter Password:" style={{padding:'5px', margin:'5px'}} onChange={handlePassword}/>
                <button type="submit" name="submit" style={{padding:'5px', margin:'5px'}} onClick={handleSignUp}>Create Account</button>
                <p onClick={handleLoginButton} style={{padding:'5px', margin:'5px'}}>Aleady have an account ? Login</p>
            </div>
        </>
    )
}

export default SignUp;