import React, {Component} from 'react'
import MovieCard from './MovieCard'
import styles from '../styles/MovieList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../styles/MovieList.css'
import { CSSTransitionGroup } from 'react-transition-group'
import FlipMove from 'react-flip-move';





class MovieList extends Component{


  state = {
     start:0,
     end:6,
  }

    prevHandler = () => {

      if(!this.state.start == 0){

        console.log('start not zero')

        this.setState((prevState, prevProps) => {
          return {
            start: prevState.start - 1,
            end: prevState.end -1
          }
        })

      } else {

        console.log('start is zero')

        this.setState((prevState, prevProp) => {
          return {
            start: this.props.movies.length - 6,
            end: this.props.movies.length
          }
        })
      }

    }


    nextHandler = () => {

      if(this.state.end < this.props.movies.length){


      this.setState((prevState, prevProps) => {
        return {
          start: prevState.start + 1,
          end: prevState.end + 1
        }
      })


    } else{

      this.setState((prevState, prevProps) => {
        return {
          start: 0,
          end: 6
        }
      })

    }

    }

  render(){


        let movielist = this.props.movies.map((movie)=> {
          return <MovieCard key={movie.id}  movie={movie} config={this.props.config}> </MovieCard>

        })



    return (

      <div className={styles.wrapper + ' container-fluid'}>

      <h5 className={styles.title}>{this.props.title}</h5>


      <FontAwesomeIcon icon="chevron-left" className={styles.arrowLeft}
              size="4x" style={{color:'#4776c1'}}
                onClick={this.prevHandler}/>

          <div className="container">

            <div className={styles.rowsize + ' row'}>





                {movielist.slice(this.state.start, this.state.end)}





            </div>

          </div>

       <FontAwesomeIcon icon="chevron-right" className={styles.arrowRight}
                  size="4x" style={{color:'#4776c1'}}
                    onClick={this.nextHandler}/>


          <hr className={styles.separator}/>
      </div>

    )


  }



}



export default MovieList
