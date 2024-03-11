const pool = require('../config/database');

const createUserService = (data, callBack) => {
    pool.query(
        `insert into User (firstname, lastname, email_id, password_hash) values (?,?,?,?)`,
        [
            data.firstname,
            data.lastname,
            data.email_id,
            data.password_hash
        ],
        (error, results) => {
            if(error){
                return callBack(error)
            }
            else{
                return callBack(null, results)
            }
        }
    );
}

const loginUserService = (data, callBack) => {
    pool.query(`select * from User where email_id = ?`,
    [
        data?.email_id
    ],
    (error, results)=>{
        if(error){
            return callBack(error)
        }
        else{
            return callBack(null, results[0])
        }
    }
    )
}

const getUserListService = (callBack) => {
    pool.query(
        `select * from User`,
        [],
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


module.exports = {
    createUserService,
    loginUserService,
    getUserListService
}