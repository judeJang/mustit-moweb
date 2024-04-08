<template>
    <transition name="fade-ani">
        <div
            class="comp_black_deem"
            :class="addClass"
            v-if="deemShow"
            @click="toggleDeem()"
        ></div>
    </transition>
</template>
<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: 'deem',
        props: {
            className: { type: String, default: '' }
        },
        computed: {
            ...mapState('deemModule', ['deemShow', 'addClass'])
        },
        methods: {
            ...mapActions('deemModule', ['toggleDeem'])
        }
    }
</script>
