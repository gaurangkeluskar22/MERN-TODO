import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate()
    
    useEffect(()=>{
        if(!localStorage?.getItem("token")){
            navigate("/")
        }
    },[])

    return(
        <>
        
        </>       
    )
}

export default HomePage;