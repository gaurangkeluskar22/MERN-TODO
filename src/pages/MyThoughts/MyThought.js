import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import axios from "axios";
import getRequestedHeader from "../../utils/util";
import './MyThoughts.css'
import { useNavigate } from "react-router-dom";
import CardData from "../../Components/CardData/CardData";

const MyThought = () => {
    const navigate = useNavigate()
    const headers = getRequestedHeader()

    const [thoughts, setThoughts] = useState([])
    const [isDeleted, setIsDeleted] = useState(false)
 
    const fetchData = async () => {
        await axios.get('https://sern-thoughts-app.onrender.com/api/thought/getMyThoughts',headers).then((res)=> {
            if(res?.data?.success){
                setThoughts(res?.data?.data)
            }
        }).catch((err)=>{
            console.log(err)
        })
    }


    useEffect(()=>{
        if(isDeleted){
            setIsDeleted(false)
        }
        fetchData()
    },[isDeleted])

    useEffect(()=>{
        if(!localStorage?.getItem("token")){
            navigate("/")
        }
    },[])

    return (
        <>
        <NavBar/>
        <div className="card">
            {
                thoughts?.length ?
                    thoughts?.map((thought, index)=> {
                        return <CardData data={thought} key={index} isMyThought={true} setIsDeleted={setIsDeleted}/>
                    })
                :
                <p>No Data</p>
            }
         </div>
        </>
    )
}

export default MyThought;