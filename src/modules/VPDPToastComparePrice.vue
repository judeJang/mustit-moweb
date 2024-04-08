<template>
    <article class="PDP_toast_has_compare">
        <button type="button" @click="func()">
            <strong>더 저렴한 동일 상품</strong>이 있어요! 비교하고 구매하세요.
        </button>
    </article>
</template>
<script>
    export default {
        name: 'PDP_ORDER_OPTION',
        props: {
            func: { type: Function }
        }
    }
</script>
