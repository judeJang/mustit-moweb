<template>
    <article>
        <div class="list_controller" v-if="!allDelete">
            <p>전체 {{ dataTotal }}개</p>
            <button type="button" @click="listAllClear()">전체삭제</button>
        </div>
        <ProductList @dataLen="total" :delData="allDelete" v-if="!allDelete" />

        <no-data :type="3" icon="exclamation" v-else>
            <template v-slot:title>최근 본 상품이 없습니다.</template>
            <template v-slot:text>
                로그인을 하지 않아도 최근 본 상품을<br />
                확인할 수 있어요.
            </template>
            <template v-slot:btn>
                <router-link to="/home" class="btn"> 쇼핑 계속하기 </router-link>
            </template>
        </no-data>
    </article>
</template>
<script>
    import ProductList from '@/views/mypage/WishListProductList.vue'
    import NoData from '@/components/ListNodata.vue'
    export default {
        name: 'WishlistRecentlyList',
        components: { ProductList, NoData },
        data() {
            return {
                dataTotal: 0,
                allDelete: false
            }
        },
        methods: {
            total(data) {
                this.dataTotal = data
            },
            listAllClear() {
                if (confirm('전체 삭제 하시겠습니까?')) {
                    this.allDelete = true
                }
            }
        }
    }
</script>
