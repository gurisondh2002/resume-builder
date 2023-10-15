import React, { useState } from 'react'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import Extra from '../Extra/Extra'
import Personal from '../Personal/Personal'
import Project from '../Project/Project'
import axios from "axios"
import {saveAs} from 'file-saver'

function Form() {

  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    skills: "",

    exp1_org: "",
    exp1_pos: "",
    exp1_desc: "",
    exp1_dur: "",
    exp2_org: "",
    exp2_pos: "",
    exp2_des: "",
    exp2_dur: "",

    proj1_title: "",
    proj1_link: "",
    proj1_desc: "",
    proj2_title: "",
    proj2_link: "",
    proj2_desc: "",

    edu1_school: "",
    edu1_year: "",
    edu1_qualification: "",

    extra_1: "",
    extra_2: "",
  });

  const [page,setPage] = useState(0);
  const FormTitle = [
    "Personal Details",
    "Education",
    "Experience",
    "Projects",
    "Extras",
  ];

  const PageDisplay = () =>{
    if(page === 0){
      return <Personal formData={formData} setFormData={setFormData}/>;
    }
    else if(page === 1){
      return <Education formData={formData} setFormData={setFormData}/>;
    }
    else if(page === 2){
      return <Experience formData={formData} setFormData={setFormData}/>;
    }
    else if(page === 3){
      return <Project formData={formData} setFormData={setFormData}/>;
    }
    else{
      return <Extra formData={formData} setFormData={setFormData}/>;
    }
  };

  const handlePrevPage = () =>{
    setPage((currPage) =>{
      return currPage -1;
    })
  }

  const handleNextPage = () =>{
    if(page === FormTitle.length - 1){
      axios.post("http://localhost:3000/form/create-pdf", formData).then(() =>
        axios.get("http://localhost:3000/form/fetch-pdf",{
          responseType :"blob",
        })
      ).then((res) =>{
        const pdfBlob = new Blob([res.data], {
          type: "application/pdf",
        });
        setSuccess(true && res.status === 200);
        saveAs(pdfBlob, "Resume.pdf");
      });
    }
    else{
      setPage((currPage) =>{
        return currPage + 1;
      })
    }
  }
  return (
    <div>
      <h1>{FormTitle[page]}</h1>
      <div>
        {PageDisplay()}
      </div>
      <div>
        <button disabled={page === 0} onClick={handlePrevPage}>Prev</button>
        <button onClick={handleNextPage}>{page === FormTitle.length - 1 ? "Download PDF" : "Next" }</button>
      </div>
      {success}
    </div>
  )
}

export default Form