let brw = process.browser;

export const state = () => ({
  appVersion: process.env.APP_VERSION,
  loading: false,
  appVersion: '0.0.1',
  
})

export const actions = {
  
}

export const mutations = {
  showLoading:  (state) => {
    state.loading = true
  },
  hideLoading:  (state) => {
    state.loading = false
  }
}

