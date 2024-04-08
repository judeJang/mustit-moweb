<template>
    <!-- list -->
    <div data-role="dummy">
        <div
            class="wish_product_list"
            :class="{ 'soldout': list.soldout }"
            v-for="(list, index) in data"
            :key="index"
        >
            <!-- 닫기 버튼 -->
            <button
                type="bottom"
                class="close_btn"
                aria-label="최근본 상품을 삭제하겠습니까?"
                @click.stop="confirmModal(index, type)"
                v-if="type === 1"
            ></button>

            <button
                type="bottom"
                class="close_btn"
                aria-label="찜한 상품을 삭제 하시겠습니까?"
                @click.stop="confirmModal(index, type)"
                v-if="type === 2"
            ></button>

            <a :href="list.landingUrl">
                <!-- img -->
                <div class="img">
                    <img :src="list.img" :alt="list.brand" />
                </div>
                <!-- text -->
                <div class="text_box">
                    <p class="brand">
                        <span class="text">{{ list.brand }}</span>
                        <!-- 배송아이콘 -->
                        <span class="delivery_icon" v-if="list.shipping">
                            <img
                                src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_badge/icon-quick.png"
                                v-if="list.shipping === 'expedited'"
                            />
                            <img
                                src="https://static-ux.mustit.co.kr/img/m/m_badge/icon-oversea.png"
                                alt=""
                                v-if="list.shipping === 'international'"
                            />
                        </span>
                    </p>
                    <p class="name">{{ list.desc }}</p>
                    <div class="price">
                        <span class="discount_price">{{ list.price }}</span>
                        <span class="discount" v-if="list.discount">{{
                            list.discount
                        }}</span>
                    </div>
                    <del v-if="list.realPrice">{{ list.realPrice }}</del>
                </div>
            </a>
        </div>
        <no-data
            :type="3"
            icon="exclamation"
            styles="margin-top: -24px"
            v-if="data.length === 0"
        >
            <template v-slot:title>찜한 상품이 없습니다.</template>
            <template v-slot:text> 머스트잇의 인기 상품을 보러 갈까요? </template>
            <template v-slot:btn>
                <router-link to="/product/hot_deal" class="btn">
                    핫딜 상품 보러가기
                </router-link>
            </template>
        </no-data>
    </div>
</template>
<script>
    import { recentlyData } from '@/assets/js/dummy/WishlistData'
    import WishIcon from '@/components/BaseWishIcon20.vue'
    import NoData from '@/components/ListNodata.vue'
    export default {
        name: 'WishlistRecentlyList',
        components: { WishIcon, NoData },
        props: {
            delData: { type: Boolean },
            type: { type: Number, default: 1 },
            /*
                type 1  최근 본 사품
                     2  찜 > 상품
            */
            getData: { type: Array }
        },
        data() {
            return {
                data: [...recentlyData]
            }
        },
        beforeMount() {
            if (this.getData) {
                this.data = [...this.getData]
            }
        },
        mounted() {
            this.$emit('dataLen', this.data.length)
        },
        watch: {
            delData(n) {
                if (n) {
                    this.listAllClear()
                    this.$emit('dataLen', this.data.length)
                }
            }
        },
        methods: {
            listAllClear() {
                this.data = []
            },
            confirmModal(index, type) {
                const messages = {
                    1: '최근 본 상품을 삭제 하시겠습니까?',
                    2: '찜한 상품을 삭제 하시겠습니까?'
                }
                const confirmMessage = messages[type]
                if (confirmMessage && confirm(confirmMessage)) {
                    this.data.splice(index, 1)
                }
            }
        }
    }
</script>
