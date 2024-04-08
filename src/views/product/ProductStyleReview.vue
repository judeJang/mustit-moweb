<template>
    <section class="product_detail_area common_css">
        <SubHeader title="스타일 리뷰" />
        <SubTopHeader :data="headerName" :isDropState="false" :rightShow="false" />
        <article class="member_review_area">
            <ProductReviewList type="style" />
        </article>
    </section>
</template>

<script>
    import SubHeader from '@/components/SubHeader.vue'
    import ProductReviewList from '@/views/product/VReviewList.vue'

    export default {
        name: 'MustitUxProductStyleReview',
        components: {
            // SubTopHeader,
            SubHeader,
            ProductReviewList
        },
        data() {
            return {
                headerName: [{ name: '스타일 리뷰' }]
            }
        },

        mounted() {},

        methods: {}
    }
</script>

<style lang="scss" scoped></style>
