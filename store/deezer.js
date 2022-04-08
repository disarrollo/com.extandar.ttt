let brw = process.browser;
import Vue from 'vue';
const ENDPOINT = 'https://api.deezer.com/';
const APP_ID = '536162';
const DOMAIN = 'ttt.extandar.com';
const LIMIT = 15;

export const state = () => ({
  	list: [],
})

export const actions = {

	initialize ({commit}, payload)  {
      	DZ.init({
            appId  : APP_ID,
            channelUrl : 'https://'+DOMAIN+'/examples/channel.php',
        });
    },
    search ({commit}, payload)  {
      	commit('showLoading',null,{ root: true }); 
      	
      	const query = payload.term;

      	DZ.api('/search','GET', {q : query, limit: LIMIT}, function(response){
            commit('setList',response.data);
            commit('hideLoading',null,{ root: true }); 
        });
    }
};

export const getters = {};

export const mutations = {
  	setList: (state, data) => {
    	state.list = data
  	},
};
