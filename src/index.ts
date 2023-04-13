import { json, Request, Response } from "express"
import express from "express"
import userRouter from "./router/user-routes.js"


const app = express()
app.use(json())

app.use(userRouter)
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`App running on port ${port}`)
})