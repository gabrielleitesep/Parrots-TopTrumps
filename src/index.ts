import express, {json} from "express"

const app = express()
app.use(json())

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`App running on port ${port}`)
})