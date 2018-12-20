import axios from 'axios'

  export const getConfig = () => {

      return (dispatch) => {

        let apiKey = '164f91a00bb33839a1cc01e1302cd1d0'

          axios.get(`https://api.themoviedb.org/3/configuration?api_key=${apiKey}`)
        .then((res)=>{

            dispatch(saveConfig(res.data.images))
        })
        .catch((err)=>{
          console.log(err)
        })

      }

    }


   export const saveConfig = (config) =>{

     console.log({config})
      return {
        type:'STORE_RESULT',
        getConfig:config
      }
   }
