import { Box, Button, Typography } from '@mui/material'
import {useState, useEffect} from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { useNavigate } from 'react-router-dom'
import getRequestedHeader from '../../utils/util'
import axios from 'axios'

const CreateThoughts = () =>{
    const navigate = useNavigate()
    const headers = getRequestedHeader()    

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    

    const createThought = async () => {
        const payload = {
            "thought_title" : title,
            "thought_desc" : description
        }

        await axios.post('http://localhost:3001/api/thought/create', payload, headers).then((res)=>{
            if(res?.data?.success){
              alert(res?.data?.message)
              navigate('/home')

            }
            else{
                alert(res?.data?.message)
            }
        }).catch((err)=>{
            console.log(err)
        })

    }

    const handleTitleChange = (e) => {
        const input = e?.target?.value
        setTitle(input)
    }

    const handleDescriptionChange = (e) => {
        const value = e?.target?.value;
        setDescription(value)
    }



    return(
        <>
        <NavBar/>
        <Box sx={{marginTop:'10vh', width:'21vw'}}>
            <Box sx={{display:'flex', flexDirection:'column', textAlign:'center'}}>
                <h2>Write Your Thought</h2>   
                 <input type='text' placeholder='Thought Title:' onChange={handleTitleChange} style={{padding:'10px', margin:'10px 0px'}}/>
                 <textarea type="text" placeholder='Thought Description:' rows={5} onChange={handleDescriptionChange} style={{padding:'10px', margin:'10px 0px'}}/>
                 <Button variant='contained' onClick={createThought}>Create</Button>
            </Box>
        </Box>
        </>
    )
}

export default CreateThoughts