<template>
    <main>
        <slot></slot>
        <Footer />
        <Deem />
    </main>
</template>

<script>
    import Footer from '@/layouts/AppFooter.vue'
    import Deem from '@/components/BaseDeem.vue'

    export default {
        name: 'AppLayoutNB',
        components: {
            Footer,
            Deem
        }
    }
</script>

<style lang="scss" scoped></style>
