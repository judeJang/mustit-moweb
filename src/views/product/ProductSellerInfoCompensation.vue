<template>
    <article class="bottom_popup_area">
        <div class="sub_page_header">
            <a
                href="#"
                class="sub_page_header__btn_back btn_popup_close"
                @click="$parent.isAllModalOpen = false"
            >
                <i class="sub_page_header__icon_box"
                    ><img
                        src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/navi-icon-close.svg"
                        alt="뒤로가기"
                /></i>
            </a>
            <h2 class="sub_page_header__title">판매자 보상 각서</h2>
        </div>
        <div class="seller_memo">
            <div class="seller_memo__top">
                <h3 class="seller_memo__title">
                    <img
                        src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/title_img_bestquality.png"
                        alt="정품인증"
                    />
                </h3>
                <p class="seller_memo__txt">
                    본인은 머스트잇에서 판매하는 모든 상품이 상표법 등에 법적 하자가 없는
                    정품임을 보장하며, 만일 위조상품(가품)임이 밝혀질 경우 민/형사상의
                    모든 책임을 지며 판매 가격의 2배를 보상할 것을 약속합니다.
                </p>
                <div class="seller_memo__sub_box">
                    <dl>
                        <dt>작성일</dt>
                        <dd>2021.08.13</dd>
                    </dl>
                    <dl>
                        <dt>작성자</dt>
                        <dd>s-project</dd>
                    </dl>
                </div>
                <div class="seller_memo__logo">
                    <img
                        src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_bi/bi_mustit_header.png"
                        alt="머스트잇 로고"
                    />
                </div>
            </div>
            <div class="seller_memo__t_list">
                <ul>
                    <li>본 각서는 판매자가 상품을 판매하는 일로부터 적용됩니다.</li>
                    <li>
                        본 판매자 보상 각서는 위조상품(가품) 판매로 인한 분쟁 발생 시
                        민사적 해결에 그 이유가 있습니다.
                    </li>
                    <li>
                        타인 명의를 도용하여 판매하는 경우에도 명의 도용에 대한 법적
                        책임까지 묻게 됩니다.
                    </li>
                </ul>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        name: 'ProductSellerInfoCompensation',

        data() {
            return {}
        },

        mounted() {},

        methods: {}
    }
</script>

<style lang="scss" scoped></style>
