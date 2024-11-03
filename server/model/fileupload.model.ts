import mongoose from "mongoose";




const fileUploadSchema = new mongoose.Schema({
    file: {
        type: String,
    }
});
const fileUploadModel = mongoose.model("fileData", fileUploadSchema);
export default fileUploadModel;