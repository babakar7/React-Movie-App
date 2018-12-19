import React from 'react'
import styles from '../styles/Header.module.css'

const Header = () => {

  return (

    <div className="nav">

    <span class="homelink"> MoviePhile</span>

    <div class="searchbar">

        <form >

          <input type="text" class="form-control search-field"  placeholder="Search movies..."/>

        </form>

        </div>

    </div>

  )
}


export default Header
