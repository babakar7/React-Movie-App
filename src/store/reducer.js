const initalState = {

  config:{}
}


const reducer = (state= initalState, action) => {

    switch(action.type){
      case 'STORE_RESULT':
        return {
          config:action.getConfig
        }
        default:
        return state
    }


}


export default reducer
