<template>
    <article class="PDP_info_container self_module">
        <component :is="badgeComponentLoader" :data="badgeData"></component>
        <BrandName />
        <Location :data="locationData" />
        <ItemName :itemName="itemName" />
        <Reviews :data="infoReviewData" />
        <Price :data="priceData" />
        <AppBuy />
    </article>
</template>

<script>
    import { setBadgeData, setLocationData } from '@/assets/js/PDP'

    import BrandName from '@/modules/VPDPInfoBrandName.vue'
    import Location from '@/modules/VPDPInfoLocation.vue'
    import ItemName from '@/modules/VPDPInfoItemName.vue'
    import Reviews from '@/modules/VPDPInfoReviews.vue'
    import Price from '@/modules/VPDPInfoPrice.vue'
    import AppBuy from '@/modules/VPDPInfoAppBuy.vue'

    export default {
        name: 'PDP_INFO',
        props: {
            data: { type: Object, required: true }
        },
        components: {
            BrandName,
            Location,
            ItemName,
            Reviews,
            Price,
            AppBuy
        },
        data() {
            return {
                badgeData: [],
                locationData: {},
                itemName: this.data.detailInfo[0].itemName,
                infoReviewData: this.data.itemReviews,
                priceData: this.data.priceInfo
            }
        },
        created() {
            this.badgeData = setBadgeData(this.data)
            this.locationData = setLocationData(this.data.detailInfo[0].category)
        },
        computed: {
            // badgeLoader
            badgeComponentLoader() {
                if (this.badgeData.length > 0) {
                    return () => import('@/modules/VPDPInfoBadges.vue')
                }
                return false
            }
        }
    }
</script>
