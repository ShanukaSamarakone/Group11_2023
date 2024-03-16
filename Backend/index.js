const express = require("express")
const userController = require("./Controller/user.controller")
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser");

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/leaderboard",userController.getUsers)

app.listen(3000, () => {
    console.log("server is Started!!")
})