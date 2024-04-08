<template>
    <article class="banner009 self_module">
        <div class="banner_swiper swiper-container" :ref="id">
            <ul class="swiper-wrapper">
                <li
                    class="swiper-slide banner_box"
                    v-for="(img, index) in images"
                    :key="index"
                >
                    <a href="#">
                        <img :src="img" alt="benefit banner" />
                    </a>
                </li>
            </ul>
        </div>
    </article>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        name: 'SmallProduct',
        props: {
            id: { type: String, default: '' }
        },
        data() {
            return {
                swiper: null,
                images: [
                    'https://dummyimage.com/280x280/212631/fff',
                    'https://dummyimage.com/280x280/e23f4b/fff',
                    'https://dummyimage.com/280x280/4ba29c/fff',
                    'https://dummyimage.com/280x280/212631/fff',
                    'https://dummyimage.com/280x280/e23f4b/fff',
                    'https://dummyimage.com/280x280/4ba29c/fff'
                ]
            }
        },
        mounted() {
            this.swiper = new Swiper(this.$refs[this.id], {
                resizeObserver: true,
                slidesPerView: 'auto',
                freeMode: true
            })
        }
    }
</script>
