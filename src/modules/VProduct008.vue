<template>
    <article>
        <TitleArea :subTitle="subTitle" :title="title" />
        <!-- ThreeRowItemListModule -->
        <div class="product008_list self_module" :ref="id">
            <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="i in listLength" :key="i">
                    <div class="product_box" v-for="index in 3" :key="index">
                        <a href="#">
                            <div class="img_wrap">
                                <img :src="imgPath" alt="product" class="cover_img" />
                            </div>
                            <div class="info_container">
                                <p class="brand">
                                    Miu Miu
                                    <span class="delivery_icon">
                                        <img
                                            src="https://static-ux.mustit.co.kr/img/m/m_badge/icon-quick.png"
                                            v-if="index === 1"
                                        />
                                        <img
                                            src="https://static-ux.mustit.co.kr/img/m/m_badge/icon-oversea.png"
                                            v-if="index === 3"
                                        />
                                    </span>
                                </p>
                                <p class="desc">23SS MIU MIU 미우미우 여성 스마일</p>
                                <div class="price">
                                    <p class="discount_price">950,000</p>
                                    <p class="discount">34%</p>
                                </div>
                                <del class="del_price">1,450,000</del>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>
            <div
                class="product_pagination swiper-pagination"
                ref="productPagination"
            ></div>
        </div>
    </article>
</template>

<script>
    import Swiper from 'swiper'
    import TitleArea from '@/modules/VTitleArea.vue'

    export default {
        name: 'VProduct008',
        components: { TitleArea },
        props: {
            id: { type: String, default: 'product008' },
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
                slidesPerView: 'auto',
                observer: true,
                observeParents: true,
                pagination: {
                    el: this.$refs.productPagination,
                    clickable: true
                }
            })
        }
    }
</script>
