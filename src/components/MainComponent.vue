<template>
    <div class="hello">
        <p>{{ msg }}</p>
    </div>
</template>

<script>
    export default {
        name: 'MainComponent',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    p {
        padding: 20px 10px;
        color: #ccc;
        text-align: center;
    }
</style>
