<template>
    <div class="PDP_badge_box">
        <span class="badge_outlet" v-if="outlet">아울렛</span>
        <span class="badge_hotdeal" v-if="hotdeal">핫딜</span>
        <span class="badge_exhibition" v-if="exhibition">기획전 할인</span>
        <span class="badge_free" v-if="free">무료교환 반품</span>
        <span class="badge_used" v-if="used">중고</span>
    </div>
</template>

<script>
    export default {
        name: 'PDP_BADGES',
        props: {
            data: { type: Array, require: true }
        },
        data() {
            return {
                outlet: false,
                hotdeal: false,
                exhibition: false,
                free: false,
                used: false
            }
        },
        created() {
            this.data.forEach((obj) => {
                switch (obj.name) {
                    case 'isOutletItem':
                        this.outlet = obj.value
                        break
                    case 'timeSale':
                        this.hotdeal = true
                        break
                    case 'isExhibSaleItem':
                        this.exhibition = obj.value
                        break
                    case 'isFreeSellerItem':
                        this.free = obj.value
                        break
                    case 'isUsed':
                        this.used = obj.value
                        break
                }
            })
        },
        mounted() {},
        destroyed() {}
    }
</script>
