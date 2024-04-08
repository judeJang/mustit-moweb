<template>
    <article>
        <div class="container sub_compnent_container">Sub Component</div>
        <button @click="onClickHandler">button</button>
    </article>
</template>

<script>
    export default {
        name: 'SubComponent',
        methods: {
            onClickHandler() {
                alert('onClickHandler')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sub_compnent_container {
        background-color: #bbb;
        font-size: 14px;
        color: #fff;
    }
</style>
