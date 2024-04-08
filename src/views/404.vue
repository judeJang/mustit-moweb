<template>
    <section>
        <MainComponent msg="404 Not Found" />
    </section>
</template>

<script>
    import MainComponent from '@/components/MainComponent.vue'

    export default {
        components: {
            MainComponent
        }
    }
</script>

<style lang="scss" scoped>
    section {
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    .test {
        color: $primary;
        display: block;
        text-align: center;
    }
    img {
        display: block;
        width: 30%;
        margin: 0 auto;
    }
</style>
