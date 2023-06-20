const express = require('express')
const path = require("path"); 
const mongoose = require("mongoose");
const app = express()
const http = require("http")

const dbURI = "mongodb+srv://zayaty:9H3jdMZ3ntLDcowq@cluster0.33tbygn.mongodb.net/Yummy?retryWrites=true&w=majority"
const port = 3000;

mongoose.connect(dbURI)
    .then(() => console.log(`[MONGO] Connected to MongoDB`))
    .catch((err) => console.log(`[MONGO] Error connecting to MongoDB: ${err}`));

app.set("view engine","ejs");

app.use(express.static(path.join(__dirname, "public")));


const index_router = require("./routes/index.js")
const admin_router = require("./routes/admin.js");

app.use("/",index_router);
app.use("/admin",admin_router);

const s = http.createServer(app)
s.listen(port, () => {
    console.log(`[API] Server listening on http://localhost:${port}`);
});


console.log("Start: " + process.env.ENV);