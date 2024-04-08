<script>
    import Swiper from 'swiper'
    export default {
        props: {
            id: { type: String, default: '' },
            bgImg: {
                type: String,
                default:
                    'https://mustit-upload.s3.ap-northeast-2.amazonaws.com/mobile/improve/m-sellingevent-01.jpg'
            },
            productImg: {
                type: String,
                default:
                    'https://cdn.mustit.co.kr/lib/upload/home/category_best/2022/01/d553191b28357afcaf48b3b11673eabd.jpeg'
            },
            type2: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                swiper: null
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
<template>
    <article class="popular_event" :class="{ type2: type2 }">
        <div class="popular_event__bg">
            <img class="bg_img" :src="bgImg" alt="product" />
        </div>
        <div class="popular_event__front">
            <a class="back_link" href="#">
                <div class="text_container">
                    <p class="small_text">
                        <slot name="small_text"></slot>
                    </p>
                    <p class="big_text">
                        <slot name="big_text"></slot>
                    </p>
                </div>
                <div class="arr_wrap">
                    <img
                        class="arr_img"
                        src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/arrow-right-event.svg"
                        alt="arrow"
                    />
                </div>
            </a>
            <div :ref="id" class="popular_event__swiper swiper-container">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide" v-for="list in 5" :key="list">
                        <a class="swiper_link" href="#">
                            <div class="img_wrap">
                                <img :src="productImg" alt="product" class="cover_img" />
                            </div>
                            <div class="info_container">
                                <p class="brand">Moncler</p>
                                <p class="name">21FW 후드 뽀글이자켓</p>
                                <div class="price">
                                    <p class="discount_price">492,400</p>
                                    <p class="discount">34%</p>
                                </div>
                                <!-- 정상가 삭제<del class="del_price">734,300</del> -->
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </article>
</template>
