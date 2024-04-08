<template>
    <!-- 임시 -->
    <div>
        <button type="button" @click="statementModalOpen()" class="modal_btn">
            신고하기 팝업보기
        </button>
        <!-- 신고하기 팝업보기 -->
        <transition name="slide-up">
            <div class="layer_node" v-if="isStatementModalOpen">
                <ProductDetailStatementModal />
            </div>
        </transition>
        <!-- // 신고하기 팝업보기 -->
    </div>
</template>

<script>
    import EventBus from '@/assets/js/EventBus'
    import ProductDetailStatementModal from '@/views/product/ProductDetailStatementModal'
    export default {
        components: {
            ProductDetailStatementModal
        },
        data() {
            return {
                isStatementModalOpen: true
            }
        },
        created() {
            const HTML = document.getElementsByTagName('html')[0]
            const BODY = document.body
            EventBus.$on('statementModalOpen', () => {
                this.isStatementModalOpen = true
                HTML.classList.add('html_scroll')
                BODY.classList.add('body_scroll')
            })
            EventBus.$on('statementModalClose', () => {
                this.isStatementModalOpen = false
                HTML.classList.remove('html_scroll')
                BODY.classList.remove('body_scroll')
            })
        },
        beforeDestroy() {
            EventBus.$off('statementModalOpen')
            EventBus.$off('statementModalClose')
        },
        methods: {
            statementModalOpen() {
                EventBus.$emit('statementModalOpen')
            }
        }
    }
</script>

<style scoped>
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
