<template>
    <section class="common_alert_wrap grade_upgrade_period">
        <header class="common_alert_header">
            <h1>등급 산정기간 안내</h1>
            <button
                type="button"
                class="layer_close"
                title="close layer"
                @click="close()"
            ></button>
        </header>
        <article class="common_alert_content">
            <p class="info_desc">기간 : 당월 직전 6개월간</p>
            <p class="info_desc">
                대상 : 주문상태가 <strong>‘구매완료’인 주문 건</strong>의 실
                결제금액(배송비, 오프라인 매장 구매 제외)으로 계산
            </p>
            <p class="info_desc">갱신 : 매월 1일</p>
            <p class="info_desc2">
                <strong>※ 구매완료란 ?</strong> 배송완료된 주문을 ‘구매결정’한 상태를
                의미함<br />
                마이페이지 > 주문내역 조회에서 ‘구매완료’건 확인 가능
            </p>
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
                EventBus.$emit('hideModal')
            }
        }
    }
</script>
<style scoped></style>
