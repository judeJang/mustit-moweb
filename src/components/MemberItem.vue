<script>
    export default {
        name: 'MemberItem',
        props: {
            className: String,
            min: { type: Number, default: 1 },
            max: { type: Number, default: 5 },
            index: { type: Number }
        },
        methods: {
            randomNumber() {
                return Math.floor(Math.random() * (+this.max - +this.min)) + +this.min
            }
        },
        data() {
            return {
                imgPath:
                    'https://cdn.mustit.co.kr/lib/upload/home/category_best/2022/08/810a314bd13a6c2b5adf48747ff0c764.jpeg'
            }
        }
    }
</script>
<template>
    <div class="comp_member_item" :class="(className, index === 1 ? 'soldout' : '')">
        <a href="#" class="comp_member_link">
            <div class="img_wrap">
                <div class="last_one_badge" v-if="randomNumber() === 1">
                    <span>1개 남음</span>
                </div>
                <!--<div class="soldout_badge" v-if="index === 1">
                    <span>품절</span>
                </div>-->
                <img :src="imgPath" alt="memberitem" class="cover_img" />
            </div>
            <div class="info_container">
                <p class="brand">BY FAR</p>
                <p class="desc">
                    베이비 엠버 숄더백베이비 엠버 숄더백베이비 엠버 숄더백베이비 엠버
                    숄더백베이비 엠버 숄더백
                </p>
                <p class="benefit">VIP혜택가</p>
                <div class="price">
                    <p class="discount_price">436,500</p>
                    <p class="discount">44%</p>
                </div>
            </div>
        </a>
    </div>
</template>
