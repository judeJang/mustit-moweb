<template>
    <div>
        <transition name="slide-up">
            <keep-alive>
                <component
                    :is="component"
                    :zIndex="zIndex"
                    v-if="slideUpOpen"
                ></component>
            </keep-alive>
        </transition>
        <transition name="fade-ani">
            <div
                class="black_deem"
                v-if="slideUpOpen"
                @click="close"
                :style="`z-index:${zIndex - 1}`"
            ></div>
        </transition>
    </div>
</template>
<style lang="scss" scoped>
    .black_deem {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 9001;
        background: rgba(0, 0, 0, 0.5);
    }
</style>
<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        props: {
            zIndex: { type: [Number, String], default: 9003 }
        },

        data() {
            return {
                component: null
            }
        },

        watch: {
            slideUpOpen(newVal) {
                if (newVal) {
                    this.loader()
                        .then((loadedComponent) => {
                            this.component = loadedComponent.default || loadedComponent
                        })
                        .catch((err) => {
                            alert(err.massage)
                        })
                }
            }
        },

        computed: {
            ...mapState('modalModule', ['slideUpOpen', 'slideComponentName']),
            loader() {
                if (!this.slideComponentName) {
                    return () => Promise.resolve(null)
                }
                return () => import(`@/modules/${this.slideComponentName}`)
            }
        },

        methods: {
            ...mapActions('modalModule', ['slideUpModalAction']),
            close() {
                this.slideUpModalAction(false)
            }
        },

        mounted() {}
    }
</script>
