<script>
    export default {
        name: 'GalleryItem',
        props: {
            link: { type: String, default: '#' }
        },
        data() {
            return {
                imgPath:
                    'https://cdn.mustit.co.kr/lib/upload/home/category_best/2022/03/2e830260be3809feb6bc169e16cb7ee0.jpeg'
            }
        }
    }
</script>
<template>
    <a class="comp_gallery_item" href="#">
        <div class="img_wrap">
            <img :src="imgPath" alt="product" class="cover_img" />
        </div>
        <div class="info_container">
            <p class="brand">Nike</p>
            <p class="desc">빅스우시 리버시블 플리스 자빅스우시 리버시블 플리스 자</p>
            <div class="price">
                <p class="discount_price">199,000</p>
                <p class="discount">35%</p>
            </div>
            <!-- <del class="del_price">364,300</del> -->
        </div>
    </a>
</template>
