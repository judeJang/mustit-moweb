const comparePriceStore = {
    namespaced: true,
    state: {
        toastShow: false,
        toastMsg: ''
    },
    mutations: {
        setToastToggle(state, isOpen) {
            state.toastShow = isOpen
            if (state.toastShow) {
                setTimeout(() => (state.toastShow = false), 2000)
            }
        },
        setToastMsg(state, str) {
            state.toastMsg = str
        }
    },
    actions: {
        setToastToggleAction({ commit }, payload) {
            commit('setToastToggle', payload)
        },
        setToastMsgAction({ commit }, payload) {
            commit('setToastMsg', payload)
        }
    }
}

export default comparePriceStore
