<template>
    <div class="public_content">
        <!-- 헤더 -->
        <OutletHeader :count="1" :type="3" />
        <!--  data-module="참고용" -->
        <!-- Banner008 -->
        <Banner008
            size="750x1000"
            :paginationType="1"
            id="Banner008"
            data-module="Banner008"
        />
        <div class="divider"></div>
        <!-- test pagination type -->
        <!-- <Banner008 size="750x750" :paginationType="2" id="Banner008" />
        <div class="divider"></div> -->
        <!-- Menu003 -->
        <Menu003 data-module="Menu003" />
        <div class="divider"></div>

        <!-- Product006 & Product007 -->
        <!-- 제목만 -->
        <OutletProduct
            title="주목할 세일 소식"
            :hasAll="false"
            id="Product006_title"
            data-module="Product006"
        />
        <div class="divider"></div>
        <!-- 제목 + 서브타이틀 -->
        <OutletProduct
            title="지금은 내가 쵝오!"
            subTitle="카테고리별 인기 상품"
            :hasAll="false"
            id="Product006_subtitle"
            data-module="Product006"
        />
        <div class="divider"></div>
        <!-- 제목 없음 -->
        <OutletProduct :hasAll="false" id="Product006_notitle" data-module="Product006" />
        <div class="divider"></div>
        <!-- 전체보기 버튼 -->
        <OutletProduct
            title="지금은 내가 쵝오!"
            subTitle="카테고리별 인기 상품"
            :hasAll="true"
            id="Product006_hasAll"
            data-module="Product006"
        />
        <div class="divider"></div>
        <!-- // Product006 & Product007 -->

        <!-- Product_cate_002 & Product_cate_003 -->
        <!-- 제목만 -->
        <OutletProductCate002 title="주목할 세일 소식" data-module="Product_cate_002" />
        <div class="divider"></div>
        <!-- 제목 + 서브타이틀 -->
        <OutletProductCate002
            title="지금은 내가 쵝오!"
            subTitle="카테고리별 인기 상품"
            :categoryBestArray="productCate1.bestArray"
            :categoryChildArray="productCate1.childArray"
            data-module="Product_cate_002"
        />
        <div class="divider"></div>
        <!-- 제목 없음 -->
        <OutletProductCate002
            :categoryBestArray="productCate2.bestArray"
            :categoryChildArray="productCate2.childArray"
            data-module="Product_cate_002"
        />
        <div class="divider"></div>
        <!-- // Product_cate_002 & Product_cate_003 -->

        <!-- Menu004 -->
        <Menu004 title="아울렛 인기 브랜드" data-module="Menu004" />
        <div class="divider"></div>
        <Menu004 title="오늘부터 1일" subTitle="아울렛 첫 등장" data-module="Menu004" />
        <div class="divider"></div>
        <Menu004 data-module="Menu004" />
        <div class="divider"></div>

        <!-- Product008 -->
        <!-- 제목만 -->
        <Product008
            title="아울렛 인기 브랜드"
            id="product008_1"
            data-module="Product008"
        />
        <div class="divider"></div>
        <!-- 제목 + 서브타이틀 -->
        <Product008
            title="합리적인 소비로 만족감은 2배!"
            subTitle="리퍼브"
            id="product008_2"
            data-module="Product008"
        />
        <div class="divider"></div>
        <!-- 제목 없음 -->
        <Product008 id="product008_3" data-module="Product008" />
        <div class="divider"></div>

        <!-- Product009 -->
        <Product009
            title="아울렛 인기 브랜드"
            id="product009_1"
            data-module="Product009"
        />
        <div class="divider"></div>
        <!-- 제목 + 서브타이틀 -->
        <Product009
            title="앗! 지금 놓치면 없을 수도?"
            subTitle="품절 임박"
            id="product009_2"
            data-module="Product009"
        />
        <div class="divider"></div>
        <!-- 제목 없음 -->
        <Product009 id="product009_3" data-module="Product009" />
    </div>
</template>

<script>
    // moudule
    import OutletHeader from '@/components/OutletHeader.vue'
    import Banner008 from '@/modules/VBanner008.vue'
    import Menu003 from '@/modules/VBoutiqueMenu003.vue'
    import Menu004 from '@/modules/VMenu004.vue'
    import OutletProduct from '@/modules/VOutletProduct.vue'
    import OutletProductCate002 from '@/modules/VOutletProductCate002.vue'
    import Product008 from '@/modules/VProduct008.vue'
    import Product009 from '@/modules/VProduct009.vue'

    export default {
        components: {
            OutletHeader,
            Banner008,
            Menu003,
            Menu004,
            OutletProduct,
            OutletProductCate002,
            Product008,
            Product009
        },
        data() {
            return {
                bannerType: 1,
                productCate1: {
                    childArray: [2, 3, 4, 3, 3],
                    bestArray: [
                        { name: 'menu1', isActive: true },
                        { name: 'menu2', isActive: false },
                        { name: 'menu3', isActive: false },
                        { name: 'menu4', isActive: false },
                        { name: 'menu5', isActive: false }
                    ]
                },
                productCate2: {
                    childArray: [2, 4, 5, 3],
                    bestArray: [
                        { name: '~30%', isActive: true },
                        { name: '30~50%', isActive: false },
                        { name: '50~70%', isActive: false },
                        { name: '70%~', isActive: false }
                    ]
                }
            }
        }
    }
</script>
