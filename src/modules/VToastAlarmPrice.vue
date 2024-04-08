<template>
    <div class="PDP_toast_alarm_price" v-if="toastShow">{{ toastMsg }}</div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        computed: {
            ...mapState('comparePriceModule', ['toastMsg', 'toastShow'])
        }
    }
</script>
