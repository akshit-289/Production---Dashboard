const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mongoURI = "mongodb+srv://vepl:firstTry@cluster0.pdnuezr.mongodb.net/sample-db?retryWrites=true&w=majority";
const BASE_URL = process.env.BASE_URL

const mongoDb = async () => {
  await mongoose.connect(mongoURI, {useNewUrlParser:true}, async(err, result)=>{
    if(!err){  
          // console.log("connected successfully");
          const fetched_data = await mongoose.connection.db.collection("users")
          fetched_data.find({}).toArray((err, data)=>{
            // if(err)
            //   console.log(err);  
          }) 
    }
  })
}

module.exports = mongoDb;