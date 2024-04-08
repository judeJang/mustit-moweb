<template>
    <article class="boutique_category_direct self_module">
        <a
            href="#"
            class="direct_icon"
            v-for="(data, index) in categoryData"
            :key="index"
        >
            <span class="img">
                <img :src="data.file" :alt="data.name" />
            </span>
            <p class="name">{{ data.name }}</p>
        </a>
    </article>
</template>
<script>
    // const tempPath = 'https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/temp/cpp/'
    export default {
        name: 'BoutiqueMenu003',
        data() {
            return {
                categoryData: [
                    {
                        name: '여성의류',
                        file: 'https://image.mustit.co.kr/lib/upload/home/mobile_main_menu001/42360abc7afa78a7ea4fc5b0dcaa26bc.png/_dims_/resize/112/quality/80'
                    },
                    {
                        name: '여성슈즈',
                        file: 'https://image.mustit.co.kr/lib/upload/home/mobile_main_menu001/2b9139f1d4b0dfa9189e3c1cdb2a2654.png/_dims_/resize/112/quality/80'
                    },
                    {
                        name: '여성가방',
                        file: 'https://image.mustit.co.kr/lib/upload/home/mobile_main_menu001/39ebfd7f7456d1f1982feefed9af5522.png/_dims_/resize/112/quality/80'
                    },
                    {
                        name: '여성ACC',
                        file: 'https://image.mustit.co.kr/lib/upload/home/mobile_main_menu001/34b6fc77c88dcb8cfe6083f1b941b289.png/_dims_/resize/112/quality/80'
                    },
                    {
                        name: '남성의류',
                        file: 'https://image.mustit.co.kr/lib/upload/home/mobile_main_menu001/8834350290609e6e8134928793a3d6be.png/_dims_/resize/112/quality/80'
                    },
                    {
                        name: '남성슈즈',
                        file: 'https://image.mustit.co.kr/lib/upload/home/mobile_main_menu001/748f86815e0a5a8e7a4f0a1210d6db67.png/_dims_/resize/112/quality/80'
                    },
                    {
                        name: '남성가방',
                        file: 'https://image.mustit.co.kr/lib/upload/home/mobile_main_menu001/a916095bba9a2844f9766f3145475ce0.png/_dims_/resize/112/quality/80'
                    },
                    {
                        name: '남성ACC',
                        file: 'https://image.mustit.co.kr/lib/upload/home/mobile_main_menu001/0909dadc69bd4638c42bdc345fda1546.png/_dims_/resize/112/quality/80'
                    }
                ]
            }
        }
    }
</script>
