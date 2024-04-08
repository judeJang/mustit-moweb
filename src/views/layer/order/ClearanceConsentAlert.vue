<template>
    <section class="alert_wrap order_clearance_consent_alert">
        <header class="alert_header">
            <h1>통관정보 수집, 제공에 동의</h1>
            <button
                type="button"
                class="layer_close"
                title="close layer"
                @click="close()"
            ></button>
        </header>
        <article class="alert_content">
            <p>
                통관업무를 위해 개인정보를 수집하여 판매자에게 제공하며, 다음 주문 시
                사용할 수 있도록 탈퇴 시까지 저장합니다.
            </p>
        </article>
    </section>
</template>
<script>
    export default {
        methods: {
            close() {
                this.$parent.close()
            }
        }
    }
</script>
