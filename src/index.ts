import { json, Request, Response } from "express"
import express from "express"
import userRouter from "./router/user-routes.js"
import cors from "cors"

const app = express()

app.use(json())
app.use(cors())
app.use(userRouter)

const port = process.env.PORT
app.listen(port, () => {
    console.log(`App running on port ${port}`)
})