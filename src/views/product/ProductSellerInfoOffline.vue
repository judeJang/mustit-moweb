<template>
    <article class="seller_shop_guide">
        <h3 class="title">오프라인 매장 안내</h3>
        <div class="desc">
            <div class="inner_box">
                <span class="shop_name">펩스타일</span>
                <span class="shop_address">서울 성동구 성수이로22길</span>
            </div>
            <p class="txt">
                2009년부터 이태리, 미국의 라이센스 업체로부터 직수입 또는 국내의
                정식수입원을 통하여 100% 정품만을 취급하고 있으며, 2016년 3월부터
                롯데백화점과 계약하여 여러 브랜드를 공급하고 있어 상품의 퀄리티가
                검증되었습니다.<br />
                FABSTYLE은 이름 또한 ‘fabulous’의 약자로 고객들의 신뢰도를 얻고 있는
                명품편집샵 입니다.
            </p>
        </div>
        <div class="sub_c_box">
            <h4 class="title">매장 사진</h4>
            <!-- 기능은 기존과 동일 -->
            <div class="shop_img">
                <img
                    src="https://cdn.mustit.co.kr/lib/upload/shop/fabstyle77/2017/09/jymg/1505286377-54.jpg/_dims_/resize/250/cropcenter/250x160/composite/img_shop_watermark01_30"
                    alt=""
                />
            </div>
        </div>
        <div class="sub_c_box">
            <h4 class="title">지도 보기</h4>
            <div id="offline_shop" class="seller_map_box"></div>
        </div>
    </article>
</template>

<script>
    export default {
        name: 'ProductSellerInfoGuide',

        data() {
            return {}
        },

        mounted() {},

        methods: {}
    }
</script>

<style lang="scss" scoped></style>
