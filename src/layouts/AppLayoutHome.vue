<template>
    <section>
        <Header />
        <main>
            <slot></slot>
        </main>
        <DrawerNavi />
        <SubBottom />
        <Footer />
    </section>
</template>

<script>
    import Header from '@/layouts/AppHeader.vue'
    import Footer from '@/layouts/AppFooter.vue'
    import SubBottom from '@/layouts/AppSubBottom.vue'
    import DrawerNavi from '@/components/DrawerNavi.vue'

    export default {
        name: 'AppLayoutHOME',
        components: {
            Header,
            Footer,
            SubBottom,
            DrawerNavi
        }
    }
</script>
