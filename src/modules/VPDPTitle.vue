<script>
    export default {
        name: 'MainTitle',
        props: {
            title: { type: String, required: true },
            allView: Boolean,
            link: String,
            bg: Boolean,
            count: [Number, String]
        }
    }
</script>
<template>
    <article :class="['PDP_title', { white_bg: bg }]">
        <h3 class="PDP_title__name">
            {{ title }} <span class="number" v-if="count">({{ count }})</span>
        </h3>
        <a :href="link" class="PDP_title__link" v-if="allView">전체보기</a>
    </article>
</template>
