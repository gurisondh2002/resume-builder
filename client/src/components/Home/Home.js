import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();
  return (
    <div>Home
        <button><Link to="/form">Resume</Link> </button>
    </div>

  )
}

export default Home