<template>
    <div class="PDP_review_list">
        <div class="review_list_header">
            <div class="point_star">
                <i
                    v-for="index in 5"
                    :key="index"
                    :class="{ active: index <= data.point }"
                ></i>
            </div>
            <p class="review_name" v-if="data.comment">{{ data.comment }}</p>
            <p class="user_info">
                {{ data.height }}cm
                <template v-if="data.weight"> / {{ data.weight }}kg</template>
            </p>
        </div>
        <div class="review_info">
            <div class="img_wrap" v-if="data.img">
                <img :src="data.img" alt="제품이미지" />
            </div>
            <p class="reply">{{ data.reply }}</p>
        </div>
        <p class="review_list_bottom">
            <span>{{ data.id }}</span>
            <span class="date">{{ data.date }}</span>
            <span>판매자 : {{ data.seller }}</span>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'PDP_REVIEW_LIST',
        props: {
            data: { type: [Array, Object], required: true }
        }
    }
</script>
