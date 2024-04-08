const search = {
    namespaced: true,
    state: {
        keyword: ''
    },
    getters: {
        GE_KEYWORD: (state) => state.keyword
    },
    mutations: {
        SET_KEYWORD: (state, payload) => {
            console.log('store ==>', payload)
            state.keyword = payload
        }
    },
    actions: {
        AC_KEYWORD: ({ commit }, payload) => {
            commit('SET_KEYWORD', payload)
        }
    }
}

export default search
