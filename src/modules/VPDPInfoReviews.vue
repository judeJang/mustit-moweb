<template>
    <button type="button" class="PDP_info_reviews" v-if="data">
        <strong>{{ data.summary.reviewTotalAvg }}</strong>
        <span>({{ data.reviewCnt }})</span>
    </button>
</template>

<script>
    export default {
        name: 'PDP_INFO_REVIEWS',
        props: {
            data: { type: Object }
        }
    }
</script>
