<template>
    <div class="empty_result">
        <i class="comp_icon_empty"></i>
        <p class="dont-have">{{ subText }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            subText: String
        }
    }
</script>
