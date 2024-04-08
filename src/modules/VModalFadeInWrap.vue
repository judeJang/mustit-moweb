<template>
    <article>
        <transition name="fade-ani">
            <div class="layer_node" v-if="fadeInOpen">
                <div class="mask" @click="close"></div>
                <div class="layer_insert">
                    <keep-alive>
                        <component :is="component"></component>
                    </keep-alive>
                </div>
            </div>
        </transition>
    </article>
</template>

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
            fadeInOpen(newVal) {
                if (newVal) {
                    this.loader()
                        .then((loadedComponent) => {
                            this.component = loadedComponent.default || loadedComponent
                        })
                        .catch((err) => {
                            console.log(err.massage)
                        })
                }
            }
        },

        computed: {
            ...mapState('modalModule', ['fadeInOpen', 'fadeComponentName']),
            loader() {
                if (!this.fadeComponentName) {
                    return () => Promise.resolve(null)
                }
                return () => import(`@/modules/${this.fadeComponentName}`)
            }
        },

        methods: {
            ...mapActions('modalModule', ['fadeModalAction']),
            close() {
                this.fadeModalAction(false)
            }
        }
    }
</script>
