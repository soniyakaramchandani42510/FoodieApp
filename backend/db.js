const mongoose = require("mongoose");

const mongoUri = "mongodb://admin:admin@ac-dqlkkna-shard-00-00.0ucibcj.mongodb.net:27017,ac-dqlkkna-shard-00-01.0ucibcj.mongodb.net:27017,ac-dqlkkna-shard-00-02.0ucibcj.mongodb.net:27017/mern?ssl=true&replicaSet=atlas-10ekjd-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.set('strictQuery',true)
const mongoDb = async() => {
 await mongoose.connect(mongoUri, (err,res) => {
  if(err){
    console.log(err);
  }
  else{
    console.log("db connected");
    const fetch_data =mongoose.connection.db.collection("food_items");
    const food_category =mongoose.connection.db.collection("food_category");
    fetch_data.find({}).toArray(function(err,data){
     
        if(err){
          console.log(err);
        }
        else{
          global.food_items=data;
            // console.log(global.food_items);
        }
    })


    food_category.find({}).toArray(function(err,data){
     
      if(err){
        console.log(err);
      }
      else{
        global.food_category=data;
          // console.log(global.food_category);
      }
  })
  }
  
  });
};
module.exports=mongoDb;