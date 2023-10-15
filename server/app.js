const express = require("express");
const app = express();
const cors = require("cors");
const pdf = require("html-pdf");
const pdfSample = require("./pdfSample/index");

const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const Resume = require('./routes/resume');
app.use('/resume',Resume);

app.use(express.static("../client/build"));

app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`);
});