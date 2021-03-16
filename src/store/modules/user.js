import { reqLogin } from '@/api/user'
import { getToken, setToken } from '@/utils/auth'
const state = {
  tokenInfo: getToken() || null
}
const mutations = {
  setToken(state, newToken) {
    state.tokenInfo = newToken
    setToken(newToken)
  }
}
const actions = {
  login(context, data) {
    return new Promise((resolve, reject) => {
      reqLogin(data).then((res) => {
        const newToken = res.data
        context.commit('setToken', newToken)
        resolve(res)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

