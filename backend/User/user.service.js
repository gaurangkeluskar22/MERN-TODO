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
    getUserListService
}