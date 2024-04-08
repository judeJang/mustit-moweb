<template>
    <article class="order_info">
        <div class="title">
            <h2>최종 결제정보</h2>
        </div>
        <!-- // title -->
        <div class="payment_info_list">
            <dl class="quantity">
                <dt>상품수</dt>
                <dd>1</dd>
            </dl>
            <dl>
                <dt>상품금액</dt>
                <dd>198,000</dd>
            </dl>
            <dl>
                <dt>할인금액</dt>
                <dd>-1,000</dd>
            </dl>
            <!-- <dl>
                <dt>적립금</dt>
                <dd>-100,000</dd>
            </dl>
            <dl>
                <dt>상품권</dt>
                <dt>-50,000</dt>
            </dl> -->
            <dl>
                <dt>배송비</dt>
                <dd>+20,000</dd>
            </dl>
            <div class="total_price">
                <h4>총 결제금액</h4>
                <div class="result">338,000<span>원</span></div>
            </div>
        </div>
        <!-- 관부가세 미포함 -->
        <div class="without_tax_msg">
            관부가세 미포함 상품이 있습니다.<br />
            통관 시 추가 비용이 발생할 수 있습니다.
            <i class="icon" @click="openAlert()"></i>
        </div>

        <!-- 포인트 전액 결제 시 -->
        <div class="total_point">
            <dl>
                <dt>포인트 전액 결제</dt>
                <dd>
                    적립금, 상품권을 이용하여 현금과 동일하게 결제 가능한 서비스입니다.
                </dd>
            </dl>
        </div>
        <!-- payment_info_list -->
    </article>
</template>
<script>
    export default {
        data: function () {
            return {
                isOpen: false
            }
        },
        methods: {
            openAlert() {
                this.$parent.openAlert()
            }
        }
    }
</script>
