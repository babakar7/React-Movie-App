import React, {Component} from 'react'
import Header from './Header'
import axios from 'axios'
import styles from '../styles/MovieDetails.module.css'
import {connect} from 'react-redux'
import thunk from 'redux-thunk'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from './Footer'


class MovieDetails extends Component {

  state = {
    movieDetails:{},
    backImg:'',
    posterpath:''
  }

  back = () => {

    this.props.history.push('/')
  }

  componentDidMount(){




     let apiKey = '164f91a00bb33839a1cc01e1302cd1d0'


     axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${apiKey}`)
       .then((response)=>{


         this.setState({movieDetails: response.data,
                        backImg: this.props.config.base_url + this.props.config.backdrop_sizes[2] +
                         response.data.backdrop_path,
                       posterpath: this.props.config.base_url + this.props.config.poster_sizes[1] + response.data.poster_path})

       })

      .catch((err)=>{
        console.log(err)
      })
  }


  render() {




      return(
        <div>
            <div className={styles.movie + ' container-fluid'}>


                  <FontAwesomeIcon icon="chevron-left" className={styles.back}
                          size="4x" style={{color:'white'}}
                            onClick={this.back}/>

                <div className={styles.banner} style={{background:'linear-gradient( rgba(0, 0, 0, 0.4),  rgba(0, 0, 0, 0.4) ), url('+ this.state.backImg +')'}}>

                </div>

                <div className={styles.detailsWrapper + ' container'}>

                  <div className={styles.movieCard} style={{background:'linear-gradient( rgba(0, 0, 0, 0.4),  rgba(0, 0, 0, 0.4) ),url('+ this.state.posterpath +')'}}>

                  </div>



                  <div className={styles.details}>
                      <h1 className={styles.movieTitle}> {this.state.movieDetails.title}</h1>
                      <h1 className={styles.released}> Released | {this.state.movieDetails.original_language} </h1>

                      <FontAwesomeIcon icon="star"/>
                      <span className={styles.vote}> {this.state.movieDetails.vote_average}</span>

                  </div>


                  <div className={styles.synopsis}>

                    <h1 className={styles.tagSynopsis}>SYNOPSIS </h1>

                    <p className={styles.overview}>{this.state.movieDetails.overview} </p>

                  </div>

                </div>

            </div>

            <Footer></Footer>
        </div>
      )
  }

}

const mapStateToProps = state => {
  return {
    config: state.config
  }
}


export default connect(mapStateToProps)(MovieDetails)
