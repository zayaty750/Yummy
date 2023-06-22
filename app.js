const express = require('express')
const mongoose = require("mongoose");
const path = require('path')
const fileUpload = require('express-fileupload');
const app = express()
const http = require("http")
const dotenv = require("dotenv");
dotenv.config();

const port = 3000;

mongoose.connect(process.env.dbURI)
    .then(() => console.log(`[MONGO] Connected to MongoDB`))
    .catch((err) => console.log(`[MONGO] Error connecting to MongoDB: ${err}`));


app.set("view engine","ejs");
app.use(fileUpload());
app.use(express.static('public'));
//setup json middleware
app.use(express.json());

//When extended property is set to true, the URL-encoded data will be parsed with the qs library.
//qs library allows you to create a nested object from your query string.

// When extended property is set to false, the URL-encoded data will instead be parsed with the query-string library.
// query-string library does not support creating a nested object from your query string.
app.use(express.urlencoded({extended:true}));



const index_router = require("./routes/index.js")
const admin_router = require("./routes/admin.js");

app.use("/",index_router);
app.use("/admin",admin_router);

const s = http.createServer(app)
s.listen(port, () => {
    console.log(`[API] Server listening on http://localhost:${port}`);
});


console.log("Start: " + process.env.ENV);