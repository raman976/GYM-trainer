const mongoose=require('mongoose')
const Analyser=new mongoose.Schema({
    height:{type:Number,required:true},
    weight:{type:Number,required:true},
    gender:{type:String,required:true},
    age:{type:Number,required:true},
    analysis: { type: String, required: true }
})

const BMI=mongoose.model('BMI',Analyser)
module.exports=BMI