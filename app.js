if (process.env.NODE_ENV !== "production") { require("dotenv").config()}
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const { upload } = require('./config/multer')

const app = express()
const PORT = process.env.PORT || 3000
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(helmet())
app.use(morgan("tiny"))
app.use(upload.any())
app.use(routes)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log('app listen on port', PORT);
})