<template>
    <article class="seller_info_header">
        <div class="seller_logo">
            <img
                src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_badge/badge_minishop_default.png"
                alt="샵로고"
            />
        </div>
        <div class="shop_name">
            <img
                src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/front/icon/seller/icon_seller_grand.svg"
                alt="최우수"
                width="18"
            />
            <span class="txt">{{ data.name }}</span>
        </div>
        <div class="shop_info_txt">
            <div class="inner_box" v-for="(info, index) in data.info" :key="index">
                <dl>
                    <dt>{{ info.key }}</dt>
                    <dd>{{ info.value }}</dd>
                </dl>
            </div>
        </div>
        <div class="shop_info_btn">
            <ul>
                <li>
                    <button
                        type="button"
                        class="btn_memo"
                        @click="$parent.isAllModalOpen = true"
                    >
                        보상각서
                    </button>
                </li>
                <li><button type="button" class="btn_shop">판매자샵</button></li>
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
    </article>
</template>

<script>
    export default {
        name: 'ProductSellerInfoShop',

        data() {
            return {
                isActive: false,
                data: {
                    name: 'S-PROJECT',
                    info: [
                        {
                            key: '판매된 상품',
                            value: '24,338개'
                        },
                        {
                            key: '단골회원',
                            value: '56,270명'
                        },
                        {
                            key: '구매 만족도',
                            value: '신규판매자'
                        }
                    ]
                }
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
