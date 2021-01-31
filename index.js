const express = require("express")
const app = express()
const mongoose = require("mongoose")
const config = require(`${__dirname}/config.json`) // requires config.json derulo
const caching = require("./caching")
const uri = "mongodb+srv://Ender:Ender@y-dev.6elps.mongodb.net/y-dev"

app.use(require("./Services/Main")) // require services

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then((pp) => {
  console.log("Y-Dev Connected To MongoDB")
})
.catch((err) => {
  console.log(err)
})

//Gets the latest cosmetics
caching.DownloadCosmetics()

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/html/index.html`)
})

app.get("#", (req, res) => {
  res.sendFile(`${__dirname}/public/html/index.html`)
})

app.get("/download", (req, res) => {
  res.sendFile(`${__dirname}/public/html/download.html`)
})

app.get("/download.html", (req, res) => {
  res.sendFile(`${__dirname}/public/html/download.html`)
})

app.get("/gradient", (req, res) => {
  res.sendFile(`${__dirname}/public/html/gradient.png`)
})

app.listen(config.port, () => {
    console.log(`${config.name} listening On ${config.port}`) 
})