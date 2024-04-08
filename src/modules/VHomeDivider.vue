<template>
    <div class="divider" :class="{ 'white_bg': whiteColor }"></div>
</template>
<script>
    export default {
        name: 'divider',
        props: {
            whiteColor: { type: Boolean, default: false }
        }
    }
</script>
