import React from 'react'
import styles from '../styles/MovieCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'


const MovieCard = (props) => {

  console.log('MOVIE CARD PROPS', props)

  let posterpath  =   props.config ?  props.config.base_url+
              props.config.poster_sizes[1] +
              props.movie.poster_path : ''

  let posterpathAttr =  'url(' + posterpath + ')'


  return (
        <div className="col-sm-2">

            <Link to= {"/movie/" + props.movie.id}>

            <div className={styles.card} style={{backgroundImage:posterpathAttr}}>

                <div className={styles.rating}>


                <FontAwesomeIcon icon="star" className={styles.star} />

                <span className={styles.ratingNum} style={{color:'white'}}> {props.movie.vote_average} </span>

                </div>


            </div>

            </Link>

        </div>
  )
}


export default MovieCard
