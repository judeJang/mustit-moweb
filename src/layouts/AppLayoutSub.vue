<template>
    <main>
        <slot></slot>
        <DrawerNaviVue />
        <SubBottom />
        <Deem />
        <div class="empty_box"></div>
    </main>
</template>

<script>
    import DrawerNaviVue from '@/components/DrawerNavi.vue'
    import SubBottom from '@/layouts/AppSubBottom.vue'
    import Deem from '@/components/BaseDeem.vue'

    export default {
        name: 'AppLayoutSub',
        components: {
            SubBottom,
            DrawerNaviVue,
            Deem
        }
    }
</script>

<style lan="scss" scoped>
    .empty_box {
        height: 80px;
    }
</style>
