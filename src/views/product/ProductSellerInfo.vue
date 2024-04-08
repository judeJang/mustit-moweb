<template>
    <section class="product_detail_area common_css">
        <SubHeader title="판매자 소개" />

        <!-- 상단 -->
        <ShopInfo />

        <!-- 설명 -->
        <SellerDesc />

        <!-- 리뷰 영역 삭제 -->
        <article class="product_review_area" style="display: none">
            <div class="review_title_box">
                <span class="review_title_box__txt">판매자 리뷰</span>
                <span class="review_title_box__num">(1,532)</span>
            </div>
            <div class="review_score_header">
                <div class="review_score_header__inner_box">
                    <span class="module_star_point">
                        <i class="module_star_point__icon"></i>
                        <i class="module_star_point__icon"></i>
                        <i class="module_star_point__icon"></i>
                        <i class="module_star_point__icon"></i>
                        <i class="module_star_point__icon off"></i>
                    </span>
                    <span class="review_score_header__num_txt">4.0</span>
                </div>
            </div>
            <div class="review_score_detail">
                <div class="review_score_detail__inner_box">
                    <dl>
                        <dt>배송</dt>
                        <dd class="on_box">
                            <span class="review_score_detail__txt">적당해요</span>
                            <span class="review_score_detail__progress_box">
                                <progress
                                    class="review_score_detail__progress_bar"
                                    value="70"
                                    max="100"
                                ></progress>
                            </span>
                            <span class="review_score_detail__percent">70%</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>포장</dt>
                        <dd class="on_box">
                            <span class="review_score_detail__txt">좋아요</span>
                            <span class="review_score_detail__progress_box">
                                <progress
                                    class="review_score_detail__progress_bar"
                                    value="58"
                                    max="100"
                                ></progress>
                            </span>

                            <span class="review_score_detail__percent">58%</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>가격</dt>
                        <dd class="on_box">
                            <span class="review_score_detail__txt">적당해요</span>
                            <span class="review_score_detail__progress_box">
                                <progress
                                    class="review_score_detail__progress_bar"
                                    value="76"
                                    max="100"
                                ></progress>
                            </span>

                            <span class="review_score_detail__percent">76%</span>
                        </dd>
                    </dl>
                </div>
            </div>
            <div
                id="product_review_slider"
                class="product_slider swiper-container"
                ref="product_review_slider"
            >
                <div class="scroll_inner_box swiper-wrapper">
                    <div class="item_box swiper-slide">
                        <div class="module_star_point">
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon off"></i>
                        </div>
                        <div class="txt_box01">
                            <div class="txt_inner_box">
                                <div class="txt01">정사이즈예요</div>
                                <div class="txt02">
                                    제 신발 사이즈가 265인데 8로 가니깐 딱 맞았어요~ …
                                </div>
                            </div>
                            <div class="img_box">
                                <span
                                    class="img"
                                    style="
                                        background: url('https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500')
                                            center center no-repeat;
                                        background-size: cover;
                                    "
                                ></span>
                            </div>
                        </div>
                        <div class="txt_box02">
                            <ul>
                                <li>93***</li>
                                <li>2022.02.18</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item_box swiper-slide">
                        <div class="module_star_point">
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon off"></i>
                        </div>
                        <div class="txt_box01">
                            <div class="txt_inner_box">
                                <div class="txt01">정사이즈예요</div>
                                <div class="txt02">
                                    제 신발 사이즈가 265인데 8로 가니깐 딱 맞았어요~ …
                                </div>
                            </div>
                            <div class="img_box">
                                <span
                                    class="img"
                                    style="
                                        background: url('https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500')
                                            center center no-repeat;
                                        background-size: cover;
                                    "
                                ></span>
                            </div>
                        </div>
                        <div class="txt_box02">
                            <ul>
                                <li>93***</li>
                                <li>2022.02.18</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item_box swiper-slide">
                        <div class="module_star_point">
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon off"></i>
                        </div>
                        <div class="txt_box01">
                            <div class="txt_inner_box">
                                <div class="txt01">정사이즈예요</div>
                                <div class="txt02">
                                    제 신발 사이즈가 265인데 8로 가니깐 딱 맞았어요~ …
                                </div>
                            </div>
                            <div class="img_box">
                                <span
                                    class="img"
                                    style="
                                        background: url('https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500')
                                            center center no-repeat;
                                        background-size: cover;
                                    "
                                ></span>
                            </div>
                        </div>
                        <div class="txt_box02">
                            <ul>
                                <li>93***</li>
                                <li>2022.02.18</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item_box swiper-slide">
                        <div class="module_star_point">
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon off"></i>
                        </div>
                        <div class="txt_box01">
                            <div class="txt_inner_box">
                                <div class="txt01">정사이즈예요</div>
                                <div class="txt02">
                                    제 신발 사이즈가 265인데 8로 가니깐 딱 맞았어요~ …
                                </div>
                            </div>
                            <div class="img_box">
                                <span
                                    class="img"
                                    style="
                                        background: url('https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500')
                                            center center no-repeat;
                                        background-size: cover;
                                    "
                                ></span>
                            </div>
                        </div>
                        <div class="txt_box02">
                            <ul>
                                <li>93***</li>
                                <li>2022.02.18</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn_link_box">
                <a href="/sellerReview">판매자 리뷰 전체보기</a>
            </div>
        </article>

        <!-- 오프라인 매장 안내  -->
        <SellerOffline />

        <!-- modal -->
        <transition name="slide-up">
            <div class="layer_node" v-if="isAllModalOpen">
                <div class="all_layer_insert" v-if="isAllModalOpen">
                    <component :is="layer"></component>
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
    import SubHeader from '@/components/SubHeader.vue'
    import ShopInfo from '@/views/product/ProductSellerInfoShopInfo.vue'
    import SellerDesc from '@/views/product/ProductSellerInfoDesc.vue'
    import SellerOffline from '@/views/product/ProductSellerInfoOffline.vue'
    export default {
        components: {
            SubHeader,
            ShopInfo,
            SellerDesc,
            SellerOffline
        },
        data() {
            return {
                headerName: [{ name: '판매자 소개' }],
                isAllModalOpen: false,
                layerName: 'ProductSellerInfoCompensation'
            }
        },
        computed: {
            layer() {
                const layers = this.layerName
                return () => import(`@/views/product/${layers}.vue`)
            }
        }
    }
</script>
<style scoped>
    .bottom_popup_area {
        transform: translateY(0);
        opacity: 1;
    }
</style>
