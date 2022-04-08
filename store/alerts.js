
  export const state = () => ({
    info: null,
    error: null,
    warning: null,
    isInfoShowed: false,
    isErrorShowed: false,
    isWarningShowed: false,
    
  })


  export const mutations = {
    
    showError:  (state) => {
      state.isErrorShowed = true
    },
    hideError:  (state) => {
      state.isErrorShowed = false
    },
    setTextError: (state, text) => {
      state.error = text
      state.isErrorShowed = true
    },
    setApiError: (state, error) => {

      let message = 'Ocurrió un error!'
      if (error.response) {

        if(error.response.data){
          if(error.response.data.error){
            message = error.response.data.error
          }else{
            message = error.response.data
          }
        }else{
          message = error.response.status
        }

      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        //console.log("error.request:");
        //console.log(error.request);
        message = error.message
      } else {
        // Something happened in setting up the request that triggered an Error
        message = error.message
      }
      
      state.error = message
      
      if(state.isErrorShowed==true)state.isErrorShowed=false
      state.isErrorShowed = true
    },

  }

export const actions = {}
export const getters = {};
