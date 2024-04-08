<template>
    <div class="PDP_location">
        <span v-for="(value, index) in data" :key="index">
            {{ value }}
        </span>
    </div>
</template>

<script>
    export default {
        name: 'PDP_LOCATION',
        props: {
            data: { type: Object, required: true }
        }
    }
</script>
