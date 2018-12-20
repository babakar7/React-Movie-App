import React, {Component} from 'react'
import styles from '../styles/Header.module.css'
import { withRouter } from "react-router"
import {Link} from 'react-router-dom'



class Header extends Component {


    state = {

      query: null
    }


    handleChange = (e) => {
      this.setState({query: e.target.value})
    }


  submitHandle = (e) => {
      e.preventDefault();
      this.props.history.push({pathname:'/results', search:'?search='+this.state.query})

  }
  render(){

    console.log(this.props)


    return(
      <div className={styles.Header}>

      <Link to="/">
      <span className={styles.homelink}> MoviePhile</span>
      </Link>

      <div className={styles.searchbar}>

        <form onSubmit={this.submitHandle}>

          <input type="text" className={styles.searchfield + ' form-control'}
              placeholder="Search movies..."
              onChange={this.handleChange}
              />

        </form>

          </div>

      </div>
    )
  }

}

export default withRouter(Header)
