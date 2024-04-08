<script>
    export default {
        name: 'LpList',
        props: {
            className: String,
            zzimShow: { type: Boolean, default: false },
            outletShow: { type: Boolean, default: false }
        }
    }
</script>
<template>
    <div class="product_list" :class="className">
        <a href="#">
            <div class="product_list__img" style="padding-bottom: 100%">
                <img
                    data-src="https://cdn.mustit.co.kr/lib/upload/product/s-project/2021/11/1635918472-91.jpeg/_dims_/resize/280x280/extent/280x280"
                    src="https://cdn.mustit.co.kr/lib/upload/product/s-project/2021/11/1635918472-91.jpeg/_dims_/resize/280x280/extent/280x280"
                />
                <div class="mini_vip">
                    <button tye="button" class="mini_vip__icon"></button>
                </div>
                <div class="float_badge">
                    <span class="badge outlet" v-if="outletShow">아울렛</span>
                </div>
            </div>
            <div class="product_list__contents">
                <div class="brand_container">
                    <span class="brand">Moncler</span>
                    <span class="delivery_icon">
                        <img
                            src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_badge/icon-quick.png"
                        />
                    </span>
                </div>
                <p class="name">
                    MONCLER 몽클레어 KUNDOGI 데님 구스다운 패딩점퍼 1A51E 00 54AM8
                </p>
                <div class="price">
                    <span class="discount_price">129,600</span>
                    <span class="discount">48%</span>
                </div>
                <del class="del_price">200,000</del>
                <div class="product_badge">
                    <span class="badge free_return"> 무료교환반품 </span>
                    <span class="badge red"> 쿠폰 </span>
                    <span class="badge gray"> 무료배송 </span>
                </div>
                <div class="zzim_box" v-if="zzimShow">
                    <span class="zzim_icon_container">
                        <i class="zzim_icon"></i>
                        <span class="zzim_num">9,999+</span>
                    </span>
                    <span class="zzim_icon_container">
                        <i class="star_icon"></i>
                        <span class="zzim_num">5.0</span>
                    </span>
                </div>
            </div>
        </a>
    </div>
</template>
