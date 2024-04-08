<template>
    <main>
        <slot></slot>
        <DrawerNaviVue />
        <SubBottom />
        <BottomDivider/>
        <Deem />
    </main>
</template>

<script>
    import DrawerNaviVue from '@/components/DrawerNavi.vue'
    import SubBottom from '@/layouts/AppSubBottom.vue'
    import BottomDivider from "@/layouts/AppBottomDivider.vue"
    import Deem from '@/components/BaseDeem.vue'

    export default {
        name: 'AppLayoutNF',
        components: {
            SubBottom,
            DrawerNaviVue,
            BottomDivider,
            Deem
        }
    }
</script>

<style lang="scss" scoped></style>
