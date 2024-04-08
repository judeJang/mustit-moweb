<template>
    <section class="alert_wrap discount_info">
        <header class="alert_header discount_info">
            <h2>할인내역</h2>
            <button
                type="button"
                class="layer_close"
                title="close layer"
                @click="close()"
            ></button>
        </header>
        <article class="alert_content discount_content">
            <dl class="each_price gray">
                <dt>정상가</dt>
                <dd><del>4,380,000원</del></dd>
            </dl>
            <dl class="each_price">
                <dt>할인가</dt>
                <dd>4,380,000원</dd>
            </dl>
            <hr />
            <dl class="each_price red">
                <dt>할인가</dt>
                <dd>-200,000원</dd>
            </dl>
            <dl class="each_price red">
                <dt>회원할인</dt>
                <dd>-174,000원</dd>
            </dl>
            <dl class="each_price child">
                <dt>단골할인 (관심판매자 등록조건)</dt>
                <dd>-4,000원</dd>
            </dl>
            <dl class="each_price child">
                <dt>핫딜쿠폰</dt>
                <dd>-170,000원</dd>
            </dl>
            <div class="total_benefit">
                <dl>
                    <dt>최대혜택가</dt>
                    <dd>3,246,000원</dd>
                </dl>
            </div>
            <p class="info">
                회원할인가격은 모든 회원 로그인 후 적용이 가능하며, 비회원 구매 시에는
                할인혜택이 적용되지 않습니다.
            </p>
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
