<template>
    <div :class="['hotdeal_item_container', { soldout: item.jeago == 0 }, className]">
        <a href="#">
            <div class="img_wrap">
                <img :src="item.imgPath" alt="product" class="cover_img" />
                <div class="remaining_date">{{ item.leftDate }}일 남음</div>
            </div>
            <div class="info_container">
                <p class="brand">{{ item.brand }}</p>
                <p class="name">{{ item.productName }}</p>
                <div class="price_box">
                    <div class="discount" v-if="item.discount > 0">
                        <strong>{{ item.discount }}</strong>
                    </div>
                    <div class="price">
                        <del class="del_price">{{ item.delPrice }}</del>
                        <p class="discount_price">{{ item.discountPrice }}</p>
                    </div>
                </div>
                <div class="badge_box">
                    <span class="badge red" v-if="item.jeago <= 10 && item.jeago > 0">
                        품절임박
                    </span>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        props: {
            item: { type: Object },
            className: { type: String }
        }
    }
</script>

<style></style>
