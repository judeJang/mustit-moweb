const HTML = document.getElementsByTagName('html')[0]
const BODY = document.body

const fixBody = function () {
    HTML.classList.add('html_scroll')
    BODY.classList.add('body_scroll')
}
const clearBody = function () {
    HTML.classList.remove('html_scroll')
    BODY.classList.remove('body_scroll')
}

const modalStore = {
    namespaced: true,
    state: {
        modal1Open: false,
        modal2Open: false,
        modal3Open: false,
        slideUpOpen: false,
        slideComponentName: '',
        fadeInOpen: false,
        fadeComponentName: ''
    },
    mutations: {
        setModal1Open(state, isOpen) {
            state.modal1Open = isOpen
            if (state.modal1Open) {
                HTML.classList.add('html_scroll')
                BODY.classList.add('body_scroll')
            } else {
                HTML.classList.remove('html_scroll')
                BODY.classList.remove('body_scroll')
            }
        },
        setModal2Open(state, isOpen) {
            state.modal2Open = isOpen
            if (state.modal2Open) {
                HTML.classList.add('html_scroll')
                BODY.classList.add('body_scroll')
            } else {
                HTML.classList.remove('html_scroll')
                BODY.classList.remove('body_scroll')
            }
        },
        setModal3Open(state, isOpen) {
            state.modal2Open = isOpen
            if (state.modal2Open) {
                HTML.classList.add('html_scroll')
                BODY.classList.add('body_scroll')
            } else {
                HTML.classList.remove('html_scroll')
                BODY.classList.remove('body_scroll')
            }
        },
        slideUpModalToggle(state, bool) {
            state.slideUpOpen = bool
            if (state.slideUpOpen) {
                fixBody()
            } else {
                clearBody()
            }
        },
        setSlideComponentNameMutation(state, name) {
            state.slideComponentName = name
        },
        fadeInModalToggle(state, bool) {
            state.fadeInOpen = bool
            if (state.fadeInOpen) {
                fixBody()
            } else {
                clearBody()
            }
        },
        setFadeComponentNameMutation(state, name) {
            state.fadeComponentName = name
        }
    },
    actions: {
        openModal1({ commit }) {
            commit('setModal1Open', true)
        },
        closeModal1({ commit }) {
            commit('setModal1Open', false)
        },
        openModal2({ commit }) {
            commit('setModal2Open', true)
        },
        closeModal2({ commit }) {
            commit('setModal2Open', false)
        },
        openModal3({ commit }) {
            commit('setModal3Open', true)
        },
        closeModal3({ commit }) {
            commit('setModal3Open', false)
        },
        slideUpModalAction({ commit }, payload) {
            commit('slideUpModalToggle', payload)
        },
        setSlideComponentName({ commit }, payload) {
            commit('setSlideComponentNameMutation', payload)
        },
        setFadeComponentName({ commit }, payload) {
            commit('setFadeComponentNameMutation', payload)
        },
        fadeModalAction({ commit }, payload) {
            commit('fadeInModalToggle', payload)
        }
    }
}

export default modalStore
