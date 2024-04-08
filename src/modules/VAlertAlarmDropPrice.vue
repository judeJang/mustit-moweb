<template>
    <section class="alert_wrap alarm_price_drop">
        <header class="alert_header">
            <h2>가격하락 알림</h2>
            <button
                type="button"
                class="layer_close"
                title="close layer"
                @click="close()"
            ></button>
        </header>
        <article class="alert_content">
            <div class="alert_item_info">
                <div class="img_wrap">
                    <img src="https://dummyimage.com/180x80/000/fff" alt="" />
                </div>
                <div class="text_wrap">
                    <p class="brand">THOM BROWNE</p>
                    <p class="desc">톰브라운 밀라노 스티치 가디건 MKC171A 00219 035</p>
                </div>
            </div>
            <hr />
            <p class="bottom_txt">가격하락 알림은 카카오 알림톡으로 발송됩니다.</p>
            <p class="bottom_txt">알림 신청 후 30일 안에 가격하락 시 발송됩니다.</p>
            <p class="bottom_txt">한 상품에서 가격하락 알림은 1회 발송됩니다.</p>
            <div class="bottom_btn">
                <button type="button" class="white" @click="cancel">취소</button>
                <button type="button" @click="apply">알림 신청</button>
            </div>
        </article>
    </section>
</template>
<script>
    import { mapActions } from 'vuex'

    export default {
        methods: {
            ...mapActions('comparePriceModule', [
                'setToastToggleAction',
                'setToastMsgAction'
            ]),
            close() {
                this.$parent.close()
            },
            cancel() {
                this.setToastMsgAction('')
                this.close()
            },
            apply() {
                this.setToastMsgAction('가격하락 알림이 신청되었습니다.')
                this.setToastToggleAction(true)
                this.close()
            }
        }
    }
</script>
