import React from 'react'
import styles from '../styles/Banner.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'




const  Banner = (props) => {

  let base_url = props.config.base_url
  let size = props.config.backdrop_sizes ? props.config.backdrop_sizes[2] : ''
  let imgpath =  props.nowPlaying[props.position] ? props.nowPlaying[props.position].backdrop_path : ''
  let backImg = base_url + size +  imgpath
  let backAttr = 'linear-gradient( rgba(0, 0, 0, 0.4),  rgba(0, 0, 0, 0.4) ), url(' + backImg + ')'

  let progresswidth = '0%'

    switch(props.position){
          case 0:
            progresswidth =  '20%'
            break;
          case 1:
            progresswidth =  '40%'
              break;
          case 2:
            progresswidth =  '60%'
              break;
            case 3:
              progresswidth =  '80%'
              break;
            case 4:
              progresswidth =  '100%'
                break;
        }

        let linkto =  props.nowPlaying[props.position] ? props.nowPlaying[props.position].id : ''


  return (


    <Link to= {"/movie/"  + linkto}>

    <div style={{backgroundImage:backAttr}} className={styles.Banner}>



          <div className={styles.progress + ' progress'} >
                <div className={styles.progressBar + ' progress-bar'} role="progressbar" style={{width:progresswidth}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

          {props.nowPlaying[props.position] ?




            <div className={styles.info}>

            <h1 className={styles.tag}> LATEST</h1>
            <h1 className= {styles.movieTitle}> {props.nowPlaying[props.position].title}  </h1>
            <p className={styles.details}>
                   <FontAwesomeIcon icon="star" />
                   <span> {props.nowPlaying[props.position].vote_average} </span>
            </p>

            </div>




            :  null}



    </div>

    </Link>


  )

}


export default Banner
