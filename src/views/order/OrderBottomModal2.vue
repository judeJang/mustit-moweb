<template>
    <article class="bottom_modal">
        <div class="modal_head">
            <p class="title">할부 선택</p>
            <button type="button" class="layer_close" @click="close"></button>
        </div>
        <div class="modal_body">
            <div class="payment installment">
                <span class="btn_box">
                    <button type="button" class="active">일시불</button>
                </span>
                <span class="btn_box">
                    <button type="button">2개월 (무이자)</button>
                </span>
                <span class="btn_box">
                    <button type="button">3개월 (무이자)</button>
                </span>
                <span class="btn_box">
                    <button type="button">4개월 (무이자)</button>
                </span>
                <span class="btn_box">
                    <button type="button">5개월 (무이자)</button>
                </span>
                <span class="btn_box">
                    <button type="button">6개월 (무이자)</button>
                </span>
                <span class="btn_box">
                    <button type="button">7개월</button>
                </span>
                <span class="btn_box">
                    <button type="button">8개월</button>
                </span>
                <span class="btn_box">
                    <button type="button">9개월</button>
                </span>
                <span class="btn_box">
                    <button type="button">10개월</button>
                </span>
                <span class="btn_box">
                    <button type="button">11개월</button>
                </span>
                <span class="btn_box">
                    <button type="button">12개월</button>
                </span>
            </div>
        </div>
    </article>
</template>
<script>
    import EventBus from '@/assets/js/EventBus'
    export default {
        components: {},
        data: function () {
            return {}
        },
        props: {
            isModalOpen: Boolean
        },
        methods: {
            close() {
                EventBus.$emit('bottomHideModal')
            }
        }
    }
</script>
<style scoped></style>
