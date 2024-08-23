import mongooes from "mongoose";

const URL = "mongodb://127.0.0.1:27017/apnafood";

const MongoDB = async()=>{
    try{
        await mongooes.connect(URL);
        console.log("databse connected");
        
        const fooddata = await mongooes.connection.db.collection("foodData2").find({}).toArray();
        global.food_items = fooddata;


    }catch(err){
        console.log(err);
        console.log("database is not connected");
    }
}
export default  MongoDB;
