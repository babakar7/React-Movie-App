import React, {Component} from 'react'
import {connect} from 'react-redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import Header from './Header'
import Footer from './Footer'
import MovieCard from './MovieCard'
import styles from '../styles/SearchResults.module.css'


class SearchResults extends Component {


  state = {
    movies:[]
  }


  componentDidMount(){


      let query = new URLSearchParams(this.props.location.search).get('search')

      console.log(query)
      let apiKey = '164f91a00bb33839a1cc01e1302cd1d0'


      axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`)
            .then((res)=>{


                this.setState({movies:res.data.results})

              })
            .catch((err)=>{
              console.log(err)
            })

      }



  render(){
    let query = new URLSearchParams(this.props.location.search).get('search')


    console.log('CONFIGURATION',this.props)

    let movielist = this.state.movies.map((movie) => {

      return <MovieCard key={movie.id} movie={movie} config={this.props.config}/>

    })


    return (

      <div>

        <Header/>

        <h2 className={styles.searchTag}>SEARCH RESULTS FOR {query} </h2>

        <hr className={styles.separator}/>


        <div className={styles.movies}>

            {this.props.config ? movielist: null}

        </div>

          <Footer/>
          
      </div>

    )

  }


}
const mapStateToProps = state => {
  return {
    config: state.config
  }
}


export default connect(mapStateToProps)(SearchResults)
