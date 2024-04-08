<template>
    <transition name="slide-up">
        <div class="layer_node" v-if="isFullModalOpen">
            <div class="all_layer_insert">
                <component :is="layer()" :twoDepth="tDepth"></component>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        props: {
            modalPath: { type: String, default: '' },
            subPath: { type: String, default: '' }
        },
        data() {
            return {
                isFullModalOpen: false,
                oDepth: this.modalPath,
                tDepth: this.subPath
            }
        },
        methods: {
            open() {
                this.isFullModalOpen = true
            },
            close() {
                this.isFullModalOpen = false
            }
        },
        computed: {
            layer() {
                const layer = this.oDepth
                return () => require(`@/views/layer/${layer}.vue`).default
            }
        },
        watch: {
            sModalCount(nV, oV) {
                console.warn('ModalCount', nV, oV)
            },
            oDepth(nV, oV) {
                console.warn('ModalPath', nV, oV)
            },
            tDepth(nV, oV) {
                console.log('SubPath', nV, oV)
            },
            orderModalType(nV, oV) {
                console.warn('FullModalFrame', nV, oV)
            }
        }
    }
</script>
