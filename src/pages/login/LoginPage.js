import { useNavigate } from "react-router-dom";


const LoginPage = () => {

    const navigate = useNavigate()
    
     const handleSignUpButton = () => {
        navigate("/")
     }

    return(
        <>
            <div style={{display:'flex', flexDirection:'column', alignContent: 'center', justifyContent:'center', alignItems:'center'}}>
                <h2>Login</h2>
                <input type="text" placeholder="Enter Email ID:" style={{padding:'5px', margin:'5px'}}/>
                <input type="password" placeholder="Enter Password:" style={{padding:'5px', margin:'5px'}}/>
                <button type="submit" name="submit" style={{padding:'5px', margin:'5px'}}>Login</button>
                <p onClick={handleSignUpButton} style={{padding:'5px', margin:'5px'}}>Dont have an Account ? SignUp</p>
            </div>
        </>
    )
}

export default LoginPage;