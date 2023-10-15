import React from 'react'
import styles from './Home.module.css'
import {useNavigate} from 'react-router-dom'
import logo from '../../assets/logo.png'

function Home() {

    const navigate = useNavigate();
  return (
    <>
    <div className={`${styles.container}`}>
    <nav>
        <div className={`${styles.mainContainer}`}>
            <div className={`${styles.logo}`}>
                <img src={logo} alt="Logo" width={50} height={50}/>
            </div>
            <div className={`${styles.navbarLinks}`}>
                <ul>
                    <li><a href="/" >Home</a></li>
                    <li><a href="/form">Start</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <div className={`${styles.sec1Container}`}>
        <div className={`${styles.sec1Heading}`}>
            <h1>CV- Builder</h1>
        </div>
        <div className={`${styles.sec1Content}`}>
            <h3>Get your developer style resume ready with React Resume Builder</h3>
        </div>
        <div className={`${styles.sec1TextContent}`}>
            <h3>All new platform to build developer style resume in just few seconds.</h3>
        </div>
    </div>
    <div className={`${styles.sec2Container}`}>
        <div className={`${styles.sec2Heading}`}>
            <h1>Follow the steps</h1>
        </div>
        <div className={`${styles.sec21Content}`}>
            <h1>Step 1: </h1>
            <h3> Input all your details</h3>
        </div>
        <div className={`${styles.sec22Content}`}>
        <h3>Your resume is ready to download</h3>
            <h1>: Step 2 </h1>
        </div>
        <div className={`${styles.sec23Content}`}>
            <h1>Step 3: </h1>
            <h3>Click on download</h3>
        </div>
    </div>
    <div className={`${styles.sec3Container}`}>
        <h1>Are you ready???</h1>
        <button onClick={() => navigate("/form")}>Get Started</button>
    </div>
    </div>
    </>
  )
}

export default Home