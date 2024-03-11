
const { generateJwtToken } = require('../auth/jwtAuthMiddleware');
const {createUserService, getUserListService} = require('./user.service');
const bcrypt = require('bcrypt')

const createUser = (req, res) =>{
    const body = req.body;
    const salt = bcrypt.genSaltSync(10);
    body.password_hash = bcrypt.hashSync(body.password_hash, salt)
    
    createUserService(body, (err, results)=>{
        if(err){
            return res.status(500).json({
                success : false,
                message : "Database Connection Error"
            });
        }
        else{
            const token = generateJwtToken(body)
            return res.status(200).json({
                success : true,
                token : token,
            })
        }
    })

}

const getUserList = (req,res) => {
    getUserListService((err, results)=>{
        if(err){
            console.log("e:",err)

            return res.status(500).json({
                success : false,
                message : "Error"
            });
        }
        else {
             return res.status(200).json({
                success : true,
                data: results
            })
        }
    })
}

module.exports = {
    createUser,
    getUserList
}