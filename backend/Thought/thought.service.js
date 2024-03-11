const pool = require("../config/database")


const createThoughtService = (data, callBack) => {
    const body = data.body
    const user = data.user
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

const getMyThoughtsService = (data, callBack)=>{
    pool.query(
        `select user.firstname, user.lastname, Thought.* from user inner join Thought on user.id = Thought.user_id where user.id = ?`,
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

const deleteMyThoughtService = (data, callBack) => {
    pool.query(
        `delete from Thought where id = ?`,
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

const updateMyThoughtService = (data, callBack) => {
    pool.query(
        `update Thought set thought_title = ?, thought_desc = ? where id = ?`,
        [
            data?.thought_title,
            data?.thought_desc,
            data?.id
        ],
        (error, results) => {
            if(error){
                return callBack(error)
            }
            else{
                return callBack(null, results)
            }
        }
    )
}

module.exports = {createThoughtService, getThouhghtsService, likeThoughtService, getMyThoughtsService, deleteMyThoughtService, updateMyThoughtService}