const HTML = document.getElementsByTagName('html')[0]
const BODY = document.body

const drawer = {
    namespaced: true,
    state: {
        drawerOpen: false
    },
    mutations: {
        toggleDrawer(state) {
            if (state.drawerOpen) {
                state.drawerOpen = false
                HTML.classList.remove('html_scroll')
                BODY.classList.remove('body_scroll')
            } else {
                state.drawerOpen = true
                HTML.classList.add('html_scroll')
                BODY.classList.add('body_scroll')
            }
        }
    },
    actions: {
        toggleDrawer({ commit }) {
            commit('toggleDrawer')
        }
    }
}

export default drawer
