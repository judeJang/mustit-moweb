<template>
    <article class="save_point_container">
        <item></item>
        <form class="input_box">
            <BaseInputClear type="number" placeholder="100원 단위로 입력해 주세요." />
            <button type="button" class="submit_btn">전액사용</button>
        </form>
    </article>
</template>
<script>
    import Item from '@/views/layer/order/DiscountItem.vue'
    import BaseInputClear from '@/components/BaseInputClear.vue'

    export default {
        components: { Item, BaseInputClear }
    }
</script>
