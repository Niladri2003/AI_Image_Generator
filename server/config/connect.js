import mongoose from "mongoose"
const connectDB=(url)=>{
    mongoose.set("strictQuery",true);
    mongoose.connect(url, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB  Connection  Successful"))
    .catch( (error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        //iska matlab kya h ?
        process.exit(1);
    } );
}
export default connectDB;
