import {
    TOLOGIN,
    TOPHONE,
    TOEMAIL
} from '../mutation-types' 
const state = {
    isLogin: true,
    isEmail: false,
    isPhone: false
}
const mutations = {
    [TOLOGIN](state,isLogin){
        state.isLogin = isLogin
    },
    [TOEMAIL](state,isEmail){
        state.isEmail = isEmail
    },
    [TOPHONE](state,isPhone){
        state.isPhone = isPhone
    },
}
const actions = {
    toLogin({commit},isLogin){
        commit(TOLOGIN,isLogin)
    },
    toPhone({commit},isEmail){
        commit(TOPHONE,isEmail)
    },
    toEmail({commit},isPhone){
        commit(TOEMAIL,isPhone)
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}