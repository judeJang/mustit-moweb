<script>
    import Swiper from 'swiper'
    export default {
        name: 'SmallProduct',
        props: {
            id: { type: String, default: '' },
            discountShow: { type: Boolean, default: false },
            img: { type: String, default: '' }
        },
        data() {
            return {
                swiper: null,
                imgPath:
                    'https://cdn.mustit.co.kr/lib/upload/admin/specialSale/img_1648432148-437381317.jpg'
            }
        },
        mounted() {
            if (this.img !== '') this.imgPath = this.img

            this.swiper = new Swiper(this.$refs[this.id], {
                resizeObserver: true,
                slidesPerView: 'auto',
                freeMode: true
            })
        }
    }
</script>
<template>
    <article class="small_product">
        <div class="comp_free_swiper swiper-container" :ref="id">
            <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="index in 20" :key="index">
                    <a class="swiper_link" href="#">
                        <div class="img_wrap">
                            <img :src="imgPath" alt="product" class="cover_img" />
                        </div>
                        <div class="info_container">
                            <p class="brand">Barbour</p>
                            <p class="name">
                                여성 인터내셔널 폴라 퀼여성 인터내셔널 폴라 퀼여성
                                인터내셔널 폴라 퀼
                            </p>
                            <div class="price">
                                <p class="discount_price">189,000</p>
                                <p class="discount" v-if="discountShow">64%</p>
                            </div>
                            <!-- 정상가 삭제 <del class="del_price">390,000</del> -->
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </article>
</template>
