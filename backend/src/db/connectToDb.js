import mongoose from "mongoose"

const connection = async () => {
    try {
        const URI = process.env.MONGO_URI;
        await mongoose.connect(URI);
        console.log("MongoDB Connected");
    }catch(err){
        console.log(err.message);
    }
}
export default connection;