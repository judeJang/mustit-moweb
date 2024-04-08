<template>
    <article class="order_info">
        <div class="title">
            <h2>품절 시 처리 방법</h2>
        </div>
        <div class="soldout_checkbox">
            <BaseCheckboxRed
                text="상품이 품절일 경우 별도의 연락없이 선택한 결제수단으로 환불이 진행되는 내용에 동의합니다."
            />
        </div>
    </article>
</template>

<script>
    import BaseCheckboxRed from '@/components/BaseCheckboxRed.vue'
    export default {
        components: { BaseCheckboxRed }
    }
</script>
