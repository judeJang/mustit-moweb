<template>
    <div class="hotdeal_list_top">
        <p class="list_length"><strong>12,572</strong>개 상품</p>
        <button type="button" class="sort_btn" @click="openLayer">
            {{ sort }}
        </button>
    </div>
</template>

<script>
    import EventBus from '@/assets/js/EventBus'
    export default {
        props: {
            sort: { type: String, default: '추천순' }
        },
        methods: {
            openLayer() {
                EventBus.$emit('sortOpen')
            }
        }
    }
</script>
