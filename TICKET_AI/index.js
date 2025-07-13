import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import  { configDotenv } from 'dotenv'
import userRoutes from './routes/user.js'



const PORT = process.env.PORT
const app = express()
configDotenv()



app.use(cors())
app.use(express.json())

app.use("/api/auth",userRoutes)

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDb Connected ...")
        app.listen(PORT, () => {
            app.listen(PORT, () => console.log("Server is running "))
        })
    })
    .catch((err) =>
        console.error("Mongdo error ", err)
    )



app.listen(3000, () => {

})