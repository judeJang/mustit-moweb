<template>
    <article
        class="product_header"
        :class="{ 'scroll_on': fixed, 'gnb_shadow': shadow, 'sub_menu_on': subMenuShow }"
    >
        <div class="header_btn_box">
            <a href="/m/main" class="product_header__btn_back">
                <i class="icon_back">
                    <img
                        class="img_opacity"
                        src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/icon_back_b.svg"
                        alt="뒤로가기"
                    />
                </i>
            </a>
            <a href="/m/main" class="product_header__btn_back" ref="hideMenu1">
                <i class="icon_home">
                    <img
                        class="img_opacity"
                        src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/icon_home_b.svg"
                        alt="Home 으로"
                    />
                </i>
            </a>
        </div>
        <h2 class="product_header__title" id="href_url">
            <span class="product_header__title_inner">
                <span class="product_header__title_txt">
                    <!-- {{ title }} -->
                </span>
                <div class="gun_sub_menu">
                    <div class="gun_sub_menu__inner_box">
                        <span
                            class="gun_sub_menu__btn_desc"
                            @click.stop="scrollMove(0)"
                            :class="[subMenuData[0].state === 'active' ? 'on_btn' : '']"
                        >
                            상세정보
                        </span>
                        <span
                            class="gun_sub_menu__btn_review"
                            @click.stop="scrollMove(1)"
                            :class="[subMenuData[1].state === 'active' ? 'on_btn' : '']"
                        >
                            리뷰<span class="num">(1,532)</span>
                        </span>
                        <span
                            class="gun_sub_menu__btn_question"
                            @click.stop="scrollMove(2)"
                            :class="[subMenuData[2].state === 'active' ? 'on_btn' : '']"
                        >
                            상품문의<span class="num">(45)</span>
                        </span>
                    </div>
                </div>
            </span>
        </h2>
        <div class="product_header__right_box" ref="hideMenu2">
            <a
                href="http://release.mustit.xyz/m/product/header_all_search?click=search&amp;keyword="
                class="product_header__btn_search"
            >
                <i class="icon_search">
                    <img
                        class="img_opacity"
                        src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/icon_search_b.svg"
                        alt="상품검색"
                    />
                </i>
            </a>
            <a href="/m/order/basket?click=basket" class="product_header__btn_cart">
                <i class="icon_cart">
                    <img
                        class="img_opacity"
                        src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/icon_cart_b.svg"
                        alt="장바구니"
                    />
                    <span
                        id="globalCartCount"
                        data-count="0"
                        class="product_header__cart_num"
                    >
                        0
                    </span>
                </i>
            </a>
        </div>
    </article>
</template>
<script>
    export default {
        props: {
            title: { type: String, default: '' },
            scrollState: String,
            fixed: { type: Boolean, default: false },
            shadow: { type: Boolean, default: false },
            subMenuShow: { type: Boolean, default: false },
            subMenuData: { type: Array, default: () => [] }
        },
        data: function () {
            return {}
        },
        watch: {
            subMenuShow: function (n) {
                if (n) {
                    setTimeout(() => {
                        this.$refs.hideMenu1.style.visibility = 'hidden'
                        this.$refs.hideMenu2.style.visibility = 'hidden'
                    }, 200)
                } else {
                    this.$refs.hideMenu1.style.visibility = 'visible'
                    this.$refs.hideMenu2.style.visibility = 'visible'
                }
            }
        },
        mounted() {},
        methods: {
            scrollMove(id) {
                let top = this.subMenuData[id].el.offsetTop
                window.scrollTo({ top: top - 40, left: 0, behavior: 'smooth' })
            }
        }
    }
</script>
