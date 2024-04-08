<template>
    <section class="hotdeal_content public_content">
        <!-- phase2 header로 교체
            <SubTopHeader :isDropState="false" :data="menuData" :count="9" /> 
        -->
        <!-- hotdealProductDeal003 -->
        <!-- <HotdealMainSwiper
            :list="productList"
            title="단, 3일간 진행!단, 3일간 진행!단, 3일간 진행!"
            id="hotdealMainSwiper"
        /> -->
        <!-- hotdealProductDeal007 -->
        <HotdealTimesaleSwiper
            :list="productList"
            timesale="단 3일만 진행하는 초특가 타임세일!"
            oneday="다시 돌아오지 않는 파격적인 특가 세일!"
            id="hotdealTimesaleSwiper"
        />
        <!-- hotdealProductDeal006 -->
        <HotdealUpNext :list="productList" id="upNextSwiper" />
        <!-- hotdealTitle003 -->
        <HotdealSubTitle title="세일이 곧 끝나요!" />
        <!-- hotdealProductDeal004 -->
        <HotdealSwiperItems :list="productList" id="hotdealItemsSwiper" />
        <!-- hotdealTitle003 -->
        <HotdealSubTitle title="카테고리별 핫딜" :bg="true" />
        <!-- hotdealProductDeal005 pair-->
        <HotdealCategory id="hotdealCategory" />
        <!-- hotdealProductDeal005 pair-->
        <HotdealListTop :sort="sortName" />

        <HotdealListItem
            v-for="(product, i) in productList"
            :item="product"
            :className="i % 2 == 0 ? 'even' : 'odd'"
            :key="i"
        />
        <transition name="slide-up">
            <HotdealListSort v-show="isSortOpen" :sortList="sortList" />
        </transition>
        <transition name="fade-ani">
            <div class="black_deem" v-if="isLayerOpen" @click="closeLayer"></div>
        </transition>
    </section>
</template>

