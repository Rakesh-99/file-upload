import mongoose from "mongoose";




const connectDB = async (connection_string: string) => {

    try {
        const connect = await mongoose.connect(connection_string);
        if (connect) {
            console.log(`MongoDB connected`);
        }
    } catch (error) {
        console.log(`Coluld not connect to Database, ${error}`);
    }
};

export default connectDB;