import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import axios from "axios";
import getRequestedHeader from "../../utils/util";
import CardData from "../../Components/CardData/CardData";
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate()
    const headers = getRequestedHeader()

    const [thoughts, setThoughts] = useState([])

    const fetchData = async () => {
        await axios.get('http://localhost:3001/api/thought/getThoughts', headers).then((res)=>{
            if(res?.data?.success){
                setThoughts(res?.data?.data)
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

    useEffect(()=>{
        if(!localStorage?.getItem("token")){
            navigate("/")
        }
    },[])

    return(
        <>
         <NavBar/>
         <div className="card">
            {
                thoughts?.length ?
                    thoughts?.map((thought, index)=> {
                        return <CardData data={thought} key={index}/>
                    })
                :
                <p>No Data</p>
            }
         </div>
        </>       
    )
}

export default HomePage;