
const { generateJwtToken } = require('../auth/jwtAuthMiddleware');
const {createUserService, getUserListService, loginUserService} = require('./user.service');
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

const loginUser = (req, res) => {
    const body = req.body;
    
    loginUserService(body, (err, results)=>{
        if(err){
            return res.status(401).json({
                success: false,
                message: "Something went wrong!"
            })
        }
        else{
            if(results && bcrypt.compareSync(body.password_hash, results.password_hash)){
            const token = generateJwtToken(results)
            return res.status(200).json({
                success: true,
                token : token
            })
        }
        else{
            return res.status(200).json({
                success: false,
                message: 'Invalid Email ID or Password!'
            })
        }
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
    loginUser,
    getUserList
}