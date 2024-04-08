<template>
    <article class="bottom_modal">
        <div class="modal_head">
            <p class="title">카드 선택</p>
            <button type="button" class="layer_close" @click="close"></button>
        </div>
        <div class="modal_body">
            <div class="payment card">
                <span class="btn_box">
                    <button type="button">
                        <i class="creditcard creditcard_kb"></i>KB국민카드
                    </button>
                </span>
                <span class="btn_box">
                    <button type="button">
                        <i class="creditcard creditcard_shinhan"></i>신한카드
                    </button>
                </span>
                <span class="btn_box">
                    <button type="button">
                        <i class="creditcard creditcard_samsung"></i>삼성카드
                    </button>
                </span>
                <span class="btn_box">
                    <button type="button">
                        <i class="creditcard creditcard_hyundai"></i>현대카드
                    </button>
                </span>
                <span class="btn_box">
                    <button type="button">
                        <i class="creditcard creditcard_woori"></i>우리카드
                    </button>
                </span>
                <span class="btn_box">
                    <button type="button">
                        <i class="creditcard creditcard_nh"></i>NH농협카드
                    </button>
                </span>
                <span class="btn_box">
                    <button type="button">
                        <i class="creditcard creditcard_bc"></i>비씨카드(페이북)
                    </button>
                </span>
                <span class="btn_box">
                    <button type="button" class="active">
                        <i class="creditcard creditcard_lotte"></i>롯데카드
                    </button>
                </span>
                <span class="btn_box">
                    <button type="button">
                        <i class="creditcard creditcard_keb"></i>KEB하나카드
                    </button>
                </span>
                <span class="btn_box">
                    <button type="button">
                        <i class="creditcard creditcard_kakaobank"></i>카카오뱅크카드
                    </button>
                </span>

                <span class="btn_box">
                    <button type="button">
                        <i class="creditcard creditcard_citi"></i>씨티카드
                    </button>
                </span>
                <span class="btn_box">
                    <button type="button">
                        <i class="creditcard creditcard_sh"></i>수협카드
                    </button>
                </span>
                <span class="btn_box">
                    <button type="button">
                        <i class="creditcard creditcard_jeju"></i>제주카드
                    </button>
                </span>

                <span class="btn_box">
                    <button type="button">
                        <i class="creditcard creditcard_jeonbuk"></i>전북카드
                    </button>
                </span>
                <span class="btn_box">
                    <button type="button">
                        <i class="creditcard creditcard_kwangju"></i>광주카드
                    </button>
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
