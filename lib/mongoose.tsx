import mongoose from 'mongoose';

const uri = "mongodb+srv://mamonga1355:3by0jtkxHlnpIuiB@clusterx.efqagvv.mongodb.net/lemonuser"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://mamonga1355:3by0jtkxHlnpIuiB@clusterx.efqagvv.mongodb.net/lemonuser');
        console.log("Success: {conn.connection.host}")
    } catch(error) {
        console.log(error.message);
        process.exit(1);
    }
}
export default connectDB;