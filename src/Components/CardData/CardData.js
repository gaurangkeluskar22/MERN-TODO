import axios from 'axios';
import './CardData.css';
import { useState } from 'react';
import getRequestedHeader from '../../utils/util';
import { useNavigate } from 'react-router-dom';

const CardData = ({data, isMyThought, setIsDeleted}) => {
    const headers = getRequestedHeader()
    const navigate = useNavigate()
    const [like, setLike] = useState('🖤')
    const [likeCount, setLikeCount] = useState(data?.likes)

    const handleLike = async() => {
        await axios.post(`https://sern-thoughts-app.onrender.com/api/thought/like/${data?.id}`,{},headers).then((res)=>{
            if(res?.data?.success){
                setLike('❤️')
                setLikeCount((prevState)=> prevState + 1)
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    const handleDelete = async (id) => {
        await axios.delete(`https://sern-thoughts-app.onrender.com/api/thought/delete/${id}`,headers).then((res)=>{
            if(res?.data?.success){
                setIsDeleted(true)
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    const handleUpdate = () => {
        navigate('/create', {
            state:{
                data: data,
            }
        })
    }


    return( 
        <div className='card-details'>
            <div>
                <p style={{fontSize:'20px'}}>{data?.thought_title}</p>
                <p style={{fontSize:'17px', marginTop:'10px'}}>{data?.thought_desc}</p>
            </div>
            <div className='card-details-writter'>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <p onClick={handleLike}>{like}</p>
                    <p>{likeCount} Likes</p>
                </div>
                <div>
                    <p>Thought By - </p>
                    <p>{data?.firstname +" "+ data?.lastname}</p>
                </div>
            </div>
            {isMyThought &&
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'200px'}}>
                    <button style={{padding:'5px', margin:'0px',width:'90px', background:'#cdf'}} onClick={handleUpdate}>Update</button>
                    <button style={{padding:'5px', margin:'0px',width:'90px', background:'#cdf'}} onClick={() => handleDelete(data?.id)}>Delete</button>
                </div>
            }
        </div>
    )
}

export default CardData;