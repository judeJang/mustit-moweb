<template>
    <!-- Product006, Product007 공통-->
    <article>
        <TitleArea :subTitle="subTitle" :title="title" />
        <!-- SimpleItemGridModule -->
        <div class="simple_grid_item_list self_module" :ref="id">
            <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="i in listLength" :key="i">
                    <div class="product_box" v-for="index in 4" :key="index">
                        <GalleryItem />
                    </div>
                </li>
            </ul>
            <div
                class="product_pagination swiper-pagination"
                ref="productPagination"
            ></div>
        </div>
        <!-- // SimpleItemGridModule -->
        <!-- BottomButtonModule -->
        <div class="bottom_button_module self_module" v-if="hasAll">
            <a href="#" class="btn_all"> 전체보기 </a>
        </div>
        <!-- // BottomButtonModule -->
        <!-- vertical margin -->
        <div v-else :style="dividerStyle"></div>
    </article>
</template>

<script>
    import Swiper from 'swiper'
    import GalleryItem from '@/components/BaseGalleryItem.vue'
    import TitleArea from '@/modules/VTitleArea.vue'

    export default {
        name: 'VOutletProduct',
        components: { GalleryItem, TitleArea },
        props: {
            id: { type: String, default: 'product' },
            title: { type: String, default: '' },
            subTitle: { type: String, default: '' },
            hasAll: { type: Boolean, default: false }
        },
        data() {
            return {
                swiper: null,
                listLength: 5,
                imgPath:
                    'https://cdn.mustit.co.kr/lib/upload/home/category_best/2022/03/2e830260be3809feb6bc169e16cb7ee0.jpeg',
                dividerStyle: { background: '#fff', height: '8px' }
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
                    el: this.$refs.productPagination,
                    clickable: true
                }
            })
        }
    }
</script>
