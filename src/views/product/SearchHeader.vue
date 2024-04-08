<template>
    <header class="search_header self_module">
        <h1 class="blind">머스트잇 스토어</h1>
        <div class="btn_area" v-if="showBack()">
            <IconBack />
        </div>
        <div class="search_area">
            <div class="input_box">
                <input
                    type="text"
                    :value="inputText"
                    placeholder="검색어를 입력하세요."
                    autocomplete="off"
                    class="input_search"
                    @fouse="inputFocus = true"
                    @blur="focusOut()"
                    @input="changeInput($event)"
                    @keydown.enter="submit"
                    enterkeyhint="search"
                    ref="searchInput"
                    autofocus
                />
                <button
                    type="button"
                    class="btn_clear"
                    v-if="!inputEmpty"
                    @click="textClear()"
                    aria-label="검색어 삭제"
                ></button>
            </div>
        </div>
        <div class="right_area" v-if="showBasket()">
            <IconBasket :itemsCount="50" />
        </div>
    </header>
</template>

<script>
    /*
        type
            1 : 검색화면 -> 뒤로가기 + 검색폼
            2 : 서브검색화면 -> 뒤로가기 + 검색폼 + 장바구니
            3 : 카테고리 홈 -> 검색폼 + 장바구니
    */
    import EventBus from '@/assets/js/EventBus'
    import { mapActions, mapGetters } from 'vuex'

    import IconBack from '@/components/BaseHeaderIconBack.vue'
    import IconBasket from '@/components/BaseHeaderIconBasket.vue'
    const searchModule = 'searchModule'

    export default {
        components: { IconBack, IconBasket },
        props: {
            searchText: { type: String, default: '' },
            type: { type: Number, required: true }
        },
        data() {
            return {
                inputText: '',
                inputEmpty: true,
                inputFocus: false,
                count: 55
            }
        },
        computed: {
            ...mapGetters(searchModule, ['GE_KEYWORD'])
        },
        methods: {
            ...mapActions(searchModule, ['AC_KEYWORD']),
            changeInput: function (e) {
                const value = e.target.value
                this.inputFocus = true
                this.inputText = value
            },
            textClear() {
                this.inputText = ''
                this.$refs.searchInput.focus()
            },
            focusOut() {
                setTimeout(() => (this.inputFocus = false), 10)
            },
            submit(e) {
                if (e.key == 'Enter' || e === 'button') {
                    this.AC_KEYWORD(this.inputText)
                    this.$router.push('/listpage')
                }
            },
            showBasket() {
                return this.type !== 1
            },
            handleScroll() {
                // 스크롤 시 인풋에 값이 있으면 포커스가 유지
                // 값이 없으면 포커스 사라짐
                if (this.inputText.length === 0) {
                    this.$refs.searchInput.blur()
                    this.focusOut()
                }
            },
            showBack() {
                return this.type !== 3
            }
        },
        watch: {
            inputText(val) {
                if (val == '') {
                    this.inputEmpty = true
                } else {
                    this.inputEmpty = false
                }
                EventBus.$emit('changeSearchText', val)
            }
        },
        mounted() {
            this.inputText = this.GE_KEYWORD
            document.addEventListener('scroll', this.handleScroll, false)
        },
        destroyed() {
            document.removeEventListener('scroll', this.handleScroll, false)
        }
    }
</script>
