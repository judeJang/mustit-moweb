<template>
    <article class="main_multy_title">
        <p>{{ sub }}</p>
        <h2>{{ title }}</h2>
    </article>
</template>
<script>
    export default {
        name: 'MainMultyTitle',
        props: {
            title: String,
            sub: String
        }
    }
</script>
