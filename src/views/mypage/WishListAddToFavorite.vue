<template>
    <article data-role="dummy">
        <RoundMenu
            :dataArray="categoryData"
            @send-index="roundMenuClickIndex"
            id="roundMenuSwiper"
        />
        <ProductList :getData="productData" :type="2" v-if="roundMenuIndex === 0" />
        <BrandList
            :getData="brandData"
            v-if="roundMenuIndex === 1"
            @emptyData="emptyData"
        />
        <SellerList :getData="sellerData" v-if="roundMenuIndex === 2" />
    </article>
</template>
<script>
    import { favoriteData } from '@/assets/js/dummy/WishlistData'
    import RoundMenu from '@/components/swiper/RoundMenu.vue'
    import ProductList from '@/views/mypage/WishListProductList.vue'
    import BrandList from '@/views/mypage/WishListBrandList.vue'
    import SellerList from '@/views/mypage/WishListSellerList.vue'

    export default {
        name: 'WishlistAddToFavorite',
        components: { RoundMenu, ProductList, BrandList, SellerList },
        data() {
            return {
                favoriteData: [...favoriteData],
                categoryData: [],
                roundMenuIndex: 0,
                productData: [],
                brandData: [],
                sellerData: []
            }
        },
        computed: {
            dataLen() {
                return this.data.length
            }
        },
        beforeMount() {
            // 메뉴 데이터
            favoriteData.forEach((item, index) => {
                const category = item.category
                const dataLength = item.data.length

                const dataObj = {
                    name: category,
                    len: dataLength,
                    isActive: index === 0 // 첫 번째 아이템만 isActive로 설정
                }

                this.categoryData.push(dataObj)

                switch (category) {
                    case '상품':
                        this.productData = [...item.data]
                        break
                    case '브랜드':
                        this.brandData = [...item.data]
                        break
                    case '판매자':
                        this.sellerData = [...item.data]
                        break
                }
            })
        },
        methods: {
            roundMenuClickIndex(num) {
                this.roundMenuIndex = num
                this.categoryData.forEach((item, index) => {
                    if (index === num) {
                        item.isActive = true
                    } else {
                        item.isActive = false
                    }
                })
            },
            emptyData() {
                this.productData = []
                this.brandData = []
                this.sellerData = []
                this.categoryData.forEach((item) => {
                    item.len = 0
                })
            }
        }
    }
</script>
