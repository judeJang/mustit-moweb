<template>
    <section class="common_alert_wrap membership_point_info">
        <header class="common_alert_header">
            <h1>적립금 지급 안내</h1>
            <button
                type="button"
                class="layer_close"
                title="close layer"
                @click="close()"
            ></button>
        </header>
        <article class="common_alert_content">
            <p class="info_desc">상품 수령 후 7일 이내 구매결정 및 포토리뷰 작성 시 지급</p>
        </article>
    </section>
</template>
<script>
    import EventBus from '@/assets/js/EventBus'
    export default {
        components: {},
        data: function () {
            return {}
        },
        methods: {
            close() {
                EventBus.$emit('hideModal')
            }
   
        }
    }
</script>
<style scoped></style>
