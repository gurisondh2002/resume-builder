const express = require("express");
const app = express();
const cors = require("cors");
const pdf = require("html-pdf");
const pdfSample = require("./pdfSample");

const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// const Resume = require('./routes/resume');
// app.use('/resume',Resume);

// app.use(express.static("../client/build"));

app.post("/form/create-pdf", (req, res) => {
    pdf.create(pdfSample(req.body), {}).toFile("Resume.pdf", (err) => {
      if (err) {
        res.send(Promise.reject());
        console.log(err);
      }
      res.send(Promise.resolve());
      console.log("Success");
    });
  });
  
  app.get("/form/fetch-pdf", (req, res) => {
    res.sendFile(`${__dirname}/Resume.pdf`);
  });
  
  app.use(express.static("../client/build"));
  
  app.listen(port, () => {
    console.log(`Server is running on port=${port}`);
  });