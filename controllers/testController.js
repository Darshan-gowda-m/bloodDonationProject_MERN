const testController=(req,res)=>{
    res.status(200).send({
        messgage:"Welcome",
        success:true
    })
}
// 
module.exports={testController};