<template>
    <section class="alert_wrap duty_tax_alert">
        <header class="alert_header">
            <h2>관부가세란?</h2>
            <button
                type="button"
                class="layer_close"
                title="close layer"
                @click="close()"
            ></button>
        </header>
        <article class="alert_content">
            <p>
                해외에서 구매한 상품을 수입 신고 시 납부해야 하는 관세와 부가세를
                말합니다. 관부가세 미포함인 경우 <strong>구매 금액이 약 $150</strong>을
                넘을 시 관/부가세가 발생할 수 있으며, 구매한 여러 개의 상품이
                <strong>동일한 날짜에 통관 될 경우 합산과세</strong>가 발생할 수 있습니다.
            </p>
            <h3>납부 방법</h3>
            <p>
                관부가세는 통관 시 통관 대행사에서 관부가세 납부 방법에 대한 안내문을
                발송하며 안내에 따라 납부하시면 통관이 완료됩니다.
            </p>
        </article>
    </section>
</template>
<script>
    export default {
        methods: {
            close() {
                this.$parent.closeAlert()
            }
        }
    }
</script>
