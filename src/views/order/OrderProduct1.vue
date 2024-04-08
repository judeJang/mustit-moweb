<template>
    <!-- 주문상품 기본 -->
    <article class="order_info" :class="[isOpen ? 'toggle_open' : 'toggle_hide']">
        <div class="title">
            <h2>주문상품</h2>
            <div class="summary">
                <span class="name">에어 조던 1 KO 시카고에어 조던 1 KO 시카고</span>
                <span class="text">포함</span> 1건
            </div>

            <div class="arr_container" @click="toggle"></div>
            <!-- // 클릭영역 -->
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
                <div class="discount_container">
                    <div class="sub_title">
                        <p>할인혜택</p>
                        <button type="button" class="btn w64">적용하기</button>
                    </div>
                    <!-- // sub_title -->
                    <div class="benefit"></div>
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
                isOpen: false
            }
        },
        methods: {
            toggle() {
                this.isOpen = !this.isOpen
            }
        }
    }
</script>

<style scoped></style>
