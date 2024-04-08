<template>
    <!-- 할인혜택 적용했을 경우 -->
    <article class="order_info" :class="[isOpen ? 'toggle_open' : 'toggle_hide']">
        <div class="title">
            <h2>주문상품</h2>
            <div class="summary">
                <span class="name">에어 조던 1 KO 시카고에어 조던 1 KO 시카고</span>
                <span class="text">포함</span> 1건
            </div>

            <div class="arr_container" @click="toggle"></div>
            <!-- 클릭영역 -->
        </div>
        <!-- // title -->
        <div class="toggle_box" v-show="isOpen">
            <div class="order_item">
                <div class="product_container">
                    <div class="img_wrap">
                        <img
                            src="https://image.mustit.co.kr/lib/upload/admin/ranking/product/3990f6eeccbd7adbba5ce1c954845a0e.jpg/_dims_/resize/280x280/extent/280x280/quality/80"
                            alt="product"
                            class="cover_img"
                        />
                    </div>
                    <div class="info_container">
                        <div class="brand">
                            <p class="brand_name">Air Jordan</p>
                            <p class="badge"></p>
                        </div>
                        <p class="name">에어 조던 1 KO 시카고 빨검흰 DA9089-100</p>
                        <p class="option">
                            <span class="size">280</span>
                            <span class="quantity">1개</span>
                        </p>
                        <!-- <p class="desc"></p> -->
                        <p class="tax_desc">관부가세 미포함</p>
                    </div>
                </div>
                <!-- // product_container-->
                <div class="price_container">
                    <p class="delivery">
                        <span class="fee">선결제 20,000원</span
                        ><span class="slash"> / </span
                        ><span class="shipping">해외배송</span>
                    </p>
                    <p class="price">319,000</p>
                </div>
                <!-- // price_container-->

                <!-- <p class="duty_tax_desc">
                    본 상품은 관부가세 미포함 상품이며 통관 시 별도 관부가세가 발생할 수
                    있습니다.
                    <i class="icon" @click="openAlert()"></i>
                </p> -->

                <div class="discount_container">
                    <div class="sub_title">
                        <p>할인혜택</p>
                        <button type="button" class="btn w64">적용하기</button>
                    </div>
                    <!-- // sub_title -->
                    <div class="benefit">
                        <dl>
                            <dt>단골할인</dt>
                            <dd>-5,000</dd>
                        </dl>
                        <dl>
                            <dt>임직원 10% 할인쿠폰(2022년)</dt>
                            <dd>-15,000</dd>
                        </dl>
                    </div>
                </div>
            </div>
            <!-- // order_item -->
        </div>
        <!-- // toggle_box -->
    </article>
</template>

<script>
    export default {
        data: function () {
            return {
                isOpen: true
            }
        },

        methods: {
            toggle() {
                this.isOpen = !this.isOpen
            },
            openAlert() {
                this.$parent.openAlert()
            }
        }
    }
</script>

<style scoped></style>
