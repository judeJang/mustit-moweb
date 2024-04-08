<template>
    <section class="common_alert_wrap account_list">
        <header class="common_alert_header">
            <h1>구매 계정 안내</h1>
            <button
                type="button"
                class="layer_close"
                title="close layer"
                @click="close()"
            ></button>
        </header>
        <article class="common_alert_content">
            <p class="info">
                구매 계정이 있습니다. 구매 시에는 본인인증 된 계정을 이용해 주세요.
            </p>
            <p class="tip">
                선택한 계정으로 로그인 시 장바구니는 비워지므로 상품을 다시 담아주세요.
            </p>
            <div class="inner_scroll">
                <p class="your_id verified">grkimT***</p>
            </div>
            <div class="btn_box">
                <button
                    type="button"
                    class="bottom_btn"
                    title="close layer"
                    onclick="popup_close_fade();"
                >
                    로그인
                </button>
            </div>
        </article>
    </section>
</template>
<script>
    import EventBus from '@/assets/js/EventBus'
    export default {
        components: {},
        data: function () {
            return {}
        },
        methods: {
            close() {
                EventBus.$emit('AccountGuideClose')
            }
        }
    }
</script>
<style scoped></style>
