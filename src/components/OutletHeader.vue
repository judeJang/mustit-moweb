<template>
    <header
        class="outlet_header self_module"
        :class="{ fade: type === 3 }"
        :style="type === 3 && `background-color: rgba(140,30,70,${ratio})`"
    >
        <div class="header_container">
            <h1 class="blind">머스트잇 스토어</h1>
            <h2 class="header_title">
                <img
                    src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_header/logo_outlet.png"
                    alt="outlet"
                    class="app_logo_title"
                />
            </h2>
            <div class="header_left">
                <IconBack color="white" />
            </div>
            <div class="header_right">
                <IconSearch color="white" router="/etc/outlet_search" v-if="type !== 2" />
                <IconBasket color="white" :itemsCount="20" />
            </div>
        </div>
        <div class="header_search_box" v-if="type === 2">
            <div class="input_box">
                <input
                    type="search"
                    class="input_search"
                    :value="searchTerm"
                    @click="$router.push('/etc/outlet_search')"
                />
                <button type="button" class="btn_clear" @click="clickClear"></button>
            </div>
        </div>
    </header>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    import IconBack from '@/components/BaseHeaderIconBack.vue'
    import IconSearch from '@/components/BaseHeaderIconSearch.vue'
    import IconBasket from '@/components/BaseHeaderIconBasket.vue'

    const searchModule = 'searchModule'
    export default {
        name: 'VOutletHeader',
        components: {
            IconBack,
            IconSearch,
            IconBasket
        },
        props: {
            count: Number,
            type: { type: Number, required: true } // 1: 아울렛 lp / 2: 아울렛 srp / 3: 아울렛 홈
        },
        data() {
            return {
                ratio: 0,
                searchTerm: '맨투맨'
            }
        },
        computed: {
            ...mapGetters(searchModule, ['GE_KEYWORD'])
        },
        methods: {
            ...mapActions(searchModule, ['AC_KEYWORD']),
            onScroll: function () {
                const height = 200 // background opacity 1 이 되는 기준
                let opacity = (height - document.documentElement.scrollTop) / height
                opacity > 1
                    ? (this.ratio = 0)
                    : opacity < 0
                    ? (this.ratio = 1)
                    : (this.ratio = 1 - opacity)
            },
            clickClear: function () {
                this.AC_KEYWORD('')
                this.$router.push('/etc/outlet_search')
            }
        },
        mounted() {
            if (this.type === 3) {
                this.onScroll()
                window.addEventListener('scroll', () => this.onScroll())
            }
            this.type === 2 && this.GE_KEYWORD && (this.searchTerm = this.GE_KEYWORD)
        }
    }
</script>
