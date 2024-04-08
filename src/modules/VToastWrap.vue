<template>
    <div>
        <transition name="toast-up">
            <component :is="toast" :func="click" v-if="show"></component>
        </transition>
    </div>
</template>
<script>
    export default {
        props: {
            toastEl: { type: String, required: true },
            show: { Type: Boolean, required: true },
            click: { Type: Function }
        },
        data() {
            return {
                component: null
            }
        },
        watch: {
            show(newVal) {
                if (newVal) {
                    this.toas()
                        .then((result) => {
                            this.component = result.default || result
                        })
                        .catch((err) => {
                            alert(err.massage)
                        })
                }
            }
        },
        computed: {
            toast() {
                if (!this.toastEl) {
                    return () => Promise.resolve(null)
                }
                return () => import(`@/modules/${this.toastEl}`)
            }
        }
    }
</script>
