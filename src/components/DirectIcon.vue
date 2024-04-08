<script>
    export default {
        name: 'DirectIcon',
        props: {
            src: String,
            name: String,
            newClass: Boolean,
            deemClass: Boolean
        }
    }
</script>
<template>
    <a class="direct_icon" :class="{ new: newClass, no_deem: deemClass }" href="#">
        <span class="direct_icon__img">
            <img :src="src" :alt="name" />
        </span>
        <p class="direct_icon__name">{{ name }}</p>
    </a>
</template>
