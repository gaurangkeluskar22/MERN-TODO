import { Box, Button, Typography } from '@mui/material'
import {useState, useEffect} from 'react'

const CreateTodo = () =>{
    const [todoList, setTodoList] = useState([])
    const [todo, setTodo] = useState('')

    const fetchTodoList = async () =>{

    }

    useEffect(()=>{
        fetchTodoList()
    },[])

    const createTodo = (e) => {
        setTodoList((prevState)=>[
            ...prevState,
            todo
        ])
    }

    const handleInputChange = (e) => {
        const input = e?.target?.value
        setTodo(input)
    }

    return(
        <Box sx={{marginTop:'10vh', width:'21vw'}}>
            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>   
                 <input type='text' onChange={handleInputChange}/>
                 <Button variant='contained' onClick={createTodo}>Create</Button>
            </Box>
            <Box sx={{paddingTop:'10vh'}}>
                {
                    todoList?.map((item, index)=>{
                     return(
                        <Box sx={{display:'flex', flexDirection:'row', margin:'5px', alignItems:'center', justifyContent:'center'}} key={index}>
                            <Typography sx={{width:'15vw', alignItems:'center'}}>{item}</Typography>
                            <Button variant='contained' color='error'>Delete</Button>
                        </Box>
                     )  
                    })
                }
                
            </Box>
        </Box>
    )
}

export default CreateTodo