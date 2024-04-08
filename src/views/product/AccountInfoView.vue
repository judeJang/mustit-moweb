<template>
    <div>
        <button type="button" @click="AccountSelectShow" class="modal_btn">
           구매 계정 선택
        </button>
        <button type="button" @click="AccountGuideShow" class="modal_btn">
           구매 계정 안내
        </button>
        <transition name="fade-ani">
            <div class="layer_node" v-if="isAccountSelectShow">
                <div class="mask" @click="layerClose"></div>
                <div class="layer_insert">
                    <AccountSelect />
                </div>
            </div>
        </transition>
        <transition name="fade-ani">
            <div class="layer_node" v-if="isAccountGuideShow">
                <div class="mask" @click="layerClose"></div>
                <div class="layer_insert">
                    <AccountGuide />
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import EventBus from '@/assets/js/EventBus'
    import AccountSelect from '@/views/layer/product/AccountSelect'
    import AccountGuide from '@/views/layer/product/AccountGuide'

    export default {
        components: {
            AccountSelect,
            AccountGuide,
        },
        data(){
            return{
                isAccountSelectShow: false,
                isAccountGuideShow: false,
            }
        },
        beforeDestroy() {
            EventBus.$off('AccountSelectShow')
            EventBus.$off('AccountSelectClose')
            EventBus.$off('AccountGuideShow')
            EventBus.$off('AccountGuideClose')
        },
        created() {
            const HTML = document.getElementsByTagName('html')[0]
            const BODY = document.body
            EventBus.$on('AccountSelectShow', () => {
                console.log('show')
                this.isAccountSelectShow = true
                HTML.classList.add('html_scroll')
                BODY.classList.add('body_scroll')
            })
            EventBus.$on('AccountSelectClose', () => {
                console.log('hide')
                this.isAccountSelectShow = false
                HTML.classList.remove('html_scroll')
                BODY.classList.remove('body_scroll')
            })
            EventBus.$on('AccountGuideShow', () => {
                console.log('show')
                this.isAccountGuideShow = true
                HTML.classList.add('html_scroll')
                BODY.classList.add('body_scroll')
            })
            EventBus.$on('AccountGuideClose', () => {
                console.log('hide')
                this.isAccountGuideShow = false
                HTML.classList.remove('html_scroll')
                BODY.classList.remove('body_scroll')
            })
        },
        methods: {
            AccountSelectClose() {
                EventBus.$emit('AccountSelectClose')
            },
            AccountGuideClose() {
                EventBus.$emit('AccountGuideClose')
            },
            AccountSelectShow() {
                EventBus.$emit('AccountSelectShow')
            },
            AccountGuideShow() {
                EventBus.$emit('AccountGuideShow')
            },
            layerClose() {
                EventBus.$emit('hideModal')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .modal_btn {
        display: block;
        margin: 100px auto 0;
        width: 200px;
        height: 50px;
        border-radius: 4px;
        font-size: 16px;
        color: #fff;
        background-color: #333;
    }
</style>