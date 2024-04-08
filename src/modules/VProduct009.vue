<template>
    <article>
        <TitleArea :subTitle="subTitle" :title="title" />
        <!-- ThreeByTwoItemListModule -->
        <div class="product009_list self_module" :ref="id">
            <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="i in listLength" :key="i">
                    <div class="product_box" v-for="index in 6" :key="index">
                        <a href="#">
                            <div class="img_wrap">
                                <img :src="imgPath" alt="product" class="cover_img" />
                            </div>
                            <div class="info_container">
                                <p class="brand">Moncler</p>
                                <p class="desc">핑크 여성 패딩 가디건 L</p>
                                <div class="price">
                                    <p class="discount_price">891,000</p>
                                    <p class="discount">21%</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>
            <div
                class="product_pagination swiper-pagination"
                ref="outletPagination"
            ></div>
        </div>
    </article>
</template>

<script>
    import Swiper from 'swiper'
    import TitleArea from '@/modules/VTitleArea.vue'

    export default {
        name: 'VProduct009',
        components: { TitleArea },
        props: {
            id: { type: String, default: 'product009' },
            title: { type: String, default: '' },
            subTitle: { type: String, default: '' }
        },
        data() {
            return {
                swiper: null,
                listLength: 5,
                imgPath:
                    'https://cdn.mustit.co.kr/lib/upload/home/category_best/2022/03/2e830260be3809feb6bc169e16cb7ee0.jpeg'
            }
        },
        mounted() {
            this.swiper = new Swiper(this.$refs[this.id], {
                speed: 500,
                resizeObserver: true,
                followFinger: false,
                touchReleaseOnEdges: true,
                slidesPerView: 1,
                observer: true,
                observeParents: true,
                pagination: {
                    el: this.$refs.outletPagination,
                    clickable: true
                }
            })
        }
    }
</script>
