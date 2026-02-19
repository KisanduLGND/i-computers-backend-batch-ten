import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import authenticateUser from "./middlewares/authentication.js";
import productRouter from "./routers/productRouter.js";

const app = express();


const mongodbURI = "mongodb+srv://kisandurandulbandara_db_user:2012kisandu@cluster0.s8s4w6m.mongodb.net/?appName=Cluster0"

mongoose.connect(mongodbURI).then(
    ()=>{
        console.log("Connected to MongoDB");
    }
)

app.use( express.json() )

app.use(authenticateUser)

app.use("/users",userRouter)
app.use("/products",productRouter)


app.listen(5000, (req,res) => {
	console.log("Server is running on port 5000");
});
///testing