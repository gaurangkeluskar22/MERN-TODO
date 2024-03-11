import { Box, Button, Typography } from '@mui/material'
import {useState, useEffect} from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { useLocation, useNavigate } from 'react-router-dom'
import getRequestedHeader from '../../utils/util'
import axios from 'axios'

const CreateThoughts = () =>{
    const navigate = useNavigate()
    const location = useLocation()
    const headers = getRequestedHeader()    

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [isUpdate, setIsUpdate] = useState(false)
    
    useEffect(()=>{
        if(location?.state?.data){
            setTitle(location?.state?.data?.thought_title)
            setDescription(location?.state?.data?.thought_desc)
            setIsUpdate(true)
        }

    },[location?.state?.data])
    

    const createThought = async () => {
        const payload = {
            "thought_title" : title,
            "thought_desc" : description
        }

        await axios.post('https://sern-thoughts-app.onrender.com/api/thought/create', payload, headers).then((res)=>{
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

    const updateThought = async () => {
        const payload = {
            "thought_title" : title,
            "thought_desc" : description,
            "id": location?.state?.data?.id,
        }

        await axios.put('https://sern-thoughts-app.onrender.com/api/thought/update', payload, headers).then((res)=>{
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



    return(
        <>
        <NavBar/>
        <Box sx={{marginTop:'10vh', width:'21vw'}}>
            <Box sx={{display:'flex', flexDirection:'column', textAlign:'center'}}>
                <h2>Write Your Thought</h2>   
                 <input value={title} type='text' placeholder='Thought Title:' onChange={handleTitleChange} style={{padding:'10px', margin:'10px 0px'}}/>
                 <textarea value={description} type="text" placeholder='Thought Description:' rows={5} onChange={handleDescriptionChange} style={{padding:'10px', margin:'10px 0px'}}/>
                 {
                    isUpdate ?
                    <Button variant='contained' onClick={updateThought}>Update</Button>
                    :
                    <Button variant='contained' onClick={createThought}>Create</Button>
                 }
            </Box>
        </Box>
        </>
    )
}

export default CreateThoughts