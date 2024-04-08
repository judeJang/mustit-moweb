<template>
    <section class="public_content">
        <!-- 
            phase2 header로 교체
            <SubTopNavi :data="menuArray" :count="0" :isDropState="false" />
         -->
        <Product005 />
        <Menu003 />
        <Divider />

        <!-- home module :: title001 -->
        <MainTitle title="Our Best" link="#" :allView="true" :bg="true" />
        <!-- home module :: ProductDeal002 -->
        <SmallProduct id="smallProduct1" :discountShow="true" />
        <Divider />
        <!-- home module :: Ex003 -->
        <PopularEventV2 />

        <!-- <Product004 /> -->
        <article class="boutique_lists">
            <Product004 v-for="item in 11" :key="item" />
        </article>
    </section>
</template>
<script>
    //common moudule
    import SubTopNavi from '@/components/SubTopHeader.vue'
    //boutique module
    import Product004 from '@/modules/VBoutiqueProduct004.vue'
    import Product005 from '@/modules/VBoutiqueProduct005.vue'
    import Menu003 from '@/modules/VBoutiqueMenu003.vue'
    // home module
    import MainTitle from '@/modules/VHomeTitle.vue'
    import SmallProduct from '@/modules/VFreeSwiper.vue'
    import Divider from '@/modules/VHomeDivider.vue'
    import PopularEventV2 from '@/modules/VHomePopularEventSwiperV2.vue'

    export default {
        components: {
            SubTopNavi,
            Product004,
            Product005,
            Menu003,
            MainTitle,
            SmallProduct,
            Divider,
            PopularEventV2
        },
        data: function () {
            return {
                menuArray: [
                    {
                        type: 'image',
                        name: `<img src="${require('@/assets/img/boutique_title.png')}" alt="BOUTIQUE" width='110' />`
                    }
                ]
            }
        }
    }
</script>
<style></style>
