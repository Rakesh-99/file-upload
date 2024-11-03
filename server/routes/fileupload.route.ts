import express from 'express';
const fileUploadRouter = express.Router();
import { fileUpload } from '../controller/fileupload.controller';
import multerUpload from '../middlewares/multer.config';





fileUploadRouter.post('/upload', multerUpload.single("filename"), fileUpload);





export default fileUploadRouter;