<template>
    <div class="forgery_goods">
        <div class="info_box">
            <p class="date">2022-03-14</p>
            <p class="state" v-if="applyComplete">진행중</p>
            <a href="#" class="find_item" v-else>주문내역 보기</a>
        </div>
        <a href="#" class="item_container">
            <div class="thumb">
                <img
                    :src="
                        applyComplete
                            ? 'https://cdn.mustit.co.kr/lib/upload/product/s-project/2022/05/75ceb5cde2b2dc0ab6543e7c5a86ab63.jpeg/_dims_/resize/60x60/extent/60x60'
                            : 'https://cdn.mustit.co.kr/lib/upload/product/pmultishop6/2022/07/1657533188-98.jpeg/_dims_/resize/100x100/extent/100x100'
                    "
                    alt="톰브라운 사선 완장 울 가디건 5 color MKC002A Y1014"
                />
            </div>
            <div class="item_info">
                <p class="brand">THOM BROWNE</p>
                <p class="name">톰브라운 사선 완장 울 가디건 5 color MKC002A Y1014</p>
                <p class="price">816,000</p>
            </div>
        </a>
        <button
            type="button"
            @click="historyModalOpen()"
            class="history_btn"
            v-if="applyComplete"
        >
            신고 내역 보기
        </button>
        <button type="button" @click="formModalOpen()" class="apply_btn" v-else>
            신고하기
        </button>
    </div>
</template>

<script>
    import EventBus from '@/assets/js/EventBus'
    export default {
        name: 'ForgeryApplyGoodsCard',
        props: {
            applyComplete: Boolean
        },
        methods: {
            formModalOpen() {
                EventBus.$emit('forgeryFormModalOpen')
            },
            historyModalOpen() {
                EventBus.$emit('forgeryHistoryModalOpen')
            }
        }
    }
</script>
