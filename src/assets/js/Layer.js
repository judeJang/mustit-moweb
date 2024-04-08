import AlertFrame from '@/views/layer/VAlertModalFrame.vue'
import FullModalFrame from '@/views/layer/VFullModalFrame.vue'

export default {
    install(Vue) {
        const HTML = document.getElementsByTagName('html')[0]
        const BODY = document.body

        function lockScroll() {
            HTML.classList.add('html_scroll')
            BODY.classList.add('body_scroll')
        }
        function unlockScroll() {
            HTML.classList.remove('html_scroll')
            BODY.classList.remove('body_scroll')
        }

        /*
            alert 모달
        */
        const Alert = Vue.extend(AlertFrame)
        let alertInstance = null
        Vue.Alert = {}
        //open
        Vue.Alert.open = function (component) {
            if (alertInstance) {
                alertInstance.showLayer = true
                alertInstance.path = component
                return
            }
            alertInstance = new Alert({
                el: document.createElement('div'),
                data() {
                    return {
                        path: component
                    }
                },
                watch: {
                    showLayer(update) {
                        if (update) {
                            lockScroll()
                        } else {
                            unlockScroll()
                        }
                    }
                }
            })
            alertInstance.showLayer = true
            BODY.querySelector('#app').appendChild(alertInstance.$el)
        }
        //close
        Vue.Alert.close = function () {
            alertInstance.showLayer = false
        }

        /*
            전체 모달
        */
        const FullModal = Vue.extend(FullModalFrame)
        let fullModalInstance = null

        Vue.FullModal = {}

        Vue.FullModal.open = function (oneDepth, twoDepth = '') {
            if (fullModalInstance) {
                fullModalInstance.isFullModalOpen = true
                fullModalInstance.oDepth = oneDepth
                fullModalInstance.tDepth = twoDepth
                return
            }

            fullModalInstance = new FullModal({
                el: document.createElement('div'),
                data() {
                    return {
                        oDepth: oneDepth,
                        tDepth: twoDepth
                    }
                },
                watch: {
                    isFullModalOpen(update) {
                        if (update) {
                            lockScroll()
                        } else {
                            unlockScroll()
                        }
                    }
                }
            })
            fullModalInstance.isFullModalOpen = true
            BODY.querySelector('#app').appendChild(fullModalInstance.$el)
        }
    }
}

//Alert 사용
