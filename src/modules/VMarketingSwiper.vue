<script>
    import ImgSwiper from '@/modules/VImgSwiper.vue'

    export default {
        name: 'Gallery',
        props: {
            id: { type: String, default: '' },
            img: { type: String, default: '' }
        },
        components: { ImgSwiper }
    }
</script>
<template>
    <article class="marketing_banner">
        <ImgSwiper :id="id" :img="img" />
    </article>
</template>
