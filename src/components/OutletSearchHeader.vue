<template>
    <header class="outlet_search_header self_module">
        <div class="search_area">
            <div class="input_box">
                <button type="button" class="btn_search" @click="submit('button')">
                    <i class="icon_search"></i>
                    <span class="blind">검색</span>
                </button>
                <input
                    type="text"
                    :value="inputText"
                    placeholder="아울렛 상품을 검색해보세요."
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
                ></button>
            </div>
        </div>
        <div class="btn_area">
            <button type="button" class="btn_back" @click="$router.go(-1)">취소</button>
        </div>
    </header>
</template>

<script>
    import EventBus from '@/assets/js/EventBus'
    import { mapActions, mapGetters } from 'vuex'
    const searchModule = 'searchModule'
    export default {
        props: {
            searchText: { type: String, default: '' }
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
            },
            focusOut() {
                setTimeout(() => (this.inputFocus = false), 10)
            },
            submit(e) {
                if (e.key == 'Enter' || e === 'button') {
                    this.AC_KEYWORD(this.inputText)
                    this.$router.push('/etc/outlet_srp')
                }
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
            document.addEventListener('scroll', () => {
                if (this.$refs.searchInput) {
                    this.$refs.searchInput.blur()
                    this.focusOut()
                }
            })
        }
    }
</script>
