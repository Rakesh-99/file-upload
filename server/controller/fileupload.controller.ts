import { Request, Response } from "express";
import fileUploadModel from "../model/fileupload.model";
import uploadOnCloudinary from "../utils/cloudinary.config";
import { unlink } from 'fs/promises';


export const fileUpload = async (req: Request, res: Response): Promise<any> => {

    const fileData = req.file;
    try {
        if (!fileData) {
            return res.status(400).json({ success: false, message: "File not found!" });
        }

        // if file available then upload the file on cloudinary : 
        const cloudinaryResponse = await uploadOnCloudinary(fileData.path);

        const saveFileToDB = new fileUploadModel({
            file: cloudinaryResponse
        });
        await saveFileToDB.save();


        // Detele the file from local after pushing it to the cloudinary : 
        unlink(fileData.path);

        return res.status(200).json({ success: true, message: "File has been uploaded" });
    } catch (error) {
        console.log(`Internal server error ${error}`);
    }
}