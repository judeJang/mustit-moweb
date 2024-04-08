import Vue from 'vue'
import Vuex from 'vuex'
import modal from '@/store/modules/modalStore'
import search from '@/store/modules/searchKeyword'
import drawer from '@/store/modules/drawerStore'
import deem from '@/store/modules/deemStore'
import comparePrice from '@/store/modules/comparePriceStore'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        modalModule: modal,
        searchModule: search,
        drawerModule: drawer,
        deemModule: deem,
        comparePriceModule: comparePrice
    }
})

export default store
