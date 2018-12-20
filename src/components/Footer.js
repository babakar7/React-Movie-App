import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {

  return (

    <div className={styles.footer}>

      <div className="col-md-6 col-sm-12 ">
      <div className={styles.details} >

        <h1>MoviePhile</h1>

        <h4 className={styles.name}>By Babakar Diop</h4>

        <button style={{backgroundColor:'black'}} ><a  target="_blank" style={{color:'white'}} href="https://www.linkedin.com/in/babakar-diop-5b4bbb44/" >Linkedin profile</a> </button>

      </div>

    </div>


    <div className="col-6">
      <img  className={styles.tmdImg} src="/assets/tmd.png" />


    </div>



    </div>

  )
}


export default Footer
