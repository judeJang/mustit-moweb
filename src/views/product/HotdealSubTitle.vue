<template>
    <div class="hotdeal_subtitle" :class="{ white_bg: bg }">
        <h2 class="hotdeal_subtitle__name">{{ title }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'HotdealSubTitle',
        props: {
            title: String,
            bg: { type: Boolean, default: false }
        }
    }
</script>
