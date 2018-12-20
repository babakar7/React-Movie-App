import {store} from '../index.js'


const initalState = {

  config:{}
}





const reducer = (state= initalState, action) => {

  console.log({action})
    switch(action.type){
      case 'STORE_RESULT':
      console.log('ran')
        return {
          config:action.getConfig
        }
        default:
        return state
          console.log('didnt run')
    }


}


export default reducer
