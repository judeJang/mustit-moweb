<template>
    <div>
        <div class="product_list_area">
            <div class="product_list_box" v-for="item in 10" :key="item.id">
                <div class="product_list_area__img_box">
                    <img
                        src="https://cdn.mustit.co.kr/lib/upload/product/tkfk97/2021/12/1640648227-17.jpeg/_dims_/resize/280x280/extent/280x280"
                        alt=""
                        class="goods_img"
                    />
                    <span class="btn_more"></span>
                </div>
                <div class="product_list_area__info_box">
                    <div class="product_list_area__brand">
                        <span class="product_list_area__brand_name"> Dior</span>
                        <span class="product_list_area__icon"
                            ><img
                                src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_badge/icon-quick.png"
                        /></span>
                    </div>
                    <div class="product_list_area__goods_desc">
                        [정품/국내배송] 나이키 조던1/디올 레트로 하이 CD4487-1...
                        [정품/국내배송] 나이키 조던1/디올 레트로 하이 CD4487-1...
                    </div>
                    <div class="product_list_area__price_box">
                        <span class="product_list_area__goods_price">17,721,000</span>
                        <span class="product_list_area__discount">36%</span>
                    </div>
                    <del class="product_list_area__goods_price_del">17,721,000</del>
                    <div class="product_list_area__label">
                        <span class="product_list_area__label_cupon">쿠폰</span>
                        <span class="product_list_area__label_delivery">무료배송</span>
                        <span class="product_list_area__label_delivery"
                            >선불 49,800원</span
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductComponent',
        props: {
            msg: String
        }
    }
</script>
