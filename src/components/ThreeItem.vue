<script>
    export default {
        name: 'GalleryItem',
        props: {
            link: { type: String, default: '#' },
            i: { type: Number, default: 99999 },
            j: { type: Number, default: 99999 }
        },
        data() {
            return {
                isNumberic: true,
                firstNum: this.i,
                secondNum: this.j
            }
        },
        mounted() {
            if (this.firstNum == 99999 && this.secondNum == 99999) {
                this.isNumberic = false
            }
        }
    }
</script>
<template>
    <a class="comp_three_item" :href="link" :class="{ 'no_numberic': !isNumberic }">
        <div class="img_wrap" :data-rank="i * 6 + j">
            <img
                src="https://cdn.mustit.co.kr/lib/upload/home/brand_pick/2021/09/c1a627de9da37e638c1795cff6bb1c61.jpeg"
                alt="product"
                class="cover_img"
            />
        </div>
        <div class="info_container">
            <p class="brand">Ralph Lauren</p>
            <div class="price">
                <p class="discount_price">60,200</p>
                <p class="discount">35%</p>
            </div>
            <!-- <del class="del_price">235,000</del> -->
        </div>
    </a>
</template>
