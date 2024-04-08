<template>
    <p class="PDP_item_name">{{ itemName }}</p>
</template>

<script>
    export default {
        name: 'PDP_ITEM_NAME',
        props: {
            itemName: { type: String, require: true }
        }
    }
</script>
