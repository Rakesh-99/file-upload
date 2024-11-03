import multer from 'multer';
import { v4 as uuid } from 'uuid';


const storage = multer.diskStorage({

    destination: function (req, file, callback) {
        callback(null, "./public/temp");
    },

    filename: function (req, file, callback) {
        const randomText = uuid();
        callback(null, randomText + "" + file.originalname);
    }
})

const multerUpload = multer({ storage });
export default multerUpload;