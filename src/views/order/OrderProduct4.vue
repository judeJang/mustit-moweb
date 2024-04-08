<template>
    <!-- 주문상품 배송 아이콘 노출 -->
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
                            <p class="brand_name">Maison Kitsune</p>
                            <p class="badge"></p>
                        </div>
                        <p class="name">
                            21FW 메종키츠네 올라이트 폭스 패치 다크21FW 메종키츠네
                            올라이트 폭스 패치 다크
                        </p>
                        <p class="option">
                            <span class="color">헌터네이비</span>
                            <span class="size">M(성인여성마른44추천)</span>
                            <span class="quantity">1개</span>
                        </p>
                        <!-- <p class="desc"></p> -->
                        <p class="tax_desc">관부가세 미포함</p>
                    </div>
                </div>
                <!-- // product_container-->
                <div class="price_container">
                    <p class="delivery">
                        <span class="fee">선불 49,800원</span>
                        <span class="slash"> / </span>
                        <span class="shipping">해외배송</span>
                    </p>
                    <p class="price">1,230,000</p>
                </div>
                <!-- // price_container-->
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
                            <p class="brand_name">Maison Kitsune</p>
                            <p class="badge">
                                <span class="delivery_icon quick"></span>
                            </p>
                        </div>
                        <p class="name">
                            21FW 메종키츠네 올라이트 폭스 패치 다크21FW 메종키츠네
                            올라이트 폭스 패치 다크
                        </p>
                        <p class="option">
                            <span class="color">헌터네이비</span>
                            <span class="size">M(성인여성마른44추천)</span>
                            <span class="quantity">1개</span>
                        </p>
                        <p class="desc">꼼꼼하게 포장하여 보내드리겠습니다!</p>
                    </div>
                </div>
                <!-- // product_container-->
                <div class="price_container">
                    <p class="delivery">
                        <span class="fee">선불 49,800원</span>
                        <span class="slash"> / </span>
                        <span class="shipping">해외배송</span>
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
                            <p class="brand_name">Maison Kitsune</p>
                            <p class="badge">
                                <span class="delivery_icon overseas"></span>
                            </p>
                        </div>
                        <p class="name">
                            21FW 메종키츠네 올라이트 폭스 패치 다크21FW 메종키츠네
                            올라이트 폭스 패치 다크
                        </p>
                        <p class="option">
                            <span class="color">헌터네이비</span>
                            <span class="size">M(성인여성마른44추천)</span>
                            <span class="quantity">1개</span>
                        </p>
                        <p class="desc">꼼꼼하게 포장하여 브내드리겠습니다!</p>
                    </div>
                </div>
                <!-- // product_container-->
                <div class="price_container">
                    <p class="delivery">
                        <span class="fee">선불 49,800원</span>
                        <span class="slash"> / </span>
                        <span class="shipping">해외배송</span>
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
