const mongoose = require("mongoose")

const dbConnect =()=>{
const connectionParams = {useNewUrlParser:true}
mongoose.connect(process.env.MONGODB_URL,connectionParams)

mongoose.connection.on("connected",()=>{
    console.log("connected to database")
})

mongoose.connection.on("error",(err)=>{
    console.log("error while connecting to database: "+err)
})

mongoose.connection.on("disconnected",()=>{
    console.log("mongodb disconnected")
})
}

module.exports =dbConnect