import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();
import fs from 'fs';


// configuration : 

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_APP_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});



// cloudinary image uploader function : 

const uploadOnCloudinary = async (fileData: string) => {
    try {
        const file = await cloudinary.uploader.upload(fileData, { resource_type: "auto" });

        // If file uploaded successfully get the url of the file : 
        if (file) {
            console.log(file.url);
            return file.url;
        }
    } catch (error) {
        console.log(`Could not upload image!`, error);
    }
}
export default uploadOnCloudinary;