<template>
    <div data-role="dummy">
        <a href="#" class="add_brands" @click.stop="allClear()" v-if="!dataEmpty">
            홍길동님, 관심 있는 브랜드를 더 추가해보세요.
        </a>
        <div class="wish_brand_list" v-for="(list, index) in getData" :key="index">
            <a :href="list.moreLanding" class="eng">
                <span>{{ list.eng }}</span>
            </a>
            <p class="kor">{{ list.kor }}</p>
            <button
                type="bottom"
                class="close_btn"
                aria-label="찜한 상품을 삭제 하시겠습니까?"
                @click.stop="confirmModal(index)"
            ></button>
            <div class="items">
                <a :href="item.landingUrl" v-for="(item, bid) in list.product" :key="bid">
                    <img :src="item.img" :alt="list.eng" />
                </a>
            </div>
        </div>

        <!-- 데이터 없을 경우 -->
        <no-data :type="3" icon="exclamation" styles="margin-top: -24px" v-if="dataEmpty">
            <template v-slot:title>찜한 브랜드가 없습니다.</template>
            <template v-slot:text> 나만의 관심 브랜드를 지금 추가해보세요. </template>
            <template v-slot:btn>
                <router-link to="/home" class="btn"> 브랜드 추가하기 </router-link>
            </template>
        </no-data>
    </div>
</template>
<script>
    import WishIcon from '@/components/BaseWishIcon20.vue'
    import NoData from '@/components/ListNodata.vue'
    export default {
        name: 'WishlistBrandList',
        components: { WishIcon, NoData },
        props: {
            getData: { type: Array }
        },
        computed: {
            dataEmpty() {
                return this.getData.length === 0
            }
        },
        methods: {
            allClear() {
                this.$emit('emptyData')
            },
            confirmModal(index) {
                if (confirm('찜한 브랜드를 삭제 하시겠습니까?')) {
                    this.getData.splice(index, 1)
                }
            }
        }
    }
</script>
