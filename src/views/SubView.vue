<template>
    <section class="container sub_view_contaienr">
        <h2>Sub Title</h2>
        <div>Sub View</div>
        <SubComponent />
    </section>
</template>

<script>
    import SubComponent from '@/components/SubComponent.vue'

    export default {
        components: {
            SubComponent
        }
    }
</script>

<style lang="scss" scoped>
    .sub_view_contaienr {
        background-color: #ddd;
    }
</style>
