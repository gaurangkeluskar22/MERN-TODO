const {createThoughtService, getThouhghtsService, likeThoughtService } = require('./thought.service')

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

module.exports = {createThought, getThoughts, likeThought}