const deem = {
    namespaced: true,
    state: {
        deemShow: false,
        addClass: ''
    },
    mutations: {
        deemState(state) {
            if (state.deemShow) {
                state.deemShow = false
            } else {
                state.deemShow = true
            }
        },
        deemClass(state, name) {
            state.addClass = name
        }
    },
    actions: {
        toggleDeem({ commit }) {
            commit('deemState')
        },
        setAddClass({ commit }, name) {
            commit('deemClass', name)
        }
    }
}

export default deem
