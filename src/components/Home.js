import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import MovieList from './MovieList'
import axios from 'axios'
import {connect} from 'react-redux'
import thunk from 'redux-thunk'
import {getConfig} from '../store/actions'


class Home extends Component  {


    state = {

      nowPlaying:[],
      upComing:[],
      topRated:[],
      position:0,

    }


    componentDidMount(){

        this.props.getConfig()

          setInterval(()=>{
          this.state.position < 4 ?  this.setState((prevState, prevProps) => {
            return {position:prevState.position + 1}
          }): this.setState({position:0})
        }, 5000)

      let apiKey = '164f91a00bb33839a1cc01e1302cd1d0'

      axios.get(`https://api.themoviedb.org/3/configuration?api_key=${apiKey}`)
    .then((res)=>{

        this.setState({config:res.data.images})
    })
    .catch((err)=>{
      console.log(err)
    })


        // get moviies playing now
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
      .then((res)=>{
        this.setState({nowPlaying:res.data.results})

        })
      .catch((err)=>{
        console.log(err)
      })


      // get upcoming movies
  axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
    .then((res)=>{

      this.setState({upComing:res.data.results})

      })
    .catch((err)=>{
      console.log(err)
    })
    // top rated
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
  .then((res)=>{

    this.setState({topRated:res.data.results})

    })
  .catch((err)=>{
    console.log(err)
  })

  }



    render(){
      return (

        <>
        <Header/>


        <Banner
          nowPlaying={this.state.nowPlaying.slice(0, 5)}
          config={this.props.config}
          position={this.state.position}/>


          <MovieList movies={this.state.upComing} config={this.props.config}
            title="UPCOMING"/>


            <MovieList movies={this.state.nowPlaying} config={this.props.config}
              title="NOW PLAYING"/>



            <MovieList movies={this.state.topRated} config={this.props.config}
              title="TOP RATED"/>






        <Footer/>

        </>

      )
    }

}



const mapStateToProps = state => {
  return {
    config: state.config
  }
}


const mapDispatchToProps = dispatch => {
    return{
       getConfig: () => dispatch(getConfig()),

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)
