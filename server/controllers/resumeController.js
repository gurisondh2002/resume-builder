

const createResume = (req, res) => {
    pdf.create(pdfSample(req.body), {}).toFile("Resume.pdf", (err) => {
      if (err) {
        res.send(Promise.reject());
        console.log(err);
      }
      res.send(Promise.resolve());
      console.log("Success");
    });
  }


  const getResume = (req, res) => {
    res.sendFile(`${__dirname}/Resume.pdf`);
  }



module.exports = {createResume, getResume}