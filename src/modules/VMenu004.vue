<template>
    <article>
        <TitleArea :subTitle="subTitle" :title="title" />
        <!-- NineMatrixModule -->
        <div class="menu004_container self_module">
            <a href="#" class="menu" v-for="(item, index) in brandData" :key="index">
                <div class="img_wrap"><img :src="item.file" :alt="item.name" /></div>
                <p class="name">{{ item.name }}</p>
            </a>
        </div>
    </article>
</template>

<script>
    import TitleArea from '@/modules/VTitleArea.vue'
    export default {
        name: 'VMenu004',
        components: { TitleArea },
        props: {
            title: { type: String, default: '' },
            subTitle: { type: String, default: '' }
        },
        data() {
            return {
                brandData: [
                    {
                        name: 'Moncler',
                        file: 'https://image.mustit.co.kr/lib/upload/home/brand_pick/7de9e463f3da3e5b48f1f35c9d2af4f8.jpg'
                    },
                    {
                        name: 'Max Mara',
                        file: 'https://image.mustit.co.kr/lib/upload/home/brand_pick/6c31a07d81e29dd748b2d6419364f4ca.jpg'
                    },
                    {
                        name: 'GUCCI',
                        file: 'https://image.mustit.co.kr/lib/upload/home/brand_pick/12b2b897653c29a4f94c5d2c72375a31.jpg'
                    },
                    {
                        name: 'PRADA',
                        file: 'https://image.mustit.co.kr/lib/upload/home/brand_pick/cc0db3a912deb29b4a42d1bfaec50a17.jpg'
                    },
                    {
                        name: 'BURBERRY',
                        file: 'https://image.mustit.co.kr/lib/upload/home/brand_pick/eaf0f442e166c7e2ce5e3154eb53b443.jpg'
                    },
                    {
                        name: 'CHANEL',
                        file: 'https://image.mustit.co.kr/lib/upload/home/brand_pick/4db714801fdf9ff79429cdb7308af34f.jpg'
                    },
                    {
                        name: 'Louis Vuitton',
                        file: 'https://image.mustit.co.kr/lib/upload/home/special_display_plan/2b0e2e091213087495dd09f315f6f4d9.jpg/_dims_/resize/750x1000/quality/80/autorotate/on'
                    },
                    {
                        name: 'STONE ISLAND',
                        file: 'https://image.mustit.co.kr/lib/upload/home/special_display_plan/af33431932a3644634eb0efc79e9c5ca.jpg/_dims_/resize/750x1000/quality/80/autorotate/on'
                    },
                    {
                        name: 'THOM BROWNE',
                        file: 'https://image.mustit.co.kr/lib/upload/home/special_display_plan/a6836e78a769ef78b8a0a6025573feec.jpg/_dims_/resize/750x1000/format/webp/autorotate/on'
                    }
                ]
            }
        }
    }
</script>
