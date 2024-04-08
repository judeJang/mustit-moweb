<template>
    <article class="seller_shop_info box_border_top">
        <div class="seller_shop_info__inner">
            <div class="seller_shop_info__logo">
                <img
                    src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_badge/badge_minishop_default.png"
                    alt="샵로고"
                />
            </div>
            <div class="seller_shop_info__desc">
                <div
                    class="seller_shop_info__shop_name"
                    @click="$parent.isAllModalOpen = true"
                >
                    <span class="txt">S-PROJECT</span>
                </div>
                <div class="seller_shop_info__shop_tag">
                    <ul>
                        <li>배송관리우수</li>
                        <li>문의답변우수</li>
                        <li>재고관리우수</li>
                    </ul>
                </div>
                <div class="seller_shop_info__txt_box">
                    <dl>
                        <dt>구매 만족도</dt>
                        <dd>만족해요(87점)<i class="icon_help"></i></dd>
                    </dl>
                    <dl>
                        <dt>판매된 상품</dt>
                        <dd>24,338개</dd>
                    </dl>
                    <dl>
                        <dt>단골회원</dt>
                        <dd>24,338개</dd>
                    </dl>
                </div>
            </div>
        </div>
        <div class="seller_shop_info__btn_list">
            <div class="seller_shop_info__btn_inner">
                <ul>
                    <li>
                        <button type="button" class="btn_seller">판매자소개</button>
                    </li>
                    <li>
                        <button type="button" class="btn_shop">판매자샵</button>
                    </li>
                    <li>
                        <button
                            type="button"
                            class="btn_like like_off"
                            :class="[isActive ? 'like_on ' : 'like_off ']"
                            @click="classToggle()"
                        >
                            단골등록
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        data() {
            return {
                isActive: false
            }
        },

        mounted() {},

        methods: {
            classToggle() {
                this.isActive = !this.isActive
            }
        }
    }
</script>

<style lang="scss" scoped></style>
