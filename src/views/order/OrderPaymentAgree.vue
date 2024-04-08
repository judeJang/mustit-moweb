<template>
    <article class="order_info">
        <div class="title">
            <h2>결제동의</h2>
        </div>
        <!-- // title -->

        <div class="agree_list">
            <p>주문할 상품정보(상품명, 가격, 배송정보)에 동의</p>
            <button type="button">전자금융거래 이용약관에 동의</button>
            <button type="button">개인정보 수집 및 이용동의</button>
            <button type="button">개인정보 판매자 제공에 대한 동의</button>
        </div>
        <!-- // agree_list -->
        <div class="agree_desc">
            <div class="checkbox_container">
                <BaseCheckboxRed text="구매조건 확인 및 결제 진행 동의 (필수)" />
            </div>
            <div class="checkbox_container">
                <BaseCheckboxRed text="개인정보 제 3자 제공 동의 (필수)" />
            </div>
            <!--  // checkbox_container -->
            <p>주문내용을 확인하였으며, 결제에 동의합니다.</p>
            <button type="button" :class="[isDisabled ? 'disable ' : '']">
                총 338,000원 결제하기
            </button>
        </div>
    </article>
</template>

<script>
    import BaseCheckboxRed from '@/components/BaseCheckboxRed.vue'
    export default {
        components: { BaseCheckboxRed },
        data: function () {
            return {
                // 결제하기 버튼 상태(활성,비활성)
                isDisabled: true
            }
        },

        methods: {}
    }
</script>

<style></style>
