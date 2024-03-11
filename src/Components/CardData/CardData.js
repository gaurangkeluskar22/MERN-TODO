import axios from 'axios';
import './CardData.css';
import { useState } from 'react';
import getRequestedHeader from '../../utils/util';

const CardData = ({data}) => {
    const headers = getRequestedHeader()
    const [like, setLike] = useState('🖤')
    const [likeCount, setLikeCount] = useState(data?.likes)

    const handleLike = async() => {
        await axios.post(`http://localhost:3001/api/thought/like/${data?.id}`,{},headers).then((res)=>{
            if(res?.data?.success){
                setLike('❤️')
                setLikeCount((prevState)=> prevState + 1)
            }
        }).catch((err)=>{
            console.log(err)
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
        </div>
    )
}

export default CardData;