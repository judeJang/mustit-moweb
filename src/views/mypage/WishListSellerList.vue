<template>
    <div data-role="dummy">
        <div class="wish_seller_list" v-for="(list, index) in getData" :key="index">
            <a :href="list.moreLandingUrl" class="name">
                <i class="icon" v-if="list.rank" :class="list.rank"></i>
                <span>{{ list.name }}</span>
            </a>
            <p class="number">
                <span v-if="list.numberItems">판매상품 {{ list.numberItems }}개</span>
                <span v-if="list.likeMembers">단골회원 {{ list.likeMembers }}명</span>
            </p>
            <div class="status">
                <p v-for="(status, cid) in list.status" :key="cid">{{ status }}</p>
            </div>
            <!-- <WishIcon :add="list.addLike" /> -->
            <button
                type="bottom"
                class="close_btn"
                aria-label="찜한 판매자를 삭제 하시겠습니까?"
                @click.stop="confirmModal(index)"
            ></button>
            <div class="items">
                <a :href="item.landingUrl" v-for="(item, bid) in list.product" :key="bid">
                    <img :src="item.img" :alt="list.eng" />
                </a>
            </div>
        </div>
        <no-data
            :type="3"
            icon="exclamation"
            styles="margin-top: -24px"
            v-if="getData.length === 0"
        >
            <template v-slot:title>찜한 판매자가 없습니다.</template>
            <template v-slot:text> 관심 있는 판매자를 단골로 등록해보세요. </template>
            <template v-slot:btn>
                <router-link to="/home" class="btn"> 쇼핑 계속하기 </router-link>
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
        methods: {
            confirmModal(index) {
                if (confirm('찜한 판매자를 삭제 하시겠습니까?')) {
                    this.getData.splice(index, 1)
                }
            }
        }
    }
</script>
