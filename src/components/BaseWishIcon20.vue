<template>
    <i class="comp_icon_wish" :class="classes" @click="toggleWish()"></i>
</template>
<script>
    export default {
        name: 'WishIcon',
        props: {
            add: { type: Boolean, default: false }
        },
        data() {
            return {
                interactionAdd: this.add,
                classes: {},
                firstClick: false
            }
        },
        beforeMount() {
            this.attachClasses()
        },
        methods: {
            attachClasses() {
                this.classes = {
                    'add': this.add,
                    'remove': !this.add
                }
            },
            toggleWish() {
                this.firstClick = true
                this.interactionAdd = !this.interactionAdd

                this.classes = {
                    'add': this.interactionAdd,
                    'remove': !this.interactionAdd,
                    'ani': this.firstClick
                }
            }
        }
    }
</script>
