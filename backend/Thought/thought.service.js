const pool = require("../config/database")


const createThoughtService = (data, callBack) => {
    const body = data.body
    const user = data.user
    // console.log(data)
    pool.query(
        `insert into Thought (thought_title, thought_desc, user_id, likes) values( ?, ?, ?, ?)`,
        [
            body.thought_title,
            body.thought_desc,
            user.id,
            0
        ],
        (error, results)=>{
            if(error){
                return callBack(error)
            }
            else{
                return callBack(null, results)
            }
        }
    )
}

const getThouhghtsService = (callBack) =>{
    pool.query(
        `select user.firstname, user.lastname, Thought.* from user inner join Thought on user.id = Thought.user_id`,
        [],
        (error, results)=>{
            if(error){
                return callBack(error)
            }
            else{
                return callBack(null, results)
            }
        }
    )
}


const likeThoughtService = (data, callBack) => {
    
    pool.query(
        'update Thought set likes = likes + 1 where id = ?',
        [data],
        (error, results)=>{
            if(error){
                return callBack(error)
            }
            else{
                return callBack(null, results)
            }
        }
    )
}


module.exports = {createThoughtService, getThouhghtsService, likeThoughtService}