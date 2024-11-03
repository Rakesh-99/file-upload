import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 7000;
import connectDB from './database/db.config';
connectDB(process.env.DB_URL!);
import fileUploadRouter from './routes/fileupload.route';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", fileUploadRouter);




app.listen(PORT, () => {
    console.log(`App is running at the http://localhost:${PORT}`);
})