<script>
    import EventBus from '@/assets/js/EventBus'
    import SubTopHeader from '@/components/SubTopHeader.vue'
    // import HotdealMainSwiper from '@/views/product/HotdealMainSwiper.vue'
    import HotdealTimesaleSwiper from '@/views/product/HotdealTimesaleSwiper'
    import HotdealUpNext from '@/views/product/HotdealUpNext'
    import HotdealSubTitle from '@/views/product/HotdealSubTitle.vue'
    import HotdealSwiperItems from '@/views/product/HotdealSwiperItems.vue'
    import HotdealCategory from '@/views/product/HotdealCategory.vue'
    import HotdealListTop from '@/views/product/HotdealListTop.vue'
    import HotdealListItem from '@/views/product/HotdealListItem.vue'
    import HotdealListSort from '@/views/product/HotdealListSort.vue'
    export default {
        components: {
            SubTopHeader,
            // HotdealMainSwiper,
            HotdealTimesaleSwiper,
            HotdealUpNext,
            HotdealSubTitle,
            HotdealSwiperItems,
            HotdealCategory,
            HotdealListTop,
            HotdealListItem,
            HotdealListSort
        },
        data() {
            return {
                isSortOpen: false,
                isLayerOpen: false,
                menuData: [{ name: '핫딜' }],
                sortName: '추천순',
                sortList: [
                    { name: '추천순', isChecked: true },
                    { name: '인기도순', isChecked: false },
                    { name: '마감임박순', isChecked: false },
                    { name: '할인율순', isChecked: false },
                    { name: '낮은가격순', isChecked: false }
                ],
                productList: [
                    {
                        imgPath:
                            'https://image.mustit.co.kr/lib/upload/admin/specialSale/b0f292037d47630d7931cbe6b75e728d.png/_dims_/resize/500x500/extent/500x500',
                        discount: '13',
                        discountPrice: '5,048,000',
                        delPrice: '5,800,000',
                        brand: 'CHANEL',
                        productName:
                            '클래식 캐비어 WOC 블랙 골드 메탈 AP0250-Y01864-C3906',
                        jeago: 8,
                        leftDate: 7
                    },
                    {
                        imgPath:
                            'https://image.mustit.co.kr/lib/upload/admin/specialSale/ade5254bdd4bc81c84e12af29ef0ea1f.png/_dims_/resize/500x500/extent/500x500',
                        discount: '35',
                        discountPrice: '559,000',
                        delPrice: '825,000',
                        brand: 'STONE ISLAND',
                        productName:
                            '22FW 가먼트다잉 올드 트리트먼트 오버셔츠  라이트 그레이',
                        jeago: 1000,
                        leftDate: 6,
                        oneday: true
                    },
                    {
                        imgPath:
                            'https://image.mustit.co.kr/lib/upload/admin/specialSale/61988d9e319dd4b58bc3d756877cd796.png/_dims_/resize/500x500/extent/500x500',
                        discount: '45',
                        discountPrice: '459,000',
                        delPrice: '650,000',
                        brand: 'BYREDOBYREDOBYREDOBYREDO',
                        productName: '[BYREDO] 바이레도 블랑쉬 오 드 퍼퓸 EDP 50ml',
                        jeago: 1000,
                        leftDate: 6
                    },
                    {
                        imgPath:
                            'https://image.mustit.co.kr/lib/upload/admin/specialSale/a2cee01d70185fef4ee1b4c4eabbdb8f.png/_dims_/resize/500x500/extent/500x500',
                        discount: '9',
                        discountPrice: '2,950,000',
                        delPrice: '1,110,000',
                        brand: 'GUCCI',
                        productName: '마이크로시마 미니돔 검정 빨강 449654',
                        jeago: 0,
                        leftDate: 2
                    },
                    {
                        imgPath:
                            'https://image.mustit.co.kr/lib/upload/admin/specialSale/91982641fced784986e4dfbcec286df8.png/_dims_/quality/80',
                        discount: '0',
                        discountPrice: '459,000',
                        delPrice: '650,000',
                        brand: 'BYREDOBYREDOBYREDOBYREDO',
                        productName: '[BYREDO] 바이레도 블랑쉬 오 드 퍼퓸 EDP 50ml',
                        jeago: 1,
                        leftDate: 3,
                        oneday: true
                    },
                    {
                        imgPath:
                            'https://image.mustit.co.kr/lib/upload/admin/specialSale/a2cee01d70185fef4ee1b4c4eabbdb8f.png/_dims_/resize/500x500/extent/500x500',
                        discount: '9',
                        discountPrice: '2,950,000',
                        delPrice: '1,110,000',
                        brand: 'GUCCI',
                        productName: '마이크로시마 미니돔 검정 빨강 449654',
                        jeago: 0,
                        leftDate: 2
                    },
                    {
                        imgPath:
                            'https://image.mustit.co.kr/lib/upload/admin/specialSale/91982641fced784986e4dfbcec286df8.png/_dims_/quality/80',
                        discount: '35',
                        discountPrice: '683,000',
                        delPrice: '1,047,000',
                        brand: 'THOM BROWNE',
                        productName: '남성 사선완장 코튼 맨투맨 2종',
                        jeago: 5,
                        leftDate: 3
                    }
                ]
            }
        },
        created() {
            const HTML = document.getElementsByTagName('html')[0]
            const BODY = document.body
            EventBus.$on('sortOpen', () => {
                this.isSortOpen = true
                this.isLayerOpen = true
                HTML.classList.add('html_scroll')
                BODY.classList.add('body_scroll')
            })
            EventBus.$on('sortClose', () => {
                this.isSortOpen = false
                this.isLayerOpen = false
                HTML.classList.remove('html_scroll')
                BODY.classList.remove('body_scroll')
            })
            EventBus.$on('sortName', (name, id) => {
                this.sortName = name
                for (let [index, value] of this.sortList.entries()) {
                    if (id == index) {
                        value.isChecked = true
                    } else {
                        value.isChecked = false
                    }
                }
            })
        },
        beforeDestroy() {
            EventBus.$off('sortOpen')
            EventBus.$off('sortClose')
            EventBus.$off('sortName')
        },
        methods: {
            closeLayer() {
                EventBus.$emit('sortClose')
            }
        }
    }
</script>
