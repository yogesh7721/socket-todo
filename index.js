const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const { app, httpServer } = require("./socket/socket")
require("dotenv").config()
const path = require("path")

// const app = express()

// step 1   middleware
app.use(express.json())
app.use(express.static("dist"))
app.use(cors({ origin: true, credentials: true }))  //credential for cookie

// step 2 routes
app.use("/api/notes", require("./routes/todo.routes"))

// step 3   404 route
app.use("*", (req, res) => {
    //                   Absolute Path
    res.sendFile(path.join(__dirname, "dist", "index.html"))
    //  res.status(404).json({ message: "Resource Not Found 404" })
})
// step 5 error handler
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: "SERVER ERROR", error: err.message })
})
// step 6
mongoose.connect(process.env.MONGO_URL)

mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED");
    httpServer.listen(process.env.PORT, console.log("server Running")
    )

})