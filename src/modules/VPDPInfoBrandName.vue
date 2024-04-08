<template>
    <h2 class="PDP_brand_name">
        <a
            :href="`https://m.web.mustit.co.kr/m/product/product_search?mode=brandPage&brand=${code}`"
            >{{ brand }}</a
        >
    </h2>
</template>

<script>
    export default {
        name: 'PDP_BRAND_NAME',
        data() {
            return {
                code: this.$parent.$parent.constBrandCode,
                brand: this.$parent.$parent.constBrandName
            }
        }
    }
</script>
