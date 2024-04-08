<template>
    <article class="PDP_share self_module" :style="`z-index:${zIndex}`">
        <div class="layer_head">
            <p class="title">공유하기</p>
            <button type="button" class="layer_close" @click="closeLayer"></button>
        </div>
        <div class="layer_body">
            <button class="share_list kakao">카카오톡으로 공유하기</button>
            <button class="share_list url">URL 복사하기</button>
        </div>
    </article>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        props: {
            zIndex: { type: Number, default: 9003 }
        },
        data() {
            return {}
        },
        methods: {
            ...mapActions('modalModule', ['slideUpModalAction']),
            closeLayer() {
                this.slideUpModalAction(false)
            }
        },
        mounted() {}
    }
</script>

<style></style>
