<template>
    <transition name="fade-ani">
        <div class="layer_node" v-if="showLayer">
            <div class="mask" @click="close"></div>
            <div class="layer_insert">
                <component :is="layer()"></component>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        data() {
            return {
                showLayer: false,
                path: ''
            }
        },
        methods: {
            close() {
                this.showLayer = false
            },
            open() {
                this.showLayer = true
            }
        },
        computed: {
            layer() {
                const layer = this.path
                return () => require(`@/${layer}.vue`).default
            }
        }
    }
</script>
