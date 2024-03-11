const {createThoughtService, getThouhghtsService, likeThoughtService, getMyThoughtsService, deleteMyThoughtService, updateMyThoughtService } = require('./thought.service')

const createThought = (req, res) => {
    createThoughtService(req, (err, results)=>{
        if(err){
            return res.status(500).json({
                success : false,
                message : "Database Connection Error"
            })
        }
        else{
            return res.status(200).json({
                success: true,
                message: 'Thought has been created Successfully!'
            })
        }
    })
}

const getThoughts = (req, res)=> {
    getThouhghtsService((err, results)=>{
        if(err){
            return res.status(500).json({
                success : false,
                message : "Database Connection Error"
            })
        }
        else{
            return res.status(200).json({
                success: true,
                data: results,
            })
        }
    })
}

const getMyThoughts = (req, res) => {
    const user_id = req.user.id
    getMyThoughtsService(user_id, (err, results)=>{
        if(err){
            return res.status(500).json({
                success : false,
                message : "Database Connection Error"
            })
        }
        else{
            return res.status(200).json({
                success: true,
                data: results
            })
        }
    })
}

const likeThought = (req,res)=>{
    const id = req.params.id
    likeThoughtService(id, (err, results)=>{
        if(err){
            return res.status(500).json({
                success : false,
                message : "Database Connection Error"
            })
        }
        else{
            return res.status(200).json({
                success: true,
                message:'Thought has been liked successfully!'
            })
        }
    })
}

const deleteMyThought = (req, res) => {
    const id = req.params.id
    deleteMyThoughtService(id, (err, results)=>{
    if(err){
            return res.status(500).json({
                success : false,
                message : "Database Connection Error"
            })
        }
        else{
            return res.status(200).json({
                success: true,
                message:'Thought has been deleted successfully!'
            })
        }
    })
}

const updateThought = (req, res) => {
    const body = req.body
    updateMyThoughtService(body, (err, results)=>{
        if(err){
            return res.status(500).json({
                success : false,
                message : "Database Connection Error"
            })
        }
        else{
            return res.status(200).json({
                success: true,
                message:'Thought has been deleted successfully!'
            })
        }
    })
}

module.exports = {createThought, getThoughts, likeThought, getMyThoughts, deleteMyThought, updateThought